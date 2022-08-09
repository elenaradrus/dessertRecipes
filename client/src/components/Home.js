import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const goToRecipesPage = () => {
        navigate('/recipes');
    }


    return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => goToRecipesPage()}>Go to Recipes</button>
    </div>);
}

export default Home;