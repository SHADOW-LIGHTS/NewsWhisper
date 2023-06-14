import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
    "@media (max-width: 600px)": {
      padding: "0 15% ", // Increase the padding on xs breakpoint
    },
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "60vh", // Adjust the height to make the cards larger
    padding: "5%", // Adjust the padding to increase the content size
    borderRadius: 10,
    color: "white",
    fontSize: "1.6rem", // Adjust the font size for the text inside the cards
    overflow: "hidden",
    textOverflow: "ellipsis",
    zIndex: 1,
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },

  infoText: {
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
  },

  infoText2: {
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
});
