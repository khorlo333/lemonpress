import Card from "./Card";
import { RightPanell } from "./arrays";
import { NewsItems } from "./arrays";

export function RightPanel() {
  return (
    <div className="rightPanel">
      {RightPanell.map((news) => {
        return (
          <Card
            image={news.imageUrl}
            type={news.newsType}
            title={news.newsTitle}
            author={news.newsAuthor}
          />
        );
      })}
    </div>
  );
}

export function SidePanel(props) {
  return (
    <div className="sidePanel">
      <img src={NewsItems[0]} alt="" />
      {NewsItems.map((news) => {
        return (
          <div>
            <div>
              <Card
                type={news.newsType}
                title={news.newsTitle}
                author={news.newsAuthor}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
