import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Manchurian Dry",
    description:
      "Fried vegetable balls are coated with thick, flavorful sauce.",
    price: 230,
  },
  {
    id: "m2",
    name: "Garlic Naan",
    description: "Indian Bread with garlic base",
    price: 85,
  },
  {
    id: "m3",
    name: "Paneer Tikka",
    description:
      "Cottage cheese cubes are marinated in a spiced yogurt-based marinade",
    price: 270,
  },
  {
    id: "m4",
    name: "Paneer Butter Masala",
    description: "Butter paneer is a rich & creamy curry ",
    price: 385,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
