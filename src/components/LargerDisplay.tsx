import React from "react";
import Intro from "./landing/Intro";
import DemoTech from "./mobileComps/DemoTech";
import Contacts from "./landing/Contacts";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { rootT } from "../storeConfig";
import { CrystalParallax } from "parallax-effect-crystals";
import { navbarColor } from "../styles/themeStyles";
import ScrollableTabsWrapper from "./scrollable-tabs";
import NavTabsWrapper from "./scrollable-tabs/NavTabsWrapper";

export const tabSectionTitles = [
  { tabTitle: "Home" },
  { tabTitle: "Tech" },
  { tabTitle: "Projects" },
  { tabTitle: "contacts" },
];

function LargerDisplay() {
  const { rawCrystalData } = useSelector((state: rootT) => state);
  const contactsRef = React.useRef<HTMLInputElement>(null);

  const jumpTo = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ScrollableTabsWrapper
        navbarColor={navbarColor}
        heightOfTabs={35}
        tabSectionTitles={[
          tabSectionTitles[0].tabTitle,
          tabSectionTitles[1].tabTitle,
          tabSectionTitles[2].tabTitle,
          tabSectionTitles[3].tabTitle,
        ]}
      >
        <NavTabsWrapper
          // uniqueTabTitle={'section1'} //~ remove
          anchor={tabSectionTitles[0].tabTitle}
          bgImg={{ src: 'https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148434188.jpg', alt: "" }}
        >
          <Intro />
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[1].tabTitle}
          bgImg={{ src: 'https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148414587.jpg', alt: "" }}
        >
          <Container>
            <div style={{ height: "100vh", paddingTop: 15, zIndex: -3 }}>
              <DemoTech />
            </div>
          </Container>
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[2].tabTitle}
          bgImg={{ src: 'https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148433902.jpg', alt: "" }}
        >
          <div style={{ zIndex: -3 }}>
            <CrystalParallax
              withGui={false}
              pulledRawCrystalData={rawCrystalData}
            />
            {/* <DemoProjects height='100vh' /> */}
            {/* //! make BioContacts seciton zIndex greater than this so that this component was under the component it's currently overlapping */}
          </div>
        </NavTabsWrapper>
        <NavTabsWrapper
          anchor={tabSectionTitles[3].tabTitle}
          bgImg={{ src: 'https://image.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148433423.jpg', alt: "" }}
        >
          <Container maxWidth="md" style={{ overflowY: "scroll" }}>
            <div ref={contactsRef}>
              <Contacts />
            </div>
          </Container>
        </NavTabsWrapper>
      </ScrollableTabsWrapper>
    </div>
  );
}

export default LargerDisplay;

// {/* <span>Photo by <a href="https://unsplash.com/@jmckinven?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">James McKinven</a> on <a href="https://unsplash.com/s/photos/video-edit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }
// {/* <span>Photo by <a href="https://unsplash.com/@paramir?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ehud Neuhaus</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */ }
