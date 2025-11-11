import '../styles/shoppingProcessTimeline.scss';

function ShoppingProcessTimeline({step= ''}){

    return (
        <div className='timeline-container'>
            <ol>
                <li key='Your details' className={step === '1' ? 'actived' : 'disabled'}>Your details</li>
                <li key='Shipping' className={step === '2' ? 'actived' : 'disabled'}>Shipping</li>
                <li key='Payment'className={step === '3' ? 'actived' : 'disabled'}>Payment</li>
            </ol>
        </div>
    )
}

export default ShoppingProcessTimeline;