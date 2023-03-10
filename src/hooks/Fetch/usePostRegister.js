import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const usePostRegister = () => {
	const navigate = useNavigate();
	const { reset } = useForm();

	const submit = (data) => {
		const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("token", data.token);
				localStorage.setItem("firstName", data.firstName);
				localStorage.setItem("lastName", data.lastName);
			})
			.catch((err) => console.log(err));

		navigate("/");
		reset({
			email: "",
			password: "",
		});
	};

	return submit;
};

export default usePostRegister;
