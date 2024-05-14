import { useEffect} from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createrUser,
  userSelected,
  updateUser,
  setUserSelected,
  formIsOpen,
  setFormIsOpen,
  succes,
  setSucces,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    reset(userSelected);
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      updateUser(userSelected.id, data);
      setUserSelected();
      setSucces(true);
    } else {
      createrUser(data);
      setSucces(true);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });

    setFormIsOpen(false);
  };

  const handleExit = () => {
    setFormIsOpen(false);

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUserSelected();
  };
  const handleExitActualize = () => {
    setSucces(false);
  };

  return (
    <>
      <div className={`form_container ${formIsOpen || "form_close"}`}>
        <form className="form" onSubmit={handleSubmit(submit)}>
          <span onClick={handleExit} className="form_exit">
            x
          </span>

          <h2> {userSelected ? "Register Form" : "Create User Form"} </h2>

          <div className="form_list">
            <label className="form_field">
              <span className="form_label">Email</span>
              <input
                className="form_input"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                type="email"
              />
              {errors.email && errors.email.message}
            </label>
            <label className="form_field">
              <span className="form_label">Password</span>
              <input
                type="password"
                className="form_input"
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "required" && (
                <p role="alert">🚦 Password required 🚦</p>
              )}
            </label>
            <label className="form_field">
              <span className="form_label">Name</span>
              <input
                className="form_input"
                {...register("first_name", { required: true })}
                aria-invalid={errors.first_name ? "true" : "false"}
              />
              {errors.first_name?.type === "required" && (
                <p role="alert"> 🚦 Name required 🚦</p>
              )}
            </label>
            <label className="form_field">
              <span className="form_label">Last Name</span>
              <input
                className="form_input"
                {...register("last_name", { required: true })}
                aria-invalid={errors.last_name ? "true" : "false"}
              />
              {errors.last_name?.type === "required" && (
                <p role="alert"> 🚦 Last Name required 🚦 </p>
              )}
            </label>
            <label className="form_field">
              <span className="form_label">Birthday</span>
              <input
                className="form_input"
                {...register("birthday")}
                type="date"
              />
            </label>
          </div>

          <button className="form_btn">Submit</button>
        </form>
      </div>
      <div className={`form_succsessful ${succes || "form_successful_close"}`}>
        <div className="Form_succsessful_message">
        <h2 className="form_title">Update Successfully </h2>
        <span className="form_exit_actualize" onClick={handleExitActualize}>
          Close
        </span>
        </div>
      </div>
    </>
  );
};

export default FormUser;
