import "./App.css";
import Search from "./components/Search";
import data from "./assets/data.json";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const firstEmoji = [];

  {
    data.filter((emoji) => {
      if (emoji.keywords.includes(search) && firstEmoji.length < 20) {
        firstEmoji.push(emoji);
      }
    });
  }

  return (
    <div className="main-div">
      <Search setSearch={setSearch} search={search} />
      {firstEmoji.map((emoji, index) => {
        return <Line emoji={emoji} index={index} key={index} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
