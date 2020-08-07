import { useState, useEffect } from "react"

export const useScrollHandler = (ref, variable, tabFixedTopOffset) => {
  // setting initial value to true
  const [tabFixed, setTabFixed] = useState({
    demoTech: false,
    demoProjects: false,
    intro: false,
    bio: false,
    contacts: false
  })

  // running on mount
  useEffect(() => {
    const onScroll = () => { //Todo: preformance issue here. setState is constantly firing because this element
      //@ts-ignore
      if (ref.current.getBoundingClientRect().top < tabFixedTopOffset) {
        // reff.current = ({ ...reff.current, [variable]: true })
        setTabFixed(prev => ({ ...prev, [variable]: true }))
      } else {
        setTabFixed(prev => ({ ...prev, [variable]: false }))
      }
    }

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll)

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [tabFixed, setTabFixed])

  return tabFixed

}