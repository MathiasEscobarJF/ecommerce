import { useState } from "react";

function Input({realName,inputType,inputName,inputValue,onChange,required}){
    const [error,setError] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const idError = inputName + '-error';

    function handleBlur(e){
        if(required){
            if(e.target.value === '')
                setError(realName + ' es obligatorio');
            else if(e.target.type === 'email' && (!emailRegex.test(e.target.value)))
                setError('Formato inválido. Utilice el formato usuario@dominio.com');
            else if(e.target.name === 'cardExpiration' && (!expirationRegex.test(e.target.value)))
                setError('Formato inválido, Utilize el formato MM/YY');
        }
        return setError(false);
    }

    return (
        <label>
            {realName}
            <input type={inputType} name={inputName} value={inputValue} onChange={onChange} aria-describedby={error ? idError : undefined} onBlur={handleBlur} required={required} />
            {error && <p id={idError}>{error}</p>}
        </label>
    );
}

export default Input;