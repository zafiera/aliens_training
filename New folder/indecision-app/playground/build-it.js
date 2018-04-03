let visibility = false;

const toggle = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visibility ? 'Show Details' : "Hide Details"}</button>
      <h3>
        {visibility ? 'More details' : false}
      </h3>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
