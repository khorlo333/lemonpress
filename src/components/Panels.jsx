import Card from "./Card";
import { RightPanell } from "./arrays";
import { NewsItems } from "./arrays";

export function RightPanel() {
  return (
    <div className="rightPanel">
      {RightPanell.map((news) => {
        return <Card />;
      })}
    </div>
  );
}

export function SidePanel(props) {
  return (
    <div className="container">
      <div className="sidePanel">
        <div>
          <img src={props.image} alt="" />
          <div>
            {NewsItems.map((news) => {
              return (
                <div>
                  <h3>{news.type}</h3>
                  <p>{news.title}</p>
                  <h4>{news.author}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3>{props.type}</h3>
          <p>{props.title}</p>
          <h4>{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
