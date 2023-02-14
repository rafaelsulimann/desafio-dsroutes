import { Outlet } from "react-router-dom";
import CategoryFilterBar from "../../../components/CategoryFilterBar";
import './styles.scss';

export default function Products() {
    return (
        <main className="products">
            <section className="product-filter-bar">
                <CategoryFilterBar />
            </section>
            <section className="product-filter">
                <Outlet />
            </section>
        </main>
    );
}