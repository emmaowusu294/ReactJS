import './App.css';
import CommentsList from './pages/comments';
import RecipeList from './pages/recipes';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React Routing and Custom Hooks</h1>
      <div>
        <Link to= {'/recipe-list'}>Alternative Way to recipe</Link>
      </div>
      {/* <button
        onClick={() => navigate('/recipe-list')}
        style={{ margin: '10px' }}
      >
        Navigate To Recipe List Page
      </button>
      <button onClick={() => navigate('/comments-list')}>
        Navigate To Comments List Page
      </button> */}
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
      </Routes>
    </div>
  );
}

export default App;
