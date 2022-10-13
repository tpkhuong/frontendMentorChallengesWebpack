import React from "react";
import ContainerStyles from "./Container.module.css";
import TopItems from "./TopItems";
import BottomItems from "./BottomItems";

export const RenderItemsContext = React.createContext({});

export default function TestContainer({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      upArrowArray: null,
      downArrowArray: null,
    };
  });
  const [initialValuesObj, setInitialValues] = React.useState(
    memoizedInitialValues
  );
  //   const memoizedStateFuncs = React.useMemo(() => {
  //     return {
  //       topItemFunc: null,
  //       bottomItemFunc: null,
  //     };
  //   });
  /**
   * use scrollheight on scroll-conttainer element
   * which will give us 2896
   * **/
  const objOfMethods = {
    ArrowDown: (event, element, setFunc) => {
      event.preventDefault();

      // next element tabIndex 0
      // prev element tabIndex -1

      if (!element.nextElementSibling) {
        // first child tabindex 0
        element.parentElement.firstElementChild.setAttribute("tabindex", "0");
        element.parentElement.firstElementChild.focus();
        // last child tabindex -1
        element.parentElement.lastElementChild.setAttribute("tabindex", "-1");
        // want to focus second to first child of scroll container
        element.parentElement.scrollBy(0, 100);
        return;
      }
      if (!element.nextElementSibling.nextElementSibling) {
        console.log("bottom, its empty");
        workingAtEnd(element, setFunc);
        return;
      }
      element.nextElementSibling.setAttribute("tabindex", "0");
      element.nextElementSibling.focus();
      // keep reference of current focused element so we can target
      // its prev sibling to assign "-1" to prev sibling tabindex
      const currentElement = document.activeElement;
      // call scrollBy of current focused element/vertically center element
      currentElement.parentElement.scrollBy(0, 50);
      // currentElement.parentElement.scrollTo(0, currElementTop);
      // currentElement.getBoundingClientRect();
      // sibling element of parent element(scroll container)
      // top: 275, bottom: 625
      // console.log(
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      // );
      // const top =
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      //     .top;
      // currentElement.scrollTo(0, top);
      currentElement.previousElementSibling.setAttribute("tabindex", "-1");
      // console.log(element.parentElement.firstElementChild);
    },
    ArrowUp: (event, element, setFunc) => {
      event.preventDefault();
      if (!element.previousElementSibling) {
        // prev element tabIndex 0
        // next element tabIndex -1
        // console.log(element.parentElement.lastElementChild);
        // last child tabindex 0
        element.parentElement.lastElementChild.setAttribute("tabindex", "0");
        element.parentElement.lastElementChild.focus();
        // first child tabindex -1
        element.parentElement.firstElementChild.setAttribute("tabindex", "-1");
        // want to focus second to last child of scroll container
        element.parentElement.scrollBy(0, -100);
        return;
      }
      // make sure element.previousElementSibling is not null to run algorithm
      // !element.previousElementSibling.previousElementSibling
      if (!element.previousElementSibling.previousElementSibling) {
        console.log("top, its empty");
        workingAtBeginning(element, setFunc);

        return;
      }
      console.log("this should not be here");
      element.previousElementSibling.setAttribute("tabindex", "0");
      element.previousElementSibling.focus();
      // keep reference of current focused element so we can target
      // its next sibling to assign "-1" to next sibling tabindex
      const currentElement = document.activeElement;
      // call scrollBy of current focused element/vertically center element
      currentElement.parentElement.scrollBy(0, -50);
      // currentElement.parentElement.scrollTo(0, currElementTop);
      // sibling element of parent element(scroll container)
      // top: 275, bottom: 625
      // console.log(
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      // );
      /**
       * using scrollTo on parent element with overflow-y: auto
       * and scroll-snap-type works. scrollTo(0,275)
       * **/
      // document.elementFromPoint(600,249.60000610351562) focusing element working with
      // scroll and arrow keys. 600,249.60000610351562 is the (x,y) of scroll container element
      // const top =
      //   currentElement.parentElement.previousElementSibling.getBoundingClientRect()
      //     .top;
      // currentElement.scrollTo(0, top);
      currentElement.nextElementSibling.setAttribute("tabindex", "-1");
    },
  };
  React.useEffect(() => {
    const snapChildren = document.querySelectorAll(
      "#scroll-container div[tabindex]"
    );
    const observerRootElement = document.getElementById("scroll-container");
    // scroll second element/child of scroll-container to 275 of scroll-container(its parent);
    // when user visit our site or on reload, tabindex "0" will be on second element
    // left content element and right element(of scroll container) will be centered vertically
    !initialValuesObj.upArrowArray && !initialValuesObj.downArrowArray
      ? observerRootElement.scrollTo(0, 275)
      : null;
    // run algorithm above on initial and reload
    testIntersectionObserver(observerRootElement, [...snapChildren]);

    !initialValuesObj.upArrowArray && !initialValuesObj.downArrowArray
      ? null
      : initialValuesObj.upArrowArray
      ? snapChildren[1].focus()
      : snapChildren[snapChildren.length - 2].focus();
  }, [initialValuesObj]);
  return (
    <React.Fragment>
      {/* <RenderItemsContext.Provider
        value={memoizedStateFuncs}
      ></RenderItemsContext.Provider> */}

      <div
        tabIndex="-1"
        id="scroll-container"
        onKeyDown={(event) => {
          if (typeof event.target.getAttribute("tabindex") === "string") {
            const currentElement = document.activeElement;
            console.log(event);
            objOfMethods[event.code](event, currentElement, setInitialValues);
          }
          //   event.target.getBoundingClientRect();
        }}
        className={ContainerStyles[`container`]}
      >
        {/* <div
            data-pos-index="1"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>1</span>
          </div> */}
        {/* <TopItems />
          <div
            data-pos-index="2"
            tabIndex="0"
            className={ContainerStyles[`snap-item`]}
          >
            <span>2</span>
          </div>
          <div
            data-pos-index="3"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>3</span>
          </div>
          <div
            data-pos-index="4"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>4</span>
          </div>
          <div
            data-pos-index="5"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>5</span>
          </div>
          <div
            data-pos-index="6"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>6</span>
          </div>
          <div
            data-pos-index="7"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>7</span>
          </div>
          <div
            data-pos-index="8"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>8</span>
          </div>
          <BottomItems /> */}
        {/* <div
            data-pos-index="9"
            tabIndex="-1"
            className={ContainerStyles[`snap-item`]}
          >
            <span>9</span>
          </div> */}

        {!initialValuesObj.upArrowArray && !initialValuesObj.downArrowArray ? (
          <React.Fragment>
            <div
              data-pos-index="1"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>1</span>
            </div>
            <div
              data-pos-index="2"
              tabIndex="0"
              className={ContainerStyles[`snap-item`]}
            >
              <span>2</span>
            </div>
            <div
              data-pos-index="3"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>3</span>
            </div>
            <div
              data-pos-index="4"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>4</span>
            </div>
            <div
              data-pos-index="5"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>5</span>
            </div>
            <div
              data-pos-index="6"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>6</span>
            </div>
            <div
              data-pos-index="7"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>7</span>
            </div>
            <div
              data-pos-index="8"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>8</span>
            </div>
            <div
              data-pos-index="9"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>9</span>
            </div>
          </React.Fragment>
        ) : initialValuesObj.upArrowArray ? (
          initialValuesObj.upArrowArray.map(function renderItems(
            element,
            index
          ) {
            const { classText, posIndex, spanText, tabindex } = element;
            return (
              <div
                className={`${ContainerStyles[`${classText}`]}`}
                tabIndex={tabindex}
                data-pos-index={posIndex}
                key={Math.random() * index}
              >
                <span>{spanText}</span>
              </div>
            );
          })
        ) : (
          initialValuesObj.downArrowArray.map(function renderItems(
            element,
            index
          ) {
            const { classText, posIndex, spanText, tabindex } = element;
            return (
              <div
                className={`${ContainerStyles[`${classText}`]}`}
                tabIndex={tabindex}
                data-pos-index={posIndex}
                key={Math.random() * index}
              >
                <span>{spanText}</span>
              </div>
            );
          })
        )}
        {/* <div
          data-pos-index="1"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>1</span>
        </div>
        <div
          data-pos-index="2"
          tabIndex="0"
          className={ContainerStyles[`snap-item`]}
        >
          <span>2</span>
        </div>
        <div
          data-pos-index="3"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>3</span>
        </div>
        <div
          data-pos-index="4"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>4</span>
        </div>
        <div
          data-pos-index="5"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>5</span>
        </div>
        <div
          data-pos-index="6"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>6</span>
        </div>
        <div
          data-pos-index="7"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>7</span>
        </div>
        <div
          data-pos-index="8"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>8</span>
        </div>
        <div
          data-pos-index="9"
          tabIndex="-1"
          className={ContainerStyles[`snap-item`]}
        >
          <span>9</span>
        </div> */}
      </div>
    </React.Fragment>
  );
}

