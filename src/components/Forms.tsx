import useForm from '../hooks/useForm';


const Forms = () => {

  const {form, email, password, handleChange } = useForm({
    email: 'test@test.com',
    password: '123456'
  });

  return (
    <>
      <h3>Formularios</h3>
      <input 
        type='text'
        className='form-control'
        placeholder='Email'
        value={email}
        onChange= {(e) => handleChange(e.target.value, 'email')}
      />
      <input 
        type='text'
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={password}
        onChange= {(e) => handleChange(e.target.value, 'password')}
      />
      <code>
        <pre>{ JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  )
}

export default Forms
