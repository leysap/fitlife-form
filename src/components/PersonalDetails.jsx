import { useFormContext } from 'react-hook-form';

const PersonalDetails = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Datos Personales</h2>
      <div>
        <label>Nombre</label>
        <input {...register('name', { required: 'El nombre es obligatorio' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Correo Electrónico</label>
        <input {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Correo no válido' } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Teléfono</label>
        <input {...register('phone', { required: 'El teléfono es obligatorio' })} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
    </div>
  );
};

export default PersonalDetails;