function testIntersectionObserver(rootElement, elements) {
  /**
   * using intersection observer and scrollTo(on scroll container[parent element of snap items])
   * on key down(up,right,down,left) arrow key.
   * we could assign "0" to tabindex to element that has isIntersecting true then assign
   * "-1" to tabindex to previousElementSibling and nextElementSibling of isIntersecting true
   * element which will work for both mouse wheel scroll and keydown events
   * **/
  // options
  const options = {
    root: rootElement,
    threshold: 1,
    rootMargin: "-218px 0px -218px 0px",
  };
  // callback
  function changeTabindexOnMouseScroll(entries, observer) {
    entries.forEach(function observeEachSnapItem(entry, index) {
      if (!entry.isIntersecting) {
        return;
      }
      // when isIntersecting is true the element we want to assign string value "0"
      // to attr tabindex will be the target element of entry
      // first load or reload element that has isIntersecting true will have "0" string value
      // assigned to tabindex
      const targetTabindex = entry.target.getAttribute("tabindex");
      if (targetTabindex === "0") {
        return;
      }
      // entry.target
      const beforeElement = entry.target.previousElementSibling;
      const afterElement = entry.target.nextElementSibling;
      console.log(entry.target);
      console.log(entry.target.offsetTop);
      // with our algorithm, there will always be an element before and after
      // the element with tabindex = "0"
      // get previous and next sibling element of target assign tabindex "-1" to those elements
      entry.target.getAttribute("tabindex") == "-1"
        ? entry.target.setAttribute("tabindex", "0")
        : null;
      // if before or after element tabindex === "0" then we assign "-1" to element tabindex attr
      beforeElement.getAttribute("tabindex") === "0"
        ? beforeElement.setAttribute("tabindex", "-1")
        : null;
      afterElement.getAttribute("tabindex") === "0"
        ? afterElement.setAttribute("tabindex", "-1")
        : null;
      // focus element in intersection observer trigger area which
      // is based on rootMargin
      entry.target.focus();
      console.log(entry.target.getBoundingClientRect());
    });
  }

  const observer = new IntersectionObserver(
    changeTabindexOnMouseScroll,
    options
  );

  // loop through elements in array(elements parameter)
  elements.forEach(function addObserverToEachItem(element) {
    observer.observe(element);
  });

  // attempt one
  // function closureOverPrevOffset() {
  //   // cached offsetTop
  //   const cachedObj = {
  //     prevOffset: 416,
  //     prevElement: null,
  //   };
  //   return function innerFunc(entries, observer) {
  //     console.log("before", cachedObj);
  //     entries.forEach(function observeEachSnapItem(entry) {
  //       if (!entry.isIntersecting) {
  //         return;
  //       }
  //       // when isIntersecting is true the element we want to assign string value "0"
  //       // to attr tabindex will be the target element of entry
  //       // entry.target
  //       console.log(entry.target.offsetTop);
  //       const targetOffset = entry.target.offsetTop;
  //       // first load or reload element that has isIntersecting true will have "0" string value
  //       // assigned to tabindex
  //       const targetTabindex = entry.target.getAttribute("tabindex");
  //       if (targetTabindex === "0") {
  //         return;
  //       }
  //       cachedObj.prevElement = entry.target;
  //       entry.target.setAttribute("tabindex", "0");
  //       entry.target.focus();
  //       // if targetOffset is greater than cachedObj prevOffset
  //       // get prevelementsiblin and assign "-1" to tabindex
  //       if (targetOffset > cachedObj.prevOffset) {
  //         entry.target.previousElementSibling.setAttribute("tabindex", "-1");
  //       }
  //       // if targetOffset is less than cachedObj prevOffset
  //       // get nextelementsiblin and assign "-1" to tabindex
  //       if (targetOffset < cachedObj.prevOffset) {
  //         entry.target.nextElementSibling.setAttribute("tabindex", "-1");
  //       }

  //       // get previous and next sibling element of target
  //     });
  //     console.log("after", cachedObj);
  //   };
  // }

  // const changeTabindexOnMouseScroll = closureOverPrevOffset();
}

