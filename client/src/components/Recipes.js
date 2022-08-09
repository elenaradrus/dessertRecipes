import { useNavigate } from "react-router-dom";


const Recipes = () => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    }

    return ( <div>
        <h1>Recipes Page</h1>
        <button onClick={() => goToHomePage()}>Go back to Home Page</button>
    </div> );
}
 
export default Recipes;