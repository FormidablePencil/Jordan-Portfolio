import React from 'react'
import LandingContainer from '../reusables/LandingContainer'
import { contacts } from '../../assets/constants/staticData'

function Contacts() {

  return (
    <div className="contacts flex">
      <LandingContainer>
        <div className="contact-box flex">
          <div className="direct-message flex-2 flex col align-end justify-between">
            <input placeholder='Name' type="text" />
            <input placeholder='Email' type="text" />
            <textarea placeholder='Message' />
            <button className='action-btn'><p className='large'>Submit</p></button>
          </div>
          <div className="or-statement flex-1 flex justify-center align-center">
            <p className='dark-txt large'>or</p>
          </div>
          <div className="redirect-mail flex-2">
            <div className="url flex">
              <p className='lessDark-txt'>Email:</p>
              <p className='darker-txt ml-1'>{contacts.email}</p>
            </div>
            <div className="url flex">
              <p className='lessDark-txt'>Github:</p>
              <p className='darker-txt ml-1'>{contacts.github}</p>
            </div>
            <div className="btn-container flex flex-1 justify-center align-center">
              <button className='action-btn'><p className='large'>Redirect to email</p></button>
            </div>
          </div>
        </div>
      </LandingContainer>
    </div >
  )
}

export default Contacts
