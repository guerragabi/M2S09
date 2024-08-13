import React from 'react';
import { useForm } from 'react-hook-form';

function UserRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          {...register('name', { required: 'O nome é obrigatório' })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'O email é obrigatório',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Formato de email inválido',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'A senha é obrigatória' })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default UserRegistrationForm;
