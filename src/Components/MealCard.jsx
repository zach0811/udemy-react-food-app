import {Button} from './Button';

export const MealCard = ({meal, text}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    
    return (
        <li className='meal-item' >
            <article>
        <img src={`http://localhost:3000/${meal.image}`}></img>
        <div>
        <h1>{meal.name}</h1>
        <h3 className='meal-item-price'>{formatter.format(meal.price)}</h3>
        <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'><Button>Add To Cart</Button></p>
        
        </article>
        </li>
    );
    }