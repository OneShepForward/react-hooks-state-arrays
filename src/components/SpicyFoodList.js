import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisines, setCuisine] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood]
    // setFoods(foods => foods.push(newFood))
    setFoods(newFoodArray)
  }

  // function handleDelete(e) {
  //   e.target.remove()
  // }

  // function handleDelete(id) {
  //   console.log(id)
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }

  function handleHeat (id) {
    console.log(id);
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {...food,
        heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    })
    setFoods(newFoodArray);
  }


  function renderSpicyFood() {
    return foodsToDisplay.map((food) => {
      return (
      // <li key={food.id} onClick={() => handleDelete(food.id)}>
      <li key={food.id} onClick={() => handleHeat(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
      )
    })
  }

function filterCuisine(e) {
  setCuisine(e.target.value);
}

    const foodsToDisplay = foods.filter((food) =>{
      if (cuisines === "All") {
        return true;
      } else {
        return food.cuisine === cuisines;
      }
    })
    // //  cuisines = e.target.value
    //  console.log(e.target.value)
    //   if (cuisines === "All") {
    //     console.log("cuisines set to All")
    //     return cuisines;
    //   } else if (cuisines === e.target.value) {
    //     // console.log("cuisines set to " e.target.value)
    //     const newCuisineArray = foods.filter(food => food.cuisine === e.target.value)
    //     setCuisine(newCuisineArray);
    //   }
    //   else {
    //     console.log("filter not set")
    //   }
    // }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{renderSpicyFood()}</ul>
      <br />
      <select name="filter" onChange={filterCuisine}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
</select>
    </div>
  );
}

export default SpicyFoodList;
