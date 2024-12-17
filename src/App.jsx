import Header from "./components/Header";
import Card from "./components/Card";
import "./app.css";

const App = () => {
  return (
    <div>
      <h2>
        <Header />
      </h2>
      <div id="cards"></div>
    </div>
  );
};

export default App;
