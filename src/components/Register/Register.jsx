import { useState } from "react";
import { getUsers, saveUsers } from "../../Utils/storage";
import { validateusername, validatefirstname, validatelastname, validateconfirmpassword, validatecontactnumber, validateemail, validatepassword } from "../../Utils/validations";
import { useNavigate } from "react-router-dom";
import "./Register.css"
import Navbar from "../Navbar";

const Register = () => {
    // const [users, setUsers] = useState(getUsers())
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [formdata, setFormdata] = useState({
        username : "",
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        confirmpassword : "",
        contactnumber : "",
    })
    const handleInputChange = (e) => {
        setFormdata({...formdata, [e.target.name] : e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)

        const newErrors = {}

        if(!validateusername(formdata.username))
            newErrors.username = "Username must be greater than 5 letters"
        if(!validatefirstname(formdata.firstname))
            newErrors.firstname = "Firstname must be greater than 3 letter"
        if(!validatelastname(formdata.lastname))
            newErrors.lastname = "Lastname must be greater than 3 letters"
        if(!validatepassword(formdata.password))
            newErrors.password = "Password must be greater than 8 letters"
        if(!validateconfirmpassword(formdata.confirmpassword, formdata.password))
            newErrors.confirmpassword = "Password and Confirm Password didn't match"
        if(!validateemail(formdata.email))
            newErrors.email = "Not a Valid email"
        if(!validatecontactnumber(formdata.contactnumber))
            newErrors.contactnumber = "Not a valid contact Number"

        if(Object.keys(newErrors).length > 0 ){
            setErrors(newErrors);
            return;
        }

        const users = getUsers();
        users.push({...formdata});
        saveUsers(users)
        // console.log(users)
        alert("Registration Successful");
        navigate("/login")
        setFormdata({
            username : "",
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            confirmpassword : "",
            contactnumber : "",
        })
    }
  return (
    <div className="container-all">
        <Navbar/>
        <div className="register-container">
            <h1>Registration Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="Enter Username" value={formdata.username} onChange={handleInputChange} className="input-fields"/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <input type="text" name="firstname" placeholder="Enter First Name" value={formdata.firstname} onChange={handleInputChange} className="input-fields"/>
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div>
                    <input type="text" name="lastname" placeholder="Enter last Name" value={formdata.lastname} onChange={handleInputChange} className="input-fields"/>
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div>
                    <input type="email" name="email" placeholder="Enter Email" value={formdata.email} onChange={handleInputChange} className="input-fields"/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter Password" value={formdata.password} onChange={handleInputChange} className="input-fields"/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" value={formdata.confirmpassword} onChange={handleInputChange} className="input-fields"/>
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                </div>
                <div>
                    <input type="text" name="contactnumber" placeholder="Enter your Contact Number" value={formdata.contactnumber} onChange={handleInputChange} className="input-fields"/>
                    {errors.contactnumber && <p>{errors.contactnumber}</p>}
                </div>
                <div  className="register-btn">
                <button  className="register-button" onClick={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register