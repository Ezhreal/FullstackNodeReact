import Bird from "./assets/images/bird.jpg";
import "./App.css";
import AssetsImports from "./assets/components/AssetsImports";
import DataManagement from "./assets/components/DataManagement";
import ListRender from "./assets/components/ListRender";

function App() {
  return (
    <>
      <h1>Advanced React</h1>
      <AssetsImports />
      <DataManagement />
      <ListRender />
    </>
  );
}

export default App;
