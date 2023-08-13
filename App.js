const parent = React.createElement(
  "div",
  { id: "parent" },
    // If you need to display multiple children in a single container you can use the following way:
    // Add all the childrens in an array
  [
    React.createElement(
    "div",
    { id: "child" },
    // If you need to display multiple children in a single container you can use the following way:
    // Add all the childrens in an array
    [
      React.createElement("h1", {}, "This is the h1 heading as a child"),
      React.createElement("h2", {}, "This is the h2 heading as a child")
    ]
    ),
    React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", {}, "This is the h1 heading as a child"),
      React.createElement("h2", {}, "This is the h2 heading as a child")
    ]
  )
  ]
);

console.log(parent);
const heading = React.createElement("h1", { class: "heading" }, "Hello world from React");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);
