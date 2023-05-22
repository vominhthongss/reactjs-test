import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.css";

const Login = () => {
  const auth = require("../../data/user.json");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (user) => {
    if (
      user.email === auth.user.email &&
      user.password === auth.user.password
    ) {
      navigate("/home");
    } else {
      alert("Wrong password !");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="login-form">
          <h1 className="heading">Đăng nhập</h1>
          <div className="login-form-input">
            <input
              placeholder="Nhập email"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email trống",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email không hợp lệ",
                },
              })}
              type="text"
            />
            {errors.email?.message ? (
              <span className="error"> {errors.email.message}</span>
            ) : (
              ""
            )}
            <input
              placeholder="Nhập password"
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "Mật khẩu trống",
                },
              })}
              type="passwod"
            />
            {errors.password?.message ? (
              <span className="error"> {errors.password.message}</span>
            ) : (
              ""
            )}
          </div>

          <input className="login-button" type="submit" value="Đăng nhập" />
        </div>
      </form>
    </div>
  );
};

export default Login;
