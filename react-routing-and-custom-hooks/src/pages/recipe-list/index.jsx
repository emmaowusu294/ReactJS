import styles from "./recipe-list.module.css";
import useFetch from "../../hooks/use-fetch";

function RecipeListPage() {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  if (loading)
    return (
      <h1 className={styles.loading}>Fetching Recipes, Please Wait!!!!</h1>
    );
  if (error)
    return (
      <h2 className={styles.noData}>Something went wrong: {error.message}</h2>
    );

  return (
    <div>
      <h1 className={styles.heading}>Recipe List Page</h1>
      <div className={styles.container}>
        {data?.recipes?.length > 0 ? (
          data.recipes.map((recipeItem) => (
            <div key={recipeItem.id} className={styles.recipeItem}>
              <h3>
                Recipe: {recipeItem.id} - {recipeItem.name}
              </h3>
              <img src={recipeItem.image} alt={recipeItem.name} />
            </div>
          ))
        ) : (
          <h2 className={styles.noData}>No data found</h2>
        )}
      </div>
    </div>
  );
}

export default RecipeListPage;
