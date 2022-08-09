import { useNavigate, useParams } from "react-router-dom";
import list from "../helpers/list";

const Home = () => {

    const { recipes } = list;
    const { id } = useParams();
    

    const navigate = useNavigate();

    const goToRecipesPage = (id) => {
        navigate(`/recipes/${id}`);
        console.log(id)
    }


    return (
        <div>
            <h1>Home Page</h1>
            <div className="recipesList">
                {recipes.map((e, i) =>
                    <div key={i}>
                        <div>
                            <h1>{e.name}</h1>
                            <p>{e.description}</p>
                        </div>

                        <button id={e.id} onClick={(e) => goToRecipesPage(e.target.id)}>Ver receta completa</button>
                    </div>
                )}
            </div>
        </div>);
}

export default Home;