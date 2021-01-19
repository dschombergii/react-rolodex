import React, { useState } from 'react';
import ContactDetails from './ContactDetails';
import '../component-styles/ContactCard.css'

function ContactCard(props) {
    const {user} = props
    const [isHidden, setHide] = useState(true)
    const [isShown, setShow] = useState("Show Details")

    return (
        <div className="Contact-card"
            onClick={() => 
            isHidden ? 
            setHide(false) & setShow("Hide Details") :
            setHide(true) & setShow("Show Details")}
            > 
            <div className="Profile">
                <div>
                    <img 
                        className="Profile-pic"
                        src={user.picture.large}>
                    </img><br/>

                    <span className="User-name">
                        {`${user.name.first} ${user.name.last}`}
                    </span><br/>


                    <button className="Hide-button"> {isShown} </button>
                </div>
            </div>
                
            <div className="User-details">
                {isHidden ?
                <div></div> :
                <ContactDetails user={user}/> }
            </div>
        </div>
    )
}

export default ContactCard