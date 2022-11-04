import { useEffect, useState } from "react";

////////////////////////////
const AppTestt = () => {
  let Parser = require("rss-parser");
  let parser = new Parser();

  function fetchFeed() {
    (async () => {
      let feed = await parser.parseURL(
        "https://cors-anywhere.herokuapp.com/" +
          "https://www.farsnews.ir/rss/social/mostvisitednews"
      );
      feed.items.forEach((item) => {
        console.log(item.title + ":" + item.link);
      });
    })();
  }

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div>
      <h1>RSasdsdS Feed</h1>
    </div>
  );
};

export default AppTestt;
