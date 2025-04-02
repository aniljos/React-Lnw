import { Product } from "../model/Product"
import {memo} from 'react'

{/* <ProductView data={product}/> */ }

type ProductViewProps = {
    data: Product;
    onDelete: (product: Product) => void;
    onEdit: (product: Product) => void;
}

 const ProductView = memo( function ProductViewC(props: ProductViewProps) {

    const { data, onDelete, onEdit } = props;
    console.log("rendering ProductView...", data.id);

    return (
        <div key={data.id} className="product">
            <p>Id: {data.id}</p>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>Price: {data.price}</p>
            <div>
                <button className="btn btn-warning" 
                        onClick={() => {onDelete(data)}}>Delete</button>&nbsp;
                <button className="btn btn-info" onClick={() => {onEdit(data)}}>Edit</button>
            </div>
        </div>
    )
})

export default ProductView;
