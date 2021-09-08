import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Header.style";

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img
          loading="lazy"
          className={classes.logoIcon}
          alt="Marvel"
          src="https://vignette.wikia.nocookie.net/siivagunner/images/a/a7/Marvel_Logo.png/revision/latest?cb=20170510074130"
        />
        <span className={classes.logoText}>Marvel Comics</span>
      </Link>
    </header>
  );
};

export default Header;
