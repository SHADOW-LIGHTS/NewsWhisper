import React from "react";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";

const Home = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 40) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
          window.open(articles[number].url, "_blank");
        }
      },
    });
  }, []);

  return (
    <div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default Home;
