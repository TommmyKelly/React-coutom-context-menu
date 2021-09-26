import "./App.css";
import useRightClickMenu from "./hooks/useRightClickMenu";
import Menu from "./components/Menu";

function App() {
  const { x, y, showMenu } = useRightClickMenu();
  return (
    <>
      <Menu x={x} y={y} showMenu={showMenu} />
    </>
  );
}

export default App;
