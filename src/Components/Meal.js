import React, { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

const Meal = () => {
  const [food, setFood] = useState([]);
  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.meals);
    setFood(data.meals);
  };
  useEffect(() => {
    fetchFood();
  }, []);
  return (
    <>
      <section className="meals">
        {food.map((f) => {
          const { idMeal, strMeal, strInstructions, strMealThumb } = f;
          return (
            <article key={idMeal}>
              <div>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div>
                <h3>How To Cook</h3>
                <p>{strInstructions}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Meal;
