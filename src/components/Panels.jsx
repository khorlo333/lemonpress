import { NewsItems } from "./Card";
import Card from "./Card";
import { RightPanell } from "./Card";

export function RightPanel() {
  //   <div className="rightpanel">
  return;
  //   RightPanell.map(() => {});

  //   </div>;
}
console.log(RightPanel);

export function SidePanel(props) {
  return (
    <div className="container">
      <div className="sidePanel">
        <div>
          <img src={props.image} alt="" />
          <h3>{props.type}</h3>
          <p>{props.title}</p>
          <h4>{props.author}</h4>
        </div>
        <div c>
          <h3>{props.type}</h3>
          <p>{props.title}</p>
          <h4>{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
