import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth";
import ".form/Form.css";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();

  async function onSubmit(data) {
    await signIn({ username: data.email, password: data.password });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: { value: /^\S+@\S+$/i, message: "Formato inválido" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "A senha é obrigatória" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}

export default RegistrationForm;
