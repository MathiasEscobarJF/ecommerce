import Input from "./Input";
import { StepDispatchContext } from "./StepContext";
import { useContext } from "react";

function PaymentForm({data,handleChange}){
    const dispatch = useContext(StepDispatchContext);
    return (
        <form>
            <fieldset>
                <legend>Pago</legend>
                <div>
                    <Input realName='Número de tarjeta' inputType='number' inputName='cardNumber' inputValue={data.cardNumber} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Nombre como aparece en la tarjeta' inputType='text' inputName='cardName' inputValue={data.cardName} onChange={handleChange} />
                </div>
                <div>
                    <Input realName='Fecha de expiración MM/YY' inputType='text' inputName='cardExpiration' inputValue={data.cardExpiration} onChange={handleChange} />
                </div>
                <div>
                    <label>
                        Código de seguridad
                        <input type="number" name="cvc" />
                    </label>
                    <Input realName='Código de seguridad' inputType='number' inputName='cvc' inputValue={data.cvc} onChange={handleChange} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Facturación</legend>
                <div>
                    <label>
                        <input type="radio" name='billingAdress' value='same' checked={data.billingAdress === 'same'} onChange={handleChange} /> Igual que la dirección de entrega
                    </label>
                    <label>
                        <input type="radio" name='billingAdress' value='diferent' checked={data.billingAdress === 'diferent'} onChange={handleChange} /> Usar una dirección de facturación diferente
                    </label>
                </div>
                {data.billingAdress === 'diferent' && (
                    <fieldset>
                        <legend>Dirección de facturación</legend>
                        <div>
                            <Input realName='Nombre completo' inputType='text' inputName='fullname' inputValue={data.fullname} onChange={handleChange} />
                        </div>
                        <div>
                            <label>
                                País
                                <select name="country" value={data.country} onChange={handleChange}>
                                    <option value='Uruguay'>Uruguay</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Estado/Provincia/Región
                                <select name="state" value={data.state} onChange={handleChange}>
                                    <option value='Departamento de Montevideo'>Departamento de Montevideo</option>
                                    <option value='Departamento de Canelones'>Departamento de Canelones</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <Input realName='Ciudad' inputType='text' inputName='city' inputValue={data.city} onChange={handleChange} />
                        </div>
                        <div>
                            <Input realName='Código postal' inputType='number' inputName='zipCode' inputValue={data.zipCode} onChange={handleChange} />
                        </div>
                        <div>
                            <Input realName='Calle/Avenida/... y Número' inputType='text' inputName='streetAndNumber' inputValue={data.streetAndNumber} onChange={handleChange} />
                        </div>
                        <div>
                            <Input realName='Piso, apartamento, escalera, etc' inputType='text' inputName='housingType' inputValue={data.housingType} onChange={handleChange} />
                        </div>
                    </fieldset>
                )}
            </fieldset>
            <div>
                <button onClick={() => dispatch({type: 'back'})}>Volver a envio</button>
                <button type="submit">Confirmar y pagar</button>
            </div>
        </form>
    );
}

export default PaymentForm;