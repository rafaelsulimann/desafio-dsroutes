import * as productService from '../../../../services/product-service';
import './styles.scss';

export default function ProductsIndex(){
    let products = productService.getProducts();
    return(
        <div className="container products-index-container">
            <div className="products-index">
                {
                    products.map(product => <p>{product.name}</p>)
                }
            </div>
        </div>
    );
}