function ListRendering(){
    const products = ["Laptops", "Phone", "Modem"];

    return (
        <div>
            {products.map((product)=>(
                <h3>{product}</h3>
            ))}
        </div>
    );
}
export default ListRendering;