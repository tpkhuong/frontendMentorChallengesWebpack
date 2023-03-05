import React from "react";
import { BoardTaskRenderContext } from "../../Components/Dashboard/Context/index";
import DashboardStyles from "../../styles/Dashboard.module.css";
import LogoTitleBar from "../../Components/Dashboard/LogoTitleBar";
import SidebarColumns from "../../Components/Dashboard/SidebarColumns";
// import { authOptions } from "../api/auth/[...nextauth].js";
// import Link from "next/link";
// import { getServerSession } from "next-auth/next";
// import clientPromise from "../../config/mongoDB";
import { testCreateBoards } from "../../Components/Dashboard/SidebarColumns/Sidebar/BoardSelector/boardSelectorHelpers";

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
    };
  }, []);

  React.useEffect(() => {
    // saveDataToLocalStorage(userData, currentBoard);
  }, []);
  return (
    <React.Fragment>
      <button onClick={testCreateBoards}>click me</button>
    </React.Fragment>
  );
  // return (
  // <section
  //   id="color-theme"
  //   data-apptheme="light"
  //   className={DashboardStyles[`dashboard`]}
  // >
  //   <BoardTaskRenderContext.Provider value={memoizedStateValueAndFunc}>
  {
    /* logotitlebar */
  }
  {
    /* <LogoTitleBar valuesForTitleAddTask={{ isBoardEmpty, title }} /> */
  }
  {
    /* sidebarcolumns */
  }
  {
    /* <SidebarColumns
          valuesForBoardsColumns={{
            currentUserBoardsInfo: userData,
            isBoardEmpty,
            columns,
          }}
        />
      </BoardTaskRenderContext.Provider>
    </section> */
  }
  // );
}

// export async function getServerSideProps(context) {
//   // const session = await getServerSession(context.req, context.res, authOptions);
//   // console.log(session, "session");
//   // if (!session) {
//   //   console.log("session not found");
//   //   return {
//   //     props: {},
//   //   };
//   //   // return (
//   //   //   <React.Fragment>
//   //   //     <h2>You are not logged in</h2>
//   //   //     <Link href="/">
//   //   //       <a>Go to Sign In</a>
//   //   //     </Link>
//   //   //   </React.Fragment>
//   //   // );
//   // }
//   // if (session) {
//   //   console.log("session found", session);
//   //   return {
//   //     props: {},
//   //   };
//   //   // return (
//   //   //   <React.Fragment>
//   //   //     <h2>You are not logged in</h2>
//   //   //     <Link href="/">
//   //   //       <a>Go to Sign In</a>
//   //   //     </Link>
//   //   //   </React.Fragment>
//   //   // );
//   // }
//   // return {
//   //   props: { data: session },
//   // };
//   // const clientConnect = await clientPromise;
//   // const usersCollection = clientConnect.db().collection("Users");
//   // const isUserExist = await usersCollection.findOne({
//   //   email: "cooldev@tech.net",
//   //   // email: "lovecode@dev.io",
//   // });
//   // if (isUserExist) {
//   //   console.log("We found user", isUserExist);
//   //   const data = JSON.parse(JSON.stringify(isUserExist));
//   //   // check if current user boards is empty
//   //   if (data.boards.length === 0) {
//   //     return {
//   //       props: {
//   //         userData: data,
//   //         currentBoard,
//   //         title: "Add New Board",
//   //         isBoardEmpty: true,
//   //       },
//   //     };
//   //   } else {
//   //     const [currentBoard] = data.boards.filter(function findCurrentIndex(
//   //       obj,
//   //       index
//   //     ) {
//   //       return obj.isSelected;
//   //     });
//   //     console.log(currentBoard);
//   //     const isBoardEmpty =
//   //       !currentBoard.columns.todo &&
//   //       !currentBoard.columns.doing &&
//   //       !currentBoard.columns.done;
//   //     if (isBoardEmpty) {
//   //       return {
//   //         props: {
//   //           userData: data,
//   //           currentBoard,
//   //           title: currentBoard.title,
//   //           isBoardEmpty: true,
//   //         },
//   //       };
//   //     }
//   //     if (!isBoardEmpty) {
//   //       return {
//   //         props: {
//   //           userData: data,
//   //           currentBoard,
//   //           title: currentBoard.title,
//   //           isBoardEmpty: false,
//   //           columns: {
//   //             todo: currentBoard.columns.todo,
//   //             doing: currentBoard.columns.doing,
//   //             done: currentBoard.columns.done,
//   //           },
//   //         },
//   //       };
//   //     }
//   //   }
//   // }
// }

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

function saveDataToLocalStorage(user, board) {
  !localStorage.getItem("currentUser")
    ? localStorage.setItem("currentUser", JSON.stringify(user))
    : null;

  // make currentBoard in localStorage. algorithm in getServerSideProps
  !localStorage.getItem("currentBoard")
    ? localStorage.setItem("currentBoard", JSON.stringify(board))
    : null;
}
