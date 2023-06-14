import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/lato";

export default makeStyles({
  media: {
    height: 250,
  },

  border: {
    border: "solid",
  },

  fullHeightCard: {
    height: "100%",
    width: "100%",
  },

  card: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid #D2D6DC", //#0044B3
  },

  activeCard: {
    borderBottom: "10px solid #22289a",
  },

  grid: {
    display: "flex",
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 15px 10px 15px",
    fontFamily: "Lato",
  },

  title: {
    padding: "0 15px",
    fontFamily: "Lato",
    lineHeight: "1.2",
  },

  cardActions: {
    padding: "0 15px 8px 15px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Lato",
  },

  heading: {
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },

  description: {
    lineHeight: "4",
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 7,
    "-webkit-box-orient": "vertical",
  },
});
