function RenderingListOfObjects(){
    const products = [
        {id: 1, name: "Laptop", price: 500},
        {id: 2, name: "phone", price: 200},
        {id: 3, name: "modem", price: 50},
        {id: 4, name: "Earphones", price: 10},
    ];
    const productList = products.map((product) => (
        <h3 key={product.id}>
            {product.name}: ${product.price}
        </h3>
    ));
    return <div>{productList}</div>
}
export default RenderingListOfObjects;