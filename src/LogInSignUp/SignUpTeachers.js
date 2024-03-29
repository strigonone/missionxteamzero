import React from "react";
import { useForm } from "react-hook-form";

function SignUpTeacher() {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmitTeacher = () => {
		const requestURL1 = "http://localhost:8080/api/user/registerTeacher";
		const FullName = document.getElementById("TeacherFullName").value;
		const Password = document.getElementById("TeacherPassword").value;
		const Email = document.getElementById("TeacherEmail").value;
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
		<div>
			<form
				// action="student register"
				action="submit"
				onSubmit={handleSubmit(onSubmitTeacher)}
				className="UserInput"
				method="POST"
			>
				<input
					placeholder="Full Name"
					type="text"
					name="TeacherFullName"
					id="TeacherFullName"
					required
					ref={register}
				/>
				{errors.fullName && <p>This is required</p>}
				<input
					placeholder="Email Address"
					type="text"
					name="TeacherEmail"
					id="TeacherEmail"
					required
					ref={register}
				/>
				<input
					placeholder="Password"
					type="password"
					name="TeacherPassword"
					id="TeacherPassword"
					ref={register({ required: true, minLength: 8 })}
				/>
				<input
					placeholder="Confirm Password"
					type="password"
					name="confirmPassword"
					ref={register({ validate: (value) => value === watch("password") })}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<button onClick={() => onSubmitTeacher()} className="registerButton">
					SIGN UP
				</button>
			</form>
		</div>
	);
}

export default SignUpTeacher;
