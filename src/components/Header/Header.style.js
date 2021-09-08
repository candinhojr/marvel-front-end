import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: red[500],
    padding: "16px 128px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "opacity 0.5s",
    "&:hover": {
      opacity: "0.5",
    },
  },
  logoIcon: {
    height: "32px",
  },
  logoText: {
    marginLeft: "8px",
    color: "#FFF",
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

export default useStyles;
