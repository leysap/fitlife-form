import { useFormContext } from 'react-hook-form';

const ContactInfo = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Información de Contacto</h2>
      <div>
        <label>Dirección</label>
        <input {...register('address', { required: 'La dirección es obligatoria' })} />
        {errors.address && <span>{errors.address.message}</span>}
      </div>
      <div>
        <label>Ciudad</label>
        <input {...register('city', { required: 'La ciudad es obligatoria' })} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
      <div>
        <label>Código Postal</label>
        <input {...register('postalCode', { required: 'El código postal es obligatorio' })} />
        {errors.postalCode && <span>{errors.postalCode.message}</span>}
      </div>
    </div>
  );
};

export default ContactInfo;