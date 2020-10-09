import { SAVE_FETCH_CONTENT } from "../actions/constants"
import { portfolioContentT } from "./reducerProps"

export const pfcDefaults = {
  tabSectionTitles: [
    {
      tabTitle: 'Intro',
    },
    {
      tabTitle: 'Tech Stack',
    },
    {
      tabTitle: 'Projects',
      subSections: [
        { tabTitle: 'Images' },
        { tabTitle: 'Videos' },
        { tabTitle: 'Technologies' }
      ]
    },
    {
      tabTitle: 'Contacts',
      subSections: [
        { tabTitle: 'Bio' },
        { tabTitle: 'Contacts' }
      ]
    }
  ],
  introParagraph: '',
  videoProjects: { url: '', alt: '' },
  tech: { icon: '', video: '', alt: '' },
  moreTech: { icon: '', alt: '' },
  photoshop: { url: '', alt: '' },
  bio: { title: '', paragraph: '' },
  contacts: { email: '', github: '', linkedin: '' },
}

export const initialPortfolioContent: portfolioContentT = {
  tabSectionTitles: pfcDefaults.tabSectionTitles,
  introParagraph: pfcDefaults.introParagraph,
  videoProjects: [pfcDefaults.videoProjects],
  tech: [pfcDefaults.tech],
  moreTech: [pfcDefaults.moreTech],
  photoshop: [pfcDefaults.photoshop],
  bio: pfcDefaults.bio,
  contacts: pfcDefaults.contacts
}

export default (state = initialPortfolioContent, { type, payload }) => {
  switch (type) {

    case SAVE_FETCH_CONTENT:
      return payload

    default:
      return state
  }
}
