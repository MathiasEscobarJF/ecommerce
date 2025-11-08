import '../styles/shoppingProcessTimeline.scss';

function ShoppingProcessTimeline(){
    return (
        <div className='timeline-container'>
            <ol>
                <li key='Your details'>Your details</li>
                <li key='Shipping'>Shipping</li>
                <li key='Payment'>Payment</li>
            </ol>
        </div>
    )
}

export default ShoppingProcessTimeline;