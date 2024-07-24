import { useFormContext } from 'react-hook-form';

const TrainingPreferences = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Preferencias de Entrenamiento</h2>
      <div>
        <label>Tipo de Entrenamiento</label>
        <select {...register('trainingType', { required: 'El tipo de entrenamiento es obligatorio' })}>
          <option value="">Seleccione una opción</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Fuerza</option>
          <option value="flexibility">Flexibilidad</option>
        </select>
        {errors.trainingType && <span>{errors.trainingType.message}</span>}
      </div>
      <div>
        <label>Objetivos</label>
        <input {...register('goals', { required: 'Los objetivos son obligatorios' })} />
        {errors.goals && <span>{errors.goals.message}</span>}
      </div>
      <div>
        <label>Disponibilidad</label>
        <input {...register('availability', { required: 'La disponibilidad es obligatoria' })} />
        {errors.availability && <span>{errors.availability.message}</span>}
      </div>
    </div>
  );
};

export default TrainingPreferences;