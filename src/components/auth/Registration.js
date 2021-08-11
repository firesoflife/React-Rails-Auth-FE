import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		password_confirmation: '',
		registrationErrors: '',
	});

	const handleSubmit = e => {
		console.log('form submitted');
		e.preventDefault();

		// AXIOS
		const user = {
			email: values.email,
			password: values.password,
			password_confirmation: values.password_confirmation,
		};

		axios
			.post(
				'http://localhost:3001/registrations',
				{
					user,
				},
				{ withCredentials: true }
			)
			.then(resp => console.log(resp))
			.catch(error => {
				console.log('registration error', error);
			});
		e.preventDefault();
	};

	const handleChange = e => {
		e.preventDefault();
		console.log('name:', e.target.name, 'value:', e.target.value);
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<div>
			<h1>Registration</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={values.email}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={values.password}
					onChange={handleChange}
					required
				/>
				<input
					type='password'
					name='password_confirmation'
					placeholder='Password Confirmation'
					value={values.password_confirmation}
					onChange={handleChange}
					required
				/>

				<button type='Submit'>Register</button>
			</form>
		</div>
	);
};

export default Registration;
