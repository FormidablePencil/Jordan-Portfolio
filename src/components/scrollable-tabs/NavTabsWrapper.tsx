import darken from "@bit/styled-components.polished.color.darken";
import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { barColor } from "../../styles/themeStyles";
import { scrollableTabsChildrenT } from ".";
import PropTypes from "prop-types";

interface navTabsWrapperT extends scrollableTabsChildrenT {
  index: number;
  anchor;
  stickyBackgroundBgColor;
  tabColor;
  extraTopSpace: number;
  overrideTabsStyle;
  uniqueTabTitle?: string;
  arrUniqueTabTitles: {};
  saveTitlesToSourceOfTrue: Function;
  bgImg;
}

const NavTabsWrapper = (props) => {
  const {
    extraTopSpace,
    heightOfTabs,
    // tabColor,
    anchor,
    stickyBackgroundBgColor,
    tabLeftOffset,
    // whereChild,
    overrideTabsStyle,
    uniqueTabTitle,
    index,
    saveTitlesToSourceOfTrue,
    bgImg,
  }: navTabsWrapperT = props;

  const [temporarilyHolding] = useState({
    index: index,
    title: uniqueTabTitle,
  });

  useEffect(() => {
    saveTitlesToSourceOfTrue(
      temporarilyHolding.index,
      temporarilyHolding.title
    );
    // eslint-disable-next-line
  }, [temporarilyHolding]);

  const widthOfContent = "100%";
  // const marginTopContent = whereChild === 'first' ? `calc(-100vh + ${heightOfTabs * 2 + extraTopSpace}px` : `calc(-100vh + ${heightOfTabs}px)`
  // const marginTopContent = `calc(-100vh + ${heightOfTabs}px)`
  const heightOfStickyAbsoluteBackground = `calc(100vh - ${heightOfTabs}px)`;

  return (
    <>
      <div
        id={anchor}
        style={{
          zIndex: 10,
          position: "absolute",
          width: widthOfContent,
        }}
      ></div>
      <div
        style={{
          position: "sticky",
          top: heightOfTabs + extraTopSpace,
          zIndex: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: darken(index * 0.02, barColor),
            // backgroundColor: barColor,
            height: ".5em",
            width: "100%",
            zIndex: 100,
          }}
        />
        <AnchorLink
          className="snap-scroll-item"
          style={{
            //Tab
            zIndex: 30,
            left: tabLeftOffset,
            height: heightOfTabs,
            width: 130,
            backgroundColor: darken(index * 0.02, barColor),
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            top: -heightOfTabs,
            position: "absolute",
            borderRadius: "15px 15px 0px 0px",
            ...overrideTabsStyle,
          }}
          href={`#${anchor}`}
        >
          <Typography variant="body1" color="textSecondary">
            {anchor}
          </Typography>
        </AnchorLink>
      </div>
      <div
        style={{
          //sticky background
          zIndex: 3,
          width: widthOfContent,
          marginBottom: 35,
          height: heightOfStickyAbsoluteBackground,
          position: "sticky",
          top: heightOfTabs + extraTopSpace,
          background: stickyBackgroundBgColor,
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
          }}
        >
          {props.children}
        </div>
        {bgImg && (
          <img
            style={{
              width: "100%",
              height: "100vh",
              zIndex: -1,
              objectFit: "cover",
            }}
            src={bgImg.src}
            alt=""
          />
        )}
      </div>
    </>
  );
};

NavTabsWrapper.propTypes = {
  bgImg: PropTypes.object,
  children: PropTypes.any.isRequired,
  tabColor: PropTypes.string,
  anchor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.number,
  // uniqueTabTitle: PropTypes.number.isRequired,
  uniqueTabTitle: PropTypes.string,
};
NavTabsWrapper.defaultProps = {
  stickyBackgroundBgColor: barColor,
  tabColor: barColor,
  // stickyBackgroundBgColor: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)',
  // tabColor: 'rgba(53,9,121,1)'
};

export default NavTabsWrapper;
