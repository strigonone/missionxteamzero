import React from "react";
import { useForm } from "react-hook-form";

function SignUpStudent() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitStudent = () => {
		const requestURL1 = "http://localhost:8080/api/user/registerStudent";
		const FullName = document.getElementById("StudentFullName").value;
		const Password = document.getElementById("StudentPassword").value;
		const Email = document.getElementById("StudentEmail").value;
		const formData = {
			FullName: FullName,
			Password: Password,
			Email: Email,
		};
		
		console.log(formData);
		alert(`Hello ${FullName} you have successfully registered!`);

		fetch(requestURL1, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				Accept: "*",
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div className="StudentLeft">
			<form
				action="submit"
				onSubmit={handleSubmit(onSubmitStudent)}
				className="UserInput"
				method="POST"
			>
				<input
					placeholder="Full Name"
					type="text"
					name="StudentFullName"
					id="StudentFullName"
					required
					ref={register}
				/>
				{errors.fullName && <p>This is required</p>}
				<input
					placeholder="Email Address"
					type="text"
					name="StudentEmail"
					id="StudentEmail"
					required
					ref={register}
				/>
				<input
					placeholder="Password"
					type="password"
					name="StudentPassword"
					id="StudentPassword"
					ref={register({ required: true, minLength: 8 })}
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					ref={register({ validate: (value) => value === watch("password") })}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				{/* <Link><input type='submit'><Button className ='LogSignButton' fullWidth = {true} color = 'secondary' variant = 'contained'>Sign Up</Button></input></Link> */}
				<button onClick={() => onSubmitStudent()} className="registerButton">
					SIGN UP
				</button>
				{/* have added link to the student project library page. User data has not been added yet */}
			</form>
		</div>
	);
}

export default SignUpStudent;
