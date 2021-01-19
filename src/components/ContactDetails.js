import React from 'react'

function ContactDetails(props) {
    const {user} = props
    return ( 
        <div>
            <span>{`Age: ${user.dob.age}`}</span><br/>
            <span>{`Gender: ${user.gender}`}</span><br/>
            <span>{`Phone: ${user.cell}`}</span><br/>
            <span>{`Email: ${user.email}`}</span><br/>
            <span>{`Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`}</span>
        </div>
     );
}
 
export default ContactDetails;