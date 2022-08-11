import { useNavigate, useParams } from "react-router-dom";


const Recipes = () => {

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    }

    return ( <div>
        <h1>Recipes Page {id}</h1>
        <button onClick={() => goToHomePage()}>Go back to Home Page</button>
    </div> );
}
 
export default Recipes;