/** 
 * <div
              data-pos-index="1"
              tabIndex="-1"
              className={ContainerStyles[`snap-item`]}
            >
              <span>1</span>
            </div>
 * **/

function workingAtBeginning(item, callFuncToRender) {
  console.log(callFuncToRender);
  // get pos index of item
  const posIndex = item.getAttribute("data-pos-index");
  const parent = item.parentElement;
  // if pos index is 2 copy last child of scroll container
  const scrollContainerChildren = [...parent.children];
  if (posIndex === "2") {
    const secondElement = scrollContainerChildren[1];
    secondElement.setAttribute("tabindex", "-1");
    const lastItem = scrollContainerChildren.pop();
    // const newArray = [lastItem, ...scrollContainerChildren];
    // const fragment = new DocumentFragment();
    // newArray.forEach(function makeElement(element) {
    //   fragment.appendChild(element);
    // });
    // parent.replaceChildren();
    // parent.appendChild(fragment);
    const newArray = [lastItem, ...scrollContainerChildren].map(
      function makeObj(item, index) {
        const objOfValues = {
          classText: "snap-item",
          posIndex: item.getAttribute("data-pos-index"),
          spanText: item.firstElementChild.innerText,
          tabindex: index == 1 ? "0" : "-1",
        };
        return objOfValues;
      }
    );
    // console.log(newArray);
    callFuncToRender((values) => {
      return {
        ...values,
        upArrowArray: newArray,
        downArrowArray: null,
      };
    });
    // algorithm above will render new list of snap items
    // [...parent.children][1].focus();
    // secondItemOfNewArray.setAttribute("tabindex", "0");
    // secondItemOfNewArray.focus();
  }
  if (posIndex === "1") {
    const secondElement = scrollContainerChildren[1];
    secondElement.setAttribute("tabindex", "-1");
    const [first, second, ...restOfItems] = scrollContainerChildren;
    const reorderArray = [...restOfItems, first, second].map(
      function arrayOfObjs(element, index) {
        const obj = {
          classText: "snap-item",
          posIndex: element.getAttribute("data-pos-index"),
          spanText: element.firstElementChild.innerText,
          tabindex: index == 7 ? "0" : "-1",
        };
        return obj;
      }
    );
    callFuncToRender((prev) => {
      return {
        ...prev,
        upArrowArray: null,
        downArrowArray: reorderArray,
      };
    });
  }
  // move it to top of scroll container children
  // focus previous sibling
}

