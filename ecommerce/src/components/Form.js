import { useState } from "react";

function Form(){
    const [step,setStep] = useState(1);
    const [detailsData,setDetailsData] = useState({
        fullname: '',
        email: '',
        telephone: '',
        country: 'Uruguay',
        'street and number': '',
        'type of housing': '',
        'zip code': '',
        city: 'Montevideo',
        state: 'Departamento de Montevideo',
    })

    function handleChange(e){
        setDetailsData(prev => ({...prev,[e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        setStep(prev => prev + 1);
    }

    function handleClickEdit(e){
        e.preventDefault();
        setStep(prev => prev - 1);
    }

    function yourDetailsContent(){
        if(step === 1){
            return (
                <form onSubmit={handleSubmit}>
                    <p>Your details</p>
                    <div>
                        <label>
                            Full name
                            <input type="text" name="fullname" value={detailsData.fullname} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input type="email" name="email" value={detailsData.email} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Telephone
                            <input type="number" name="telephone" value={detailsData.telephone} onChange={handleChange} />
                        </label>
                    </div>
                    <p>Shipping adress</p>
                    <div>
                        <label>
                            Country/Region
                            <select name="country" value={detailsData.country} onChange={handleChange}>
                                <option value='Uruguay'>Uruguay</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Street/Avenue/... and Number
                            <input type="text" name="street and number" value={detailsData["street and number"]} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Piso, apartamento, escalera, etc
                            <input type="text" name="type of housing" value={detailsData["type of housing"]} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Zip code
                            <input type="number" name="zip code" value={detailsData["zip code"]} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            City
                            <select name="city" value={detailsData.city} onChange={handleChange}>
                                <option value='Montevideo'>Montevideo</option>
                                <option value='Canelones'>Canelones</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            State/Province/Region
                            <select name="state" value={detailsData.state} onChange={handleChange}>
                                <option value='Departamento de Montevideo'>Departamento de Montevideo</option>
                                <option value='Departamento de Canelones'>Departamento de Caneones</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Continuar al envio</button>
                    </div>
            </form>
            )
        } else if(step > 1){
            return (
            <>
                <p>Your details</p>
                <p>{detailsData.fullname}</p>
                <p>{detailsData.email}</p>
                <p>{detailsData.telephone}</p>
                <p>{detailsData.country}</p>
                <p>{detailsData["street and number"]}</p>
                <p>{detailsData["type of housing"]}</p>
                <p>{detailsData["zip code"]}</p>
                <p>{detailsData.city}</p>
                <p>{detailsData.state}</p>
                <button onClick={handleClickEdit}>Editar</button>
            </>
            )
        }
    }

    function shippingContent(){
        if(step === 2){
            return (
                <form>
                    <p>Shipping Method</p>
                    <label>
                        <input type="radio" />Standard Shipping 11 - 21 business days
                        <input type="radio" />Express Shipping 5 - 9 business days
                    </label>
                </form>
            )
        }
    }

    return (
        <>
            <section>
                {yourDetailsContent()}
            </section>
            <section>

            </section>
        </>
    )
}

export default Form;