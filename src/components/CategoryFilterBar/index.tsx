import { NavLink } from "react-router-dom";
import * as categoryService from '../../services/category-service';
import './styles.scss';

export default function CategoryFilterBar() {
  let categories = categoryService.getCategories();
  return (
    <div className="container category-filter-bar-container">
      <div className="category-filter-bar">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }: any) =>
              isActive ? "category-filter-bar-link active" : "category-filter-bar-link non-active"
            }
            to={`/products/${category.name.toLowerCase()}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
