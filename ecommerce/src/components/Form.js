import DetailsForm from "./DetailsForm";
import DetailsData from "./DetailsData";
import ShippingMethodForm from "./ShippingMethodForm";
import ShippingMethodData from "./ShippingMethodData";
import PaymentForm from "./PaymentForm";
import { useState } from "react";
import { useContext } from 'react';
import { StepContext } from './StepContext';

function Form({shippingData,handleChange}){
    const step = useContext(StepContext);

    const [detailsData,setDetailsData] = useState({
        fullname: '',
        email: '',
        telephone: '',
        country: 'Uruguay',
        state: 'Departamento de Montevideo',
        city: '',
        zipCode: '',
        streetAndNumber: '',
        housingType: '',
    })

    function handleChangeDetails(e){
        setDetailsData(prev => ({...prev,[e.target.name]: e.target.value}));
    }

    const [paymentData,setPaymentData] = useState({
        cardNumber: '',
        cardName: '',
        cardExpiration: '',
        cvc: '',
        billingAdress: 'same',
        fullname: '',
        country: 'Uruguay',
        state: 'Departamento de Montevideo',
        city: '',
        zipCode: '',
        streetAndNumber: '',
        housingType: '',
    });

    function handleChangePayment(e){
        setPaymentData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    return (
        <div>
            <section>
                {step === 1 ? <DetailsForm detailsData={detailsData} handleChange={handleChangeDetails} /> : <DetailsData detailsData={detailsData}/>}
            </section>
            <section>
                {step === 1 && <p>Método de envío</p>}
                {step === 2 && <ShippingMethodForm shippingData={shippingData} handleChange={handleChange}/>}
                {step === 3 && <ShippingMethodData data={shippingData}/>}
            </section>
            <section>
                {step === 3 ? <PaymentForm data={paymentData} handleChange={handleChangePayment} /> : <p>Pago</p>}
            </section>
        </div>
    )
}

export default Form;