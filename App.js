const heading = React.createElement("div",{id:"heading"},React.createElement("h1",{id:"heading"},"Hello World from React javascript"));
//Functional Components
const heading = <h1>Heading from Functional Component</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);