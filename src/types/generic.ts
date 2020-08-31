export interface portfolioContentT {
  tabSectionTitles: {
    [index: number]: {
      tabTitle: string, subSections?: { [index: number]: { tabTitle: string } }
    }
  }
  introParagraph: string
  videoProjects: {
    [index: number]: {
      url: string, alt: string
    }
    length: any
    map: Function
  }
  tech: {
    [index: number]: {
      icon: string, video: string, alt: string
    }
    length: any
    map: Function
  },
  moreTech: {
    [index: number]: {
      icon: string, alt: string
    }
    length: any
    map: Function
  }
  photoshop: {
    [index: number]: {
      url: string, alt: string
    }
    length: any
    map: Function
  }
  bio: {
    title: string, paragraph: string
  }
  contacts: {
    email: string, github: string, linkedin: string
  }
}
