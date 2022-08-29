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
                                <img className="recipeImg" src={e.image} alt="recipeImage" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)} />
                            </div>

                            <div className="container-recipeName">
                                <h2 className="recipeName">{e.name}</h2>
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
            <div className="header">
                <h2 className="cakebook" onClick={() => window.location.reload()}>Cakebook</h2>

                <div className="container-filterByIngredient">
                    <select className="filterByIngredient"  value={filter} onChange={(e) => setFilter(e.target.value)} onKeyPress={() => filter === '' ? window.location.reload() : getFilter()}>
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
                    <button className="searchBtn" onClick={() => filter === '' ? window.location.reload() : getFilter()}>Buscar</button>
                </div>
            </div>


            <div className="list">
                {data ? data.map((e, i) =>
                    <div key={i}>

                        <div className="listData">
                            {/* <div><p>{e.description}</p></div> */}
                            <div className="container-recipeImg">
                                <img className="recipeImg" src={e.image} alt="recipeImage" id={e._id} onClick={(e) => goToRecipesPage(e.target.id)} />
                            </div>

                            <div className="container-recipeName">
                                <h2 className="recipeName">{e.name}</h2>
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