function workingAtEnd(item, callFuncToRender) {
  console.log(callFuncToRender);
  const posIndex = item.getAttribute("data-pos-index");
  const containerChildren = [...item.parentElement.children];
  if (posIndex === "8") {
    const secondToLastElement = containerChildren[containerChildren.length - 2];
    secondToLastElement.setAttribute("tabindex", "-1");
    const [firstItem, ...restOfArray] = containerChildren;

    // const newArray = [...restOfArray, firstItem];
    // item.parentElement.replaceChildren();
    // item.parentElement.appendChild(newArray);
    const newArray = [...restOfArray, firstItem].map(function arrayOfObjs(
      element,
      index
    ) {
      const obj = {
        classText: "snap-item",
        posIndex: element.getAttribute("data-pos-index"),
        spanText: element.firstElementChild.innerText,
        tabindex: index == 7 ? "0" : "-1",
      };
      return obj;
    });
    console.log(newArray);
    callFuncToRender((values) => {
      return {
        ...values,
        upArrowArray: null,
        downArrowArray: newArray,
      };
    });

    // const secondToLastItemOfNewArray = [...item.parentElement.children][
    //   item.parentElement.children.length - 2
    // ];
    // secondToLastItemOfNewArray.setAttribute("tabindex", "0");
    // secondToLastItemOfNewArray.focus();
  }

  if (posIndex === "9") {
    //   containerChildren
  }
}
