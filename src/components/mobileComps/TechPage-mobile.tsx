import React from 'react'
import { useSelector } from 'react-redux'
import { rootT } from '../../storeConfig';

function TechPage() {
  const { moreTech } = useSelector((state: rootT) => state.portfolioContent)
  
  return (
    <div>
      {moreTech.map(tech => 
      <img key={tech.icon} src={tech.icon} alt={tech.alt} />
      )}
    </div>
  )
}

export default TechPage
