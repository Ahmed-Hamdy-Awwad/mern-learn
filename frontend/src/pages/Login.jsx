import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const getValue = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt />
					Login
				</h1>
				<p>Please login</p>
			</section>
			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							className="form-control"
							type="email"
							placeholder="Email"
							id="email"
							name="email"
							value={email}
							onChange={getValue}
						/>
					</div>
					<div className="form-group">
						<input
							className="form-control"
							type="password"
							placeholder="Password"
							id="password"
							name="password"
							value={password}
							onChange={getValue}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block" type="submit">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
