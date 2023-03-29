import React from "react";
import { BoardTaskRenderContext } from "../../Components/Dashboard/Context/index";
import DashboardStyles from "../../styles/Dashboard.module.css";
import LogoTitleBar from "../../Components/Dashboard/LogoTitleBar";
import SidebarColumns from "../../Components/Dashboard/SidebarColumns";
import { authOptions } from "../api/auth/[...nextauth].js";
// import Link from "next/link";
import { getServerSession } from "next-auth/next";
import clientPromise from "../../config/mongoDB";
import { boardComponent } from "../../Components/Dashboard/BoardModal/index";
import { testCreateBoards } from "../../Components/Dashboard/SidebarColumns/Sidebar/BoardSelector/boardSelectorHelpers";

const AddBoardModal = boardComponent();

// set context here

export default function Dashboard({
  children,
  userData,
  currentBoard,
  title,
  isBoardEmpty,
  columns,
}) {
  console.log(userData, "userData");

  const memoizedStateValueAndFunc = React.useMemo(() => {
    return {
      // setStateFuncs
      setStateFuncs: {},
      stateFuncsForModals: {},
      stateValuesForModals: {},
    };
  }, []);
  // will use React.useState
  // const [initialDashboardValues, setDashboard] = React.useState({
  //   currentUserBoardsArray: userData.boards,
  //   selectedBoard: currentBoard,
  //   columns,
  //   title,
  //   isBoardEmpty,
  // });
  // console.log(initialDashboardValues);
  // console.log(initialDashboardValues.title);
  React.useEffect(() => {
    saveCurrentUserDataToLocalStorage(userData);
    saveCurrentBoardDataToLocalStorage(currentBoard);
  }, [userData.email]);
  // render dashboard every time user select a new board
  // React.useEffect(() => {
  //   saveCurrentBoardDataToLocalStorage(initialDashboardValues.selectedBoard);
  // }, [initialDashboardValues.title]);
  // return (
  //   <React.Fragment>
  //     <button onClick={testCreateBoards.bind({ email: userData.user.email })}>
  //       click me
  //     </button>
  //   </React.Fragment>
  // );
  // console.log(initialDashboardValues);
  // console.log(initialDashboardValues.title);
  return (
    <section
      id="color-theme"
      data-apptheme="light"
      className={DashboardStyles[`dashboard`]}
    >
      <BoardTaskRenderContext.Provider value={memoizedStateValueAndFunc}>
        {/* logotitlebar */}
        <LogoTitleBar
          valueForLogoutBtn
          valuesForTitleAddTask={{
            isBoardEmpty,
            title,
          }}
        />
        {/* <LogoTitleBar
          valueForLogoutBtn
          valuesForTitleAddTask={{
            isBoardEmpty: initialDashboardValues.isBoardEmpty,
            title: initialDashboardValues.title,
          }}
        /> */}
        {/* sidebarcolumns */}
        <SidebarColumns
          valuesForBoardsColumns={{
            currentUserBoardsArray: userData.boards,
            isBoardEmpty,
            columns,
          }}
        />
        {/* <SidebarColumns
          valuesForBoardsColumns={{
            currentUserBoardsArray:
              initialDashboardValues.currentUserBoardsArray,
            isBoardEmpty: initialDashboardValues.isBoardEmpty,
            columns: initialDashboardValues.columns,
            dashboardStateFunc: setDashboard,
          }}
        /> */}
      </BoardTaskRenderContext.Provider>
    </section>

    // <React.Fragment>
    //   {!userData ? (
    //     <p>
    //       You are currently not logged in. Please go to
    //       <Link href="/">
    //         <a>Sign in page</a>
    //       </Link>
    //     </p>
    //   ) : (
    //     <section
    //       id="color-theme"
    //       data-apptheme="light"
    //       className={DashboardStyles[`dashboard`]}
    //     >
    //       <BoardTaskRenderContext.Provider value={memoizedStateValueAndFunc}>
    //         {/* logotitlebar */}
    //         <LogoTitleBar valuesForTitleAddTask={{ isBoardEmpty, title }} />
    //         {/* sidebarcolumns */}
    //         <SidebarColumns
    //           valuesForBoardsColumns={{
    //             currentUserBoardsInfo: userData,
    //             isBoardEmpty,
    //             columns,
    //           }}
    //         />
    //       </BoardTaskRenderContext.Provider>
    //     </section>
    //   )}
    // </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  // console.log(session, "session");
  // if (!session) {
  //   console.log("session not found");
  //   return {
  //     props: { userData: session.user },
  //   };
  // }

  if (session) {
    console.log("session found", session);
    // next auth email provider will create a users collection in our database
    const clientConnect = await clientPromise;
    const usersCollection = clientConnect.db().collection("users");
    const isUserExist = await usersCollection.findOne({
      email: session.user.email,
      // email: "lovecode@dev.io",
    });
    console.log(isUserExist, "isUserExist");

    /**
     * will not check if user does not exist because next auth will create user in collection
     * when user click on sign in link in email
     * **/
    /**
     * new user logged in
     * **/
    if (!isUserExist.boards) {
      // update user in database
      await usersCollection.updateOne(
        { email: isUserExist.email },
        {
          $set: {
            boards: [],
          },
        }
      );

      const updatedUser = await usersCollection.findOne({
        email: isUserExist.email,
      });

      console.log(updatedUser, "updatedUser");

      const data = JSON.parse(JSON.stringify(updatedUser));

      return {
        props: {
          userData: data,
          currentBoard: null,
          title: "Add New Board",
          isBoardEmpty: true,
          boardIndex: 0,
          columns: null,
        },
      };
    }

    /**
     * user with boards array declared
     * **/

    if (isUserExist.boards) {
      console.log("We found user", isUserExist);
      const data = JSON.parse(JSON.stringify(isUserExist));

      if (data.boards.length === 0) {
        return {
          props: {
            userData: data,
            currentBoard: null,
            title: "Add New Board",
            isBoardEmpty: true,
            columns: null,
            boardIndex: 0,
          },
        };
      } else {
        const [currentBoard] = data.boards.filter(function findCurrentIndex(
          obj,
          index
        ) {
          return obj.isSelected;
        });
        console.log(currentBoard);
        const isBoardEmpty =
          !Array.isArray(currentBoard.columns.todo) &&
          !Array.isArray(currentBoard.columns.doing) &&
          !Array.isArray(currentBoard.columns.done);

        if (isBoardEmpty) {
          return {
            props: {
              userData: data,
              currentBoard,
              title: currentBoard.title,
              isBoardEmpty: true,
              boardIndex: 0,
              columns: {
                todo: null,
                doing: null,
                done: null,
              },
            },
          };
        }

        if (!isBoardEmpty) {
          return {
            props: {
              userData: data,
              currentBoard,
              title: currentBoard.title,
              isBoardEmpty: false,
              boardIndex: currentBoard.index,
              columns: {
                todo: !currentBoard.columns.todo
                  ? null
                  : currentBoard.columns.todo,
                doing: !currentBoard.columns.doing
                  ? null
                  : currentBoard.columns.doing,
                done: !currentBoard.columns.done
                  ? null
                  : currentBoard.columns.done,
              },
            },
          };
        }
      }
    }

    // return {
    //   props: { userData: JSON.parse(JSON.stringify(session)) },
    // };

    // return (
    //   <React.Fragment>
    //     <h2>You are not logged in</h2>
    //     <Link href="/">
    //       <a>Go to Sign In</a>
    //     </Link>
    //   </React.Fragment>
    // );
  }
}

function notes() {
  const styleObj = {
    display: "flex",
    gap: "10px",
  };

  const obj = {
    showTodo: false,
    showDoing: false,
    showDone: false,
  };
  const [stateValueObj, stateFunc] = React.useState(obj);

  return (
    <React.Fragment>
      <div>
        <div>
          <h2>kanban</h2>
          <div></div>
        </div>
        <div></div>
      </div>
      <button
        onClick={(event) => {
          const objFromStorage = JSON.parse(localStorage.getItem("testing"));

          stateFunc((preValues) => {
            return {
              ...preValues,
              showTodo: true,
              showDoing: true,
              showDone: true,
            };
          });
        }}
      >
        click me
      </button>
      <div style={styleObj}>
        {stateValueObj.showTodo ? <span>this is todo</span> : null}
        {stateValueObj.showDoing ? <span>this is doing</span> : null}
        {stateValueObj.showDone ? <span>this is done</span> : null}
      </div>
    </React.Fragment>
  );
}

function saveCurrentUserDataToLocalStorage(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
  // !localStorage.getItem("currentUser")
  //   ? localStorage.setItem("currentUser", JSON.stringify(user))
  //   : null;
}

function saveCurrentBoardDataToLocalStorage(board) {
  localStorage.setItem("currentBoard", JSON.stringify(board));
  // make currentBoard in localStorage. algorithm in getServerSideProps
  // !localStorage.getItem("currentBoard")
  //   ? localStorage.setItem("currentBoard", JSON.stringify(board))
  //   : null;
}
