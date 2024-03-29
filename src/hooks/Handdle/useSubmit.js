import { useNavigate } from "react-router-dom";

const useSubmit = () => {
	const navigate = useNavigate();

	const submit = (data) => {
		const URl = "https://e-commerce-api-v2.academlo.tech/api/v1/users";

		fetch(URl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));

		navigate("/login");
	};
	return submit;
};

export default useSubmit;
