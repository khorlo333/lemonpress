import Header from "./components/Header";
import Card from "./components/Card";
import "./app.css";
import { Banner } from "./components/Banner";
import { NewsItems } from "./components/Card";
import { Short } from "./components/Short";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Short />
      <Short />
      <Short />
      <Banner />

      <div id="cards">
        <div>
          {NewsItems.map((news) => {
            return (
              <Card
                image={news.imageUrl}
                type={news.newsType}
                title={news.newsTitle}
                author={news.newsAuthor}
              />
            );
          })}
          <div></div>
        </div>
        <Short />
      </div>
    </div>
  );
};

export default App;
