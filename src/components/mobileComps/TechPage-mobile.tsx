import React from 'react'
import { useSelector } from 'react-redux'
import { rootT } from '../../storeConfig';

function TechPage() {
  const { tech } = useSelector((state: rootT) => state.portfolioContent)
  console.log(tech);
  
  return (
    <div>
    </div>
  )
}

export default TechPage
