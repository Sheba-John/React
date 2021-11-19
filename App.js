import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import MyForthComponent from "./MyForthComponent";
import MySecondComponent from "./MySecondComponent";
import MyThirdComponent from "./MyThirdComponent";
function App() {
  const name = "Sheba";
  const name1 = "Vannu";
  // const name2="";

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Hello {name && name.length ? name : "World"}</h1>
      {/* <h1>Hello {name2 && name2.length ? name2 : "World"}</h1> */}
      <div>
        <MyFirstComponent   parentComponentName={"App"}/>
      </div>
      <div>
        <MySecondComponent   parentComponentName={"App"}/>
      </div>
      <div>
        <MyThirdComponent name={name} age={23} parentComponentName={"App"}>
              <h2>Child of the Third Component </h2>
              {/* children - anything inside the opening closing betn tags are children  */}

        </MyThirdComponent>
      </div>
      <div>
        <MyForthComponent name={name1} age={21}   parentComponentName={"App"} />
      </div>
    </div>
  );
}

export default App;