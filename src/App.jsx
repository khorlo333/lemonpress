import Header from "./components/Header";
import Card from "./components/Card";
import "./app.css";
import { Banner } from "./components/Banner";
// import { NewsItems } from "./components/Card";
import { Short } from "./components/Short";
import { SidePanel } from "./components/Panels";
import { RightPanel } from "./components/Panels";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Short />
      <div id="panels">
        <RightPanel />
        <SidePanel />
      </div>
    </div>
  );
};

export default App;
