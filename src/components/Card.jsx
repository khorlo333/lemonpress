import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.type}</h3>
      <p>{props.title}</p>
      <h4>{props.author}</h4>
    </div>
  );
}

export default Card;
