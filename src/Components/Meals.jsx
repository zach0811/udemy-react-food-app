import { useHttp } from "../hooks/useHttp";
import { MealCard } from "./MealCard";
import { Error } from "./Error";

const requestConfig = {};

export const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Meals....</p>;
  }

  if (error) {
    return <Error title="Failed To Fetch Meals" message={error} />;
  }

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
