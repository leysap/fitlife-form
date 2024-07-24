import PersonalDetails from './PersonalDetails';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
import { useForm, FormProvider } from 'react-hook-form';

const Form = () => {
  const methods = useForm();

  const onSubmit = async data => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Hubo un error al enviar los datos:', error);
      alert('Hubo un error al enviar los datos');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalDetails />
        <ContactInfo />
        <TrainingPreferences />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
};

export default Form;