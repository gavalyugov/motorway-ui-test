import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "../css/Form.css";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const COLOR_OPTIONS = [
  "",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "white",
  "black",
];

const Form = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <section>
      <h2>Form</h2>
      <form onSubmit={() => {}} className="form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "Please enter your name" })}
            aria-invalid={errors.name ? "true" : "false"}
            className="input"
          />
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please enter an email address",
              pattern: { value: EMAIL_REGEX, message: "Invalid email" },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="input"
          />
          <ErrorMessage errors={errors} name="email" />
        </div>
        <div className="form-field">
          <label htmlFor="color">Favorite color</label>
          <select
            {...register("color", { required: "Please select a color" })}
            aria-invalid={errors.color ? "true" : "false"}
            className="input"
          >
            {COLOR_OPTIONS.map((option, index) => (
              <option value={option} key={index}>
                {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
              </option>
            ))}
          </select>
          <ErrorMessage errors={errors} name="color" />
        </div>
        <div className="form-field">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            {...register("dateOfBirth", {
              valueAsDate: true,
            })}
            aria-invalid={errors.dateOfBirth ? "true" : "false"}
            type="date"
            className="input"
          />
          <ErrorMessage errors={errors} name="dateOfBirth" />
        </div>
        <div className="form-field">
          <label htmlFor="salaryMin">Salary range (in £)</label>
          <div className="row">
            <input
              {...register("salaryMin", {
                required: "Please set a salary range",
                min: {
                  value: 0,
                  message: "Cannot set a negative salary",
                },
              })}
              aria-invalid={errors.salaryMin ? "true" : "false"}
              type="number"
              className="input salaryMin money"
            />
            <input
              {...register("salaryMax", {
                required: "Please set a salary range",
                min: {
                  value: 0,
                  message: "Cannot set a negative salary",
                },
                validate: (value, formValues) =>
                  Number(value) >= Number(formValues.salaryMin)
                    ? false
                    : "Cannot be less than salary minimum",
              })}
              aria-invalid={errors.salaryMax ? "true" : "false"}
              type="number"
              className="input money"
            />
          </div>
          {errors.salaryMin ? (
            <ErrorMessage errors={errors} name="salaryMin" />
          ) : (
            errors.salaryMax && (
              <ErrorMessage errors={errors} name="salaryMax" />
            )
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
