import { Button, Typography, useTheme } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { resumeBtnColor } from "../../styles/themeStyles";

export interface NavbarT {
  bgColor?: string;
}

const Navbar = (props) => {
  const theme = useTheme();
  const {
    navbarColor,
    heightOfTabs,
    extraTopSpace,
    tabSectionTitles,
    getNavTabPositioningHelper,
  } = props;

  return (
    <div
      style={{
        zIndex: 19,
        position: "fixed",
        height: heightOfTabs + extraTopSpace,
        width: "100%",
        // backgroundColor: navbarColor,
        background: navbarColor,
        // background: 'linear-gradient(175deg, rgba(30,55,75,1) 0%, rgba(39,77,108,1) 12%)',
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {tabSectionTitles.map((item, index) => (
        <AnchorLink
          key={index}
          style={{
            position: "absolute",
            width: 130,
            left: getNavTabPositioningHelper({ index }),
            height: "1.5em",
            marginBottom: ".4em",
            display: "flex",
            fontSize: "1em",
            justifyContent: "center",
          }}
          href={`#${item.tabTitle}`}
        >
          <Typography
            color="textSecondary"
            variant="body1"
            style={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: ".35em",
              width: "97%",
              textAlign: "center",
            }}
          >
            {item.tabTitle}
          </Typography>
        </AnchorLink>
      ))}
      <Button
        style={{
          textTransform: "none",
          position: "absolute",
          width: 130,
          right: 50,
          height: "1.5em",
          marginBottom: ".4em",
          display: "flex",
          fontSize: "1em",
          justifyContent: "center",
          backgroundColor: resumeBtnColor,
        }}
      >
        Resume
      </Button>
    </div>
  );
};

Navbar.propTypes = {
  navbarColor: PropTypes.string,
  heightOfTabs: PropTypes.number,
  extraTopSpace: PropTypes.number.isRequired,
  tabSectionTitles: PropTypes.array.isRequired,
  getNavTabPositioningHelper: PropTypes.func,
};
Navbar.defaultProps = {
  navbarColor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.number,
};

export default Navbar;
