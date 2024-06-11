import "./App.css";
import Accordion from "./components/Accordion";
import AutoComplete from "./components/AutoComplete";
import ColorGenerator from "./components/ColorGenerator";
import TabTest from "./components/CustomTabs/tab-test";
import DarkMode from "./components/DarkMode";
import GithubFinder from "./components/GithubFinder";
import LoadMore from "./components/LoadMore";
import ModalTest from "./components/ModalPopUp/modal-test";
import QRCodeGenerator from "./components/QrCodeGenerator";
import Scroll from "./components/Scrollindicator";
import Slider from "./components/Slider";
import TicTacToe from "./components/TicTacToe";
import TreeView from "./components/TreeView";
import menus from "./components/TreeView/data";

function App() {
  return (
    <div className="App">
      <Accordion />
      <ColorGenerator />
      <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      <LoadMore />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <DarkMode />
      <Scroll url={"https://dummyjson.com/products?limit=10"} />
      <TabTest/>
      <ModalTest/>
      <GithubFinder/>
      <AutoComplete/>
      <TicTacToe/>
    </div>
  );
}

export default App;
