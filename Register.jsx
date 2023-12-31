import React, {useState} from "react"

export const Register= (props)=> {
     const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-conatiner">
            <h2>Register Form</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Fullname</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} name="name" id="name" placeholder="Username" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"  name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="Create new password" id="password"  name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login Here.</button>
        </div>
    )

}