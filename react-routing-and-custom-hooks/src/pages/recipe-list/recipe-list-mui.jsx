import useFetch from "../../hooks/use-fetch";
import { Card, CardContent, Typography, Skeleton, CardMedia } from "@mui/material";
import styles from "./recipe-list-mui.module.css"; // Assuming you're using CSS Modules

function RecipeListPageMui() {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Recipe List Page</h1>

      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className={styles.card}>
              <Skeleton variant="rectangular" height={200} animation="wave" />
              <CardContent>
                <Skeleton width="80%" height={30} animation="wave" />
                <Skeleton width="60%" height={20} animation="wave" />
              </CardContent>
            </Card>
          ))
        : data?.recipes?.length > 0
        ? data.recipes.map((recipeItem) => (
            <Card key={recipeItem.id} className={styles.card}>
              <CardMedia
                component="img"
                height="200"
                image={recipeItem.image}
                alt={recipeItem.name}
              />
              <CardContent>
                <Typography variant="h6" color="text.primary">
                  Recipe: {recipeItem.id}
                </Typography>
                <Typography variant="body2">{recipeItem.name}</Typography>
              </CardContent>
            </Card>
          ))
        : !loading && <h2>No data found</h2>}
    </div>
  );
}

export default RecipeListPageMui;
