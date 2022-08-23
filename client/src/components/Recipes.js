import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Recipe.css";


const Recipes = () => {

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const [data, setData] = useState('');

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipeId: id }),
        };

        fetch("showrecipe", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setData(res.message);
            });

    }, [id]);

    const goToHomePage = () => {
        navigate('/');
    }

    return (<div>
        <h1>Recipes Page</h1>
        <div className="oneRecipe">
            {data ? data.map((e, i) =>
                <div key={i}>
                    <div className="recipeInfo">
                        <div><h1>{e.name}</h1></div>
                        <div><p>{e.description}</p></div>
                        <div className="container-recipeImage">
                            <img className="recipeImage" src={e.image} alt="recipeImg" />
                        </div>
                        <div className="container-ingredients">
                            <div className="ingredientsList">{e.ingredients}</div>
                        </div>
                        <div className="container-steps">
                            <div className="steps">{e.steps}</div>
                        </div>


                    </div>
                </div>) : ""}
        </div>
        <button className="btnRecipes" onClick={() => goToHomePage()}>Go back to Home Page</button>
    </div>);
}

export default Recipes;