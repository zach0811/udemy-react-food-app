import {Button} from './Button';
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../Components/Util/currencyFormatter";

export const MealCard = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`}></img>
        <div>
          <h1>{meal.name}</h1>
          <h3 className="meal-item-price">{currencyFormatter(meal.price)}</h3>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly onClick={handleAddMealToCart}>
            Add To Cart
          </Button>
        </p>
      </article>
    </li>
  );
};