import { useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import CommentsListPage from "./pages/comments-list";
import RecipeListPage from "./pages/recipe-list";

// Rename to PascalCase (Capital first letter)
function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />, // 👈 show HomePage at /
    },{
      path: "recipe-list",
      element: <RecipeListPage />,
    },
    {
      path: "comments-list",
      element: <CommentsListPage />,
    },
  ]);

  return element;
}

function App() {
  return (
    <div>
      {/* Routes will be rendered here */}
      <CustomRoutes />
    </div>
  );
}

export default App;
