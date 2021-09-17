import Product, { IProduct } from "./Product";

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className="product-list">
            product list
        </div>
    )
}


export default ProductList