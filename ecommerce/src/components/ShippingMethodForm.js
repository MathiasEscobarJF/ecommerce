import { StepDispatchContext } from "./StepContext";
import { useContext } from "react";

function ShippingMethodForm({shippingData,handleChange}){
    const dispatch = useContext(StepDispatchContext);
    return (
        <form onSubmit={() => dispatch({type: 'forward'})}>
            <fieldset>
                <legend>Método de envío</legend>
                <div>
                    <label>
                        <input type="radio" name="shippingMethod" value='1' checked={shippingData === '1'} onChange={handleChange}/>Envío Estandar: 11 - 21 días laborables
                    </label>
                    <label>
                        <input type="radio" name="shippingMethod" value='2' checked={shippingData === '2'} onChange={handleChange}/>Envío Exprés: 5 - 9 días laborables
                    </label>
                </div>
            </fieldset>
            <div>
                <button onClick={() => dispatch({type: 'back'})}>Volver a detalles</button>
                <button>Continuar al pago</button>
            </div>
        </form>
    )
}

export default ShippingMethodForm;