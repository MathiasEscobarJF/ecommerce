function ProductItem({imageUrl,title,quantity,size,price}){
    return (
        <article>
            <figure>
                <img src={imageUrl} alt={title} />
            </figure>
            <div>
                <p>title</p>
                <p>Cantidad: {quantity}</p>
                <p>Talla: {size}</p>
                <p>${price}</p>
            </div>
        </article>
    );
}

export default ProductItem;