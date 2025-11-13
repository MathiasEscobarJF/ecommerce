import Input from "./Input";
import { StepDispatchContext } from "./StepContext";
import { useContext } from "react";

function DetailsForm({detailsData,handleChange}){
    const dispatch = useContext(StepDispatchContext);

    return (
        <form onSubmit={() => dispatch({type: 'forward'})}>
            <fieldset>
                <p>Tus detalles</p>
                <div>
                    <Input realName='Nombre completo' inputType='text' inputName='fullname' inputValue={detailsData.fullname} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Correo electrónico' inputType='email' inputName='email' inputValue={detailsData.email} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Número de teléfono' inputType='number' inputName='telephone' inputValue={detailsData.telephone} onChange={handleChange} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Dirección de envío</legend>
                <div>
                    <label>
                        País
                        <select name="country" value={detailsData.country} onChange={handleChange}>
                            <option value='Uruguay'>Uruguay</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Estado/Provincia/Región
                        <select name="state" value={detailsData.state} onChange={handleChange}>
                            <option value='Departamento de Montevideo'>Departamento de Montevideo</option>
                            <option value='Departamento de Canelones'>Departamento de Canelones</option>
                        </select>
                    </label>
                </div>
                <div>
                    <Input realName='Ciudad' inputType='text' inputName='city' inputValue={detailsData.city} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Código postal' inputType='number' inputName='zipCode' inputValue={detailsData.zipCode} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Calle/Avenida/... y Número' inputType='text' inputName='streetAndNumber' inputValue={detailsData.streetAndNumber} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Piso, apartamento, escalera, etc' inputType='text' inputName='housingType' inputValue={detailsData.housingType} onChange={handleChange} />
                </div>
            </fieldset>
            <div>
                <button type="submit">Continuar al envio</button>
            </div>
        </form>
    )
}

export default DetailsForm;