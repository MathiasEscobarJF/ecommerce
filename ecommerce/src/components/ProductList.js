import ProductItem from "./ProductItem";

function ProductList({products}){
    const listProducts = products.map(p => <li key={p.title}><ProductItem {...p} /></li>);
    return (
        <div>
            <ul>
                {listProducts}
            </ul>
        </div>
    )
}

export default ProductList;