import ProductList from "./ProductList";

function OrderSummary({products,shipping}){

    const subtotalPrice = products.reduce((result,p) => result + p.price, 0);
    const totalPrice = subtotalPrice + shipping.price;

    return (
        <article>
            <div>
                <p>Tu carrito</p>
                <p>{products.length} Artículos</p>
            </div>
            <div>
                <ProductList products={products} />
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>${subtotalPrice}</td>
                        </tr>
                        <tr>
                            <td>Envío - {shipping.type}</td>
                            <td>${shipping.price}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>${totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </article>
    );
}

export default OrderSummary;