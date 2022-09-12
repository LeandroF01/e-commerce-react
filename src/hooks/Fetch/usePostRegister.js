import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const usePostRegister = () => {
  const navigate = useNavigate();
  const { reset } = useForm();

  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("firstName", data.data.user.firstName);
        localStorage.setItem("lastName", data.data.user.lastName);
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
