import PropTypes from "prop-types";
import React, { Children, cloneElement, useState } from "react";
import { tabSectionTitles } from "../LargerDisplay";
import Navbar from "./Navbar";
import {
  defaultTabsSpaceApart,
  defaultExtraTopSpace,
  defaultTabStartingValue,
  defaultHeightOfTabs,
} from "./types-and-static-data";

//~ When I first wrote this only god and I knew what it meant
//~ Now only god knows

export interface scrollableTabsChildrenT {
  heightOfTabs;
  tabLeftOffset;
  whereChild?: string;
  extraTopSpace: number;
  index;
  overrideTabsStyle: {};
  saveTitlesToSourceOfTrue: Function;
}

interface getNavTabPositioningHelperT {
  index: number;
  tabStartingValue?: number;
  tabsSpaceApart?: number;
}

const ScrollableTabsWrapper = (props: any) => {
  const {
    children,
    navbarColor,
    heightOfTabs,
    tabLeftOfsetBy,
    extraTopSpace,
    overrideTabsStyle,
  } = props;
  const [arrUniqueTabTitles, setArrUniqueTabTitles] = useState<any>([]);

  const saveTitlesToSourceOfTrue = async (index, title) => {
    setArrUniqueTabTitles([...arrUniqueTabTitles, { index, title }]);
  };

  const getNavTabPositioningHelper = ({
    index,
    tabStartingValue = defaultTabStartingValue,
    tabsSpaceApart = defaultTabsSpaceApart,
  }: getNavTabPositioningHelperT) => {
    if (index === 0) return tabStartingValue;
    else return tabsSpaceApart * index + tabStartingValue;
  };

  const childrenWithAdditionalProps = Children.map(children, (child, index) => {
    let whereChild = "";
    if (0 === index) {
      whereChild = "first";
    } else if (children.length - 1 === index) {
      whereChild = "last";
    }
    return cloneElement<scrollableTabsChildrenT>(child, {
      index,
      extraTopSpace,
      whereChild,
      tabLeftOffset: getNavTabPositioningHelper({
        index: tabLeftOfsetBy ?? index,
      }),
      heightOfTabs,
      overrideTabsStyle,
      saveTitlesToSourceOfTrue,
    });
  });

  return (
    <div className="snap-scroll-container">
      <Navbar
        getNavTabPositioningHelper={getNavTabPositioningHelper}
        extraTopSpace={extraTopSpace}
        heightOfTabs={heightOfTabs}
        navbarColor={navbarColor}
        tabSectionTitles={tabSectionTitles}
      />
      {childrenWithAdditionalProps}
    </div>
  );
};

export default ScrollableTabsWrapper;

ScrollableTabsWrapper.propTypes = {
  children: PropTypes.any,
  // heightOfTabs: PropTypes.number.isRequired,
  heightOfTabs: PropTypes.number,
  overrideTabsStyle: PropTypes.string,
  navbarColor: PropTypes.string,
  extraTopSpace: PropTypes.number,
  tabSectionTitles: PropTypes.array.isRequired,
};
ScrollableTabsWrapper.defaultProps = {
  heightOfTabs: defaultHeightOfTabs,
  navbarColor: "#221E18",
  extraTopSpace: defaultExtraTopSpace,
};
