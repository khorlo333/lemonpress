export const NewsItems = [
  {
    imageUrl:
      "https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a",
    newsType: "Бизнес",
    newsTitle: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    newsAuthor: "С.Ангирмаа 12 сарын 18, 2024",
  },
  // {
  //   imageUrl: ,
  //   newsType: ,
  //   newsTitle: ,
  //   newsAuthor

  // },
  // {
  //   imageUrl: ,
  //   newsType: ,
  //   newsTitle: ,
  //   newsAuthor

  // },
  // {
  //   imageUrl: ,
  //   newsType: ,
  //   newsTitle: ,
  //   newsAuthor

  // }
];

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
