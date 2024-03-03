import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MealCard } from './MealCard';

export const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/meals'); 
        setMeals(response.data);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {meals.map((meal, index) => (
          <MealCard key={meal.id} index={index} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

    