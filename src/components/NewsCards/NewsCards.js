import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import "@fontsource/bebas-neue";
import "@fontsource/poppins";

const infoCards = [
  {
    gradient:
      "linear-gradient(141.13deg, rgb(16, 100, 222) 26.29%, rgb(54, 165, 239) 100%)",
    title: "Latest News",
    text: "Give me some recent updates",
  },
  {
    gradient:
      "linear-gradient(141deg, rgb(0, 80, 205) 26.29%, rgb(4, 30, 90) 100%, rgb(0, 0, 60) 150%)",
    title: "News by Categories",
    info: "Business, Technology, General, Health, Sports, Science, Entertainment",
    text: "Give me the latest Tech news",
  },
  {
    gradient:
      "linear-gradient(141deg, rgb(0, 50, 155) 26.29%, rgb(5, 20, 70) 100%, rgb(0, 0, 20) 150%)",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5?",
  },
  {
    gradient:
      "linear-gradient(141.13deg, rgb(0, 10, 115) 26.29%, rgb(0, 10, 60) 70%, rgb(0, 0, 25) 100%)",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me some news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles || !articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className={classes.infoCard}
              key={i} // Add key prop with index or (i)
            >
              <div
                className={classes.card}
                style={{
                  background: infoCard.gradient, // Use gradient background
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography
                  variant="h4"
                  style={{ color: "white", fontFamily: "Bebas Neue" }}
                >
                  {infoCard.title}
                </Typography>
                {infoCard.info && (
                  <Typography
                    variant="h6"
                    style={{ color: "white", fontFamily: "Poppins" }}
                    className={classes.infoText}
                  >
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                )}
                <Typography
                  variant="h6"
                  style={{ color: "white", fontFamily: "Poppins" }}
                  className={classes.infoText2}
                >
                  <b>Try saying: </b> <br />
                  {infoCard.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            style={{ display: "flex" }}
            key={i}
          >
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
