import React from "react";
import { BoardTaskRenderContext } from "../../Components/Dashboard/Context/index";
import DashboardStyles from "../../styles/Dashboard.module.css";
import LogoTitleBar from "../../Components/Dashboard/LogoTitleBar";
import SidebarColumns from "../../Components/Dashboard/SidebarColumns";
import clientPromise from "../../config/mongoDB";

// set context here

export default function Dashboard({ children, userData }) {
  console.log(userData, "userData");

  const memoizedStateValueAndFunc = React.useMemo(() => {
    return {
      // setStateFuncs
      setStateFuncs: {},
      stateFuncsForModals: {},
    };
  }, []);

  React.useEffect(() => {
    // saveDateToLocalStorage();
  }, []);
  return (
    <section
      id="color-theme"
      data-apptheme="light"
      className={DashboardStyles[`dashboard`]}
    >
      <BoardTaskRenderContext.Provider value={memoizedStateValueAndFunc}>
        {/* logotitlebar */}
        <LogoTitleBar />
        {/* sidebarcolumns */}
        <SidebarColumns />
      </BoardTaskRenderContext.Provider>
    </section>
  );
}

export async function getServerSideProps(context) {
  const clientConnect = await clientPromise;

  const usersCollection = clientConnect.db().collection("Users");
  const isUserExist = await usersCollection.findOne({
    email: "cooldev@tech.net",
  });
  if (isUserExist) {
    console.log("We found user", isUserExist);
    const data = JSON.parse(JSON.stringify(isUserExist));
    console.log(data, "data");
    return {
      props: { userData: data },
    };
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

function saveDateToLocalStorage() {
  const data = {
    currentSelectedIndex: 0,
    boards: [
      {
        title: "Software Development",
        user: "coolperson@gmail.com",
        columns: {
          todo: null,
          doing: null,
          done: null,
        },
        index: 0,
        selected: true,
      },
      {
        title: "Platform Launch",
        user: "coolperson@gmail.com",
        columns: {
          todo: [
            {
              title: "Build UI for onboarding flow",
              description: "",
              status: "todo",
              isSelected: false,
              index: 0,
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build UI for search",
              description: "",
              status: "todo",
              isSelected: false,
              index: 1,
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build settings UI",
              description: "",
              status: "todo",
              isSelected: false,
              index: 2,
              subtasks: [
                {
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "todo",
              isSelected: false,
              index: 3,
              subtasks: [
                {
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
          doing: [
            {
              title: "Design settings and search pages",
              description: "",
              status: "doing",
              isSelected: false,
              index: 0,
              subtasks: [
                {
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add account management endpoints",
              description: "",
              status: "doing",
              isSelected: false,
              index: 1,
              subtasks: [
                {
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Design onboarding flow",
              description: "",
              status: "doing",
              isSelected: false,
              index: 2,
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add search enpoints",
              description: "",
              status: "doing",
              isSelected: false,
              index: 3,
              subtasks: [
                {
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add authentication endpoints",
              description: "",
              status: "doing",
              isSelected: false,
              index: 4,
              subtasks: [
                {
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "doing",
              isSelected: false,
              index: 5,
              subtasks: [
                {
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
          done: [
            {
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "done",
              isSelected: false,
              index: 0,
              subtasks: [
                {
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "done",
              isSelected: false,
              index: 1,
              subtasks: [
                {
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "done",
              isSelected: false,
              index: 2,
              subtasks: [
                {
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              description: "",
              status: "done",
              isSelected: false,
              index: 3,
              subtasks: [
                {
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Market discovery",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "done",
              isSelecte: false,
              index: 4,
              subtasks: [
                {
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Competitor analysis",
              description: "",
              status: "done",
              isSelected: false,
              index: 5,
              subtasks: [
                {
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Research the market",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "done",
              isSelected: false,
              index: 6,
              subtasks: [
                {
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
        index: 1,
        selected: false,
      },
      {
        title: "Marketing Plan",
        user: "coolperson@gmail.com",
        columns: {
          todo: [],
          doing: [],
          done: [],
        },
        index: 2,
        selected: false,
      },
      // {
      //   title: "Roadmap",
      //   user: "coolperson@gmail.com",
      //   columns: {
      //     todo: [],
      //     doing: [],
      //     done: [],
      //   },
      //   index: 2,
      //   selected: false,
      // },
    ],
  };

  !localStorage.getItem("currentUser")
    ? localStorage.setItem("currentUser", JSON.stringify(data))
    : null;

  // make currentBoard in localStorage
  const selectedBoard = data.boards.filter(function findSelected(obj, index) {
    return obj.selected;
  });

  !localStorage.getItem("currentBoard")
    ? localStorage.setItem("currentBoard", JSON.stringify(selectedBoard))
    : null;
}
