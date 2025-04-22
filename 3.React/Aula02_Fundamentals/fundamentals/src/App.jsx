import "./App.css";
import Challenge from "./components/Challenge";
import Events from "./components/Events";
import FirstComponent from "./Components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <>
      <h1>Fundamentals</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  );
}

export default App;
