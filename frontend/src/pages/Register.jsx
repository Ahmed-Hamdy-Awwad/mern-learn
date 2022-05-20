import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

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
					<FaUser />
					Register
				</h1>
				<p>Please create an account</p>
			</section>
			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="Name"
							id="name"
							name="name"
							value={name}
							onChange={getValue}
						/>
					</div>
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
						<input
							className="form-control"
							type="password"
							placeholder="Confirm Password"
							id="password2"
							name="password2"
							value={password2}
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

export default Register;
