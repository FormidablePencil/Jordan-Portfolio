import React, { cloneElement, Children, useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import { barColor } from '../styles/themeStyles';
import darken from '@bit/styled-components.polished.color.darken';

interface scrollableTabsChildrenT {
  heightOfTabs, tabLeftOffset, whereChild?: string, extraTopSpace: number, index,
  overrideTabsStyle: {}, saveTitlesToSourceOfTrue: Function,
}
const ScrollableTabsWrapper = (props: any) => {
  const { children, navbarColor, heightOfTabs, tabLeftOfsetBy, extraTopSpace, overrideTabsStyle, tabSectionTitles } = props
  const [arrUniqueTabTitles, setArrUniqueTabTitles] = useState<any>([])

  const saveTitlesToSourceOfTrue = async (index, title) => {
    setArrUniqueTabTitles([...arrUniqueTabTitles, { index, title }]) //! Problem is that setState is called too fast multiple times and it only registers the last call.
  }

  const getNavTabPositioningHelper = ({
    index, tabStartingValue = defaultTabStartingValue, tabsSpaceApart = defaultTabsSpaceApart,
  }: getNavTabPositioningHelperT) => {
    if (index === 0) return tabStartingValue
    else return tabsSpaceApart * index + tabStartingValue
  }

  const childrenWithAdditionalProps = Children.map(children, (child, index) => {
    let whereChild = ''
    if (0 === index) {
      whereChild = 'first'
    } else if (children.length - 1 === index) {
      whereChild = 'last'
    }
    return cloneElement<scrollableTabsChildrenT>(child, { //was working on seting t
      index,
      extraTopSpace,
      whereChild,
      tabLeftOffset: getNavTabPositioningHelper({ index: tabLeftOfsetBy ?? index }),
      heightOfTabs,
      overrideTabsStyle,
      saveTitlesToSourceOfTrue,
    });
  });

  return (
    <div>
      <Navbar
        getNavTabPositioningHelper={getNavTabPositioningHelper}
        extraTopSpace={extraTopSpace}
        heightOfTabs={heightOfTabs}
        navbarColor={navbarColor}
        tabSectionTitles={tabSectionTitles}
      />
      <div>
        {childrenWithAdditionalProps}
      </div>
    </div>
  )
}



const Navbar = (props) => {
  const { navbarColor, heightOfTabs, extraTopSpace, tabSectionTitles, getNavTabPositioningHelper } = props
  return (
    <div style={{
      zIndex: 19,
      position: 'fixed',
      height: heightOfTabs + extraTopSpace,
      width: '100%',
      // backgroundColor: navbarColor,
      background: '#3D515B',
      // background: 'linear-gradient(175deg, rgba(30,55,75,1) 0%, rgba(39,77,108,1) 12%)',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      {tabSectionTitles.map((tabSectionTitle, index) =>
        /* //~ pressable btn, standard but also match theme, justified evenly right behind of tabs */
        <AnchorLink
          style={{
            position: 'absolute',
            width: 130,
            left: getNavTabPositioningHelper({ index }),
            height: '1.5em',
            marginBottom: '.4em',
            display: 'flex',
            fontSize: '1em',
            justifyContent: 'center'
          }}
          href={`#${tabSectionTitle}`}>
          <Typography color='textPrimary' variant='body1' style={{
            backgroundColor: '#63DCB9',
            width: '97%',
            borderRadius: '.35em',
            textAlign: 'center'
          }}>
            {tabSectionTitle}
          </Typography>
        </AnchorLink>
      )}
      <Button
        style={{
          textTransform: 'none',
          position: 'absolute',
          width: 130,
          right: 50,
          height: '1.5em',
          marginBottom: '.4em',
          display: 'flex',
          fontSize: '1em',
          justifyContent: 'center',
          backgroundColor: '#B8DDCE',
        }}
      >
        Resume
      </Button>
    </div>
  )
}

interface navTabsWrapperT extends scrollableTabsChildrenT {
  index: number,
  anchor, stickyBackgroundBgColor, tabColor, extraTopSpace: number,
  overrideTabsStyle, uniqueTabTitle: string, arrUniqueTabTitles: {},
  saveTitlesToSourceOfTrue: Function, bgImg
}
const NavTabsWrapper = (props) => {
  const {
    extraTopSpace,
    heightOfTabs,
    tabColor,
    anchor,
    stickyBackgroundBgColor,
    tabLeftOffset,
    whereChild,
    overrideTabsStyle,
    uniqueTabTitle,
    index,
    saveTitlesToSourceOfTrue,
    bgImg,
  }: navTabsWrapperT = props

  const [temporarilyHolding] = useState({ index: index, title: uniqueTabTitle })
  //~ If no solution found then directly pass data into sourceOfTruth and later I might stumble on a solution.

  useEffect(() => {
    saveTitlesToSourceOfTrue(temporarilyHolding.index, temporarilyHolding.title)
    // eslint-disable-next-line
  }, [temporarilyHolding])

  const widthOfContent = '100%'
  // const marginTopContent = whereChild === 'first' ? `calc(-100vh + ${heightOfTabs * 2 + extraTopSpace}px` : `calc(-100vh + ${heightOfTabs}px)`
  const marginTopContent = `calc(-100vh + ${heightOfTabs}px)`
  const heightOfStickyAbsoluteBackground = `calc(100vh - ${heightOfTabs}px)`

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: heightOfTabs + extraTopSpace,
          zIndex: 20,
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: darken(index * .02, barColor),
          // backgroundColor: barColor,
          height: '.5em', width: '100%', zIndex: 100
        }} />
        <AnchorLink
          style={{ //Tab
            zIndex: 30,
            left: tabLeftOffset,
            height: heightOfTabs,
            width: 130,
            backgroundColor: darken(index * .02, barColor),
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            top: -heightOfTabs,
            position: 'absolute',
            borderRadius: '15px 15px 0px 0px',
            ...overrideTabsStyle,
          }}
          href={`#${anchor}`}>
          <Typography variant='body1' color='textSecondary'>
            {anchor}
          </Typography>
        </AnchorLink>
      </div>
      <div style={{ //sticky background
        zIndex: -1,
        width: widthOfContent,
        marginBottom: -20,
        height: heightOfStickyAbsoluteBackground,
        position: 'sticky',
        top: heightOfTabs + extraTopSpace,
        background: stickyBackgroundBgColor,
      }}>
        {bgImg &&
          <img style={{ width: '100%', }} src={bgImg.src} alt='' />
        }
      </div>
      <div id={anchor} style={{
        zIndex: 10,
        marginTop: marginTopContent,
        position: 'relative',
        width: widthOfContent,
        marginBottom: whereChild !== 'last' ? heightOfTabs : 0
      }}>
        {props.children}
      </div>
    </>
  )
}



