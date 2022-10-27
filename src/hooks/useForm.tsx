import { useState } from 'react';


const useForm = <T extends Object> (form: T) => {
    const [state, setState] = useState(form);
    
      const handleChange = (value: string, campo: keyof T) => {
        setState({
          ...state,
          [campo]: value
        });
      }
      return{
        ...state,
        form: state,
        handleChange
      }
}

export default useForm;
