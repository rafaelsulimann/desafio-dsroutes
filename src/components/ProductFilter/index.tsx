import { useParams } from 'react-router-dom';
import * as productService from '../../services/product-service';
import './styles.scss';

export default function ProductFilter(){

    let params = useParams();
    let products = productService.findByCategory(params.categoryName);
    return (
        <div className="container product-filter-container">
            <div className="product-filter">
                {
                    products.map(product => <p>{product.name}</p>)
                }
            </div>
        </div>
    );
}