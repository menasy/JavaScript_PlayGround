
import React from "react";
import {useFormik} from	"formik"
import "../App.css"
import  validationSchema from "./Validation";
function Signup()
{
	const {handleSubmit,handleChange, values, errors, touched, handleBlur} = useFormik({
		initialValues:{
			email:"",
			password:"",
			confirm_passwd:"",
			gender:"",
			country: [],
		},
		onSubmit: (values) => {
			!(errors.email && errors.password && errors.confirm_passwd) ? alert("Kayıt İşelmi Başarılı !") : alert("Kayıt İşelmi Başarısız!") 
		},
		validationSchema,
	})

	const printError = (err, isTouched) =>
	{
		return err && isTouched && <div className="error">{err}</div>;
	}
	return (
			<div>
			<form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            
            <label className="inputLabel" htmlFor="email">Email</label>
            <input 
                id="email" 
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
				onBlur={handleBlur}
            />
			{printError(errors.email,touched.email)}
            <br/>
            <label className="inputLabel" htmlFor="password">Password</label>
            <input 
                id="password"
                name="password"
                type="password" 
                value={values.password}
                onChange={handleChange}
				onBlur={handleBlur}

            />
			{printError(errors.password, touched.password)}
            <br/>
            
            <label className="inputLabel" htmlFor="confirm_passwd">Confirm Password</label>
            <input
                id="confirm_passwd"
                name="confirm_passwd" 
                type="password" 
                value={values.confirm_passwd}
                onChange={handleChange}
				onBlur={handleBlur}

            />
			{printError(errors.confirm_passwd, touched.confirm_passwd)}
            <br/><br/>

            <h3>Gender</h3>
            <label>
                <input 
                    name="gender" 
                    type="radio" 
                    value="male"
                    checked={values.gender === "male"}
                    onChange={handleChange}
					onBlur={handleBlur}

                />
                Male
            </label>
            <label>
                <input 
                    name="gender" 
                    type="radio" 
                    value="female"
                    checked={values.gender === "female"}
                    onChange={handleChange}
                />
                Female
            </label>

            <br/><br/>
			<select name="country" value = {values.country} onChange={handleChange}>
				<option value ="turkey" >Turkey</option>
				<option value = "bosna">Bosna</option>
			</select>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>	
        </form>
		<div>
			<p>Email: {values.email}</p>
			<p>Password: {values.password}</p>
			<p>Confirm Password: {values.confirm_passwd}</p>
			<p>Gender: {values.gender}</p>
			<p>Country:{values.country}</p>
		</div>
		</div>
	);
}
export default Signup;