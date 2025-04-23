import "./App.css";
import AssetsImports from "./components/AssetsImports";
import ConditionalFormRendering from "./components/ConditionalFormRendering";
import ConditionalRendering from "./components/ConditionalRendering";
import DataManagement from "./components/DataManagement";
import ListRender from "./components/ListRender";

function App() {
  return (
    <>
      <h1>Advanced React</h1>
      <AssetsImports />
      <DataManagement />
      <ListRender />
      <ConditionalRendering />
      <ConditionalFormRendering />
    </>
  );
}

export default App;
