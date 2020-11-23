import React from "react";


const Greetings = ({   firstName, lastName, Telephonenum ,place}) => (
    <div className="Greetings">
    <input type="text" name="firstName" placeholder= {place} />
      <p>  Hey you! {firstName} {lastName}        {Telephonenum}!</p>
    </div>
    
);

export default Greetings;