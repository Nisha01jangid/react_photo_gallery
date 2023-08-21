import React, { useState } from 'react'
import './styles2.css'


const Contact_details = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // All the details entered by the user is saved in the array below

    const [userdata, setUserData] = useState([]);

    const handleNameFields = (event) => {
        setName(event.target.value);
    
    }

    const handleEmailFields = (event) => {
        setEmail(event.target.value);
    
    }

    const handlePasswordFields = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setUserData((oldData)=> {
            return [...oldData, name, email, password];
        })
    }

  return (
    <>
   <div className="main_container">
    <h1>Contact Here</h1>
    <form onSubmit={submitHandler}>
    <div className='input_div'>
    <label for="name">Full Name:</label>
    <input type="text" value={name} onChange={handleNameFields}/>
    </div>
    <br/>
    <div  className='input_div'>
    <label for="email">Email:</label>
    <input type="email" value={email} onChange={handleEmailFields}/>
    </div>
    <br/>
    <div  className='input_div'>
    <label for="password">Password:</label>
    <input type="password" value={password} onChange={handlePasswordFields}/>
    </div>
    <br/>
    <button type='submit'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default Contact_details
