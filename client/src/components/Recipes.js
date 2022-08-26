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
        <div className="oneRecipe">
            <div className="header">
                <h2 className="cakebook">Cakebook</h2>
                <button className="btnRecipes" onClick={() => goToHomePage()}>Volver a recetas</button>
            </div>
            {data ? data.map((e, i) =>
                <div key={i}>
                    <div className="recipeInfo">

                        <div className="recipeTitle">
                            <h1>{e.name}</h1>
                        </div>

                        <div>
                            <p>{e.description}</p>
                        </div>

                        <div className="mainContainer">
                            <div className="container-recipeImage">
                                <img className="recipeImage" src={e.image} alt="recipeImg" />
                            </div>

                            <div className="container-recipeHowTo">
                                <div className="container-ingredients">
                                    <h3 className="ingredients">Ingredientes</h3>
                                    <div className="ingredientsList">{e.ingredients}</div>
                                </div>

                                <div className="container-steps">
                                    <h3 className="howTo">Preparación</h3>
                                    <div className="steps">{e.steps}</div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>) : ""}
        </div>
    </div>);
}

export default Recipes;