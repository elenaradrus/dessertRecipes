import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css"

const Home = () => {

    const { id } = useParams();
    const [data, setData] = useState();
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        fetch("recipeslist")
            .then((response) => response.json())
            .then((res) => {
                setData(res.message);
            });

    }, []);


    const goToRecipesPage = (id) => {
        navigate(`/recipes/${id}`);
    }

    // const goToHomePage = () => {
    //     navigate('/');
    // }

    const getFilter = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipeTag: filter }),
        };

        fetch("filterrecipe", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setData(res.message);
            });

        console.log(filter);

        return (
            <div className="list">
                {data ? data.map((e, i) =>
                    <div key={i}>

                        <div className="listData">
                            {/* <div><p>{e.description}</p></div> */}
                            <div className="container-recipeImg">
                                <img className="recipeImg" src={e.image} alt="recipeImage" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)}/>
                            </div>

                            <div className="recipeName">
                                <h2>{e.name}</h2>
                            </div>

                            {/* <div className="container-seeRecipeBtn">
                                <button className="seeRecipeBtn" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)}>Ver receta completa</button>
                            </div> */}

                        </div>
                    </div>) : ""}
            </div>
        )

    }


    return (
        <div>
            <div>
                <p>Busca recetas por ingredientes</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option></option>
                    <option>galleta</option>
                    <option>mantequilla</option>
                    <option>queso</option>
                    <option>huevo</option>
                    <option>harina</option>
                    <option>fruta</option>
                    <option>limón</option>
                    <option>bicarbonato</option>
                    <option>yogur</option>
                    <option>semillas</option>
                    <option>hojaldre</option>
                    <option>cacahuete</option>
                    <option>chocolate</option>
                </select>
                <button onClick={() => filter === '' ? window.location.reload() : getFilter()}>Buscar</button>
            </div>

            <div className="list">
                {data ? data.map((e, i) =>
                    <div key={i}>
                        <div className="listData">
                            {/* <div><p>{e.description}</p></div> */}
                            <div className="container-recipeImg">
                                <img className="recipeImg" src={e.image} alt="recipeImage" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)}/>
                            </div>

                            <div className="recipeName">
                                <h2>{e.name}</h2>
                            </div>

                            {/* <div className="container-seeRecipeBtn">
                                <button className="seeRecipeBtn" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)}>Ver receta completa</button>
                            </div> */}
                        </div>

                    </div>) : ""}
            </div>
        </div>);
}

export default Home;