export { NavTabsWrapper }
export default ScrollableTabsWrapper

interface NavbarT {
  bgColor?: string
}
// interface ScrollableTabsWrapperT {
//   children: any
//   navBarColor?: string
// }
interface getNavTabPositioningHelperT {
  index: number, tabStartingValue?: number, tabsSpaceApart?: number
}

const defaultTabStartingValue = 44
const defaultTabsSpaceApart = 150
const defaultHeightOfTabs = 35
const defaultExtraTopSpace = 10

ScrollableTabsWrapper.propTypes = {
  children: PropTypes.any,
  heightOfTabs: PropTypes.number.isRequired,
  overrideTabsStyle: PropTypes.string,
  navbarColor: PropTypes.string,
  extraTopSpace: PropTypes.number,
  tabSectionTitles: PropTypes.array.isRequired
}
ScrollableTabsWrapper.defaultProps = {
  heightOfTabs: defaultHeightOfTabs,
  navbarColor: '#221E18',
  extraTopSpace: defaultExtraTopSpace,
}
Navbar.propTypes = {
  navbarColor: PropTypes.string,
  heightOfTabs: PropTypes.number,
  extraTopSpace: PropTypes.number.isRequired,
  tabSectionTitles: PropTypes.array.isRequired,
  getNavTabPositioningHelper: PropTypes.func
}
Navbar.defaultProps = {
  navbarColor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.number,
}
NavTabsWrapper.propTypes = {
  bgImg: PropTypes.object,
  children: PropTypes.any.isRequired,
  tabColor: PropTypes.string,
  anchor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.string,
  uniqueTabTitle: PropTypes.string.isRequired,
}
NavTabsWrapper.defaultProps = {
  stickyBackgroundBgColor: barColor,
  tabColor: barColor,
  // stickyBackgroundBgColor: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)',
  // tabColor: 'rgba(53,9,121,1)'
}