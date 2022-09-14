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

    const goToAdminLogIn = () => {
        navigate('/admin');
    }

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
            <footer className="homePageFooter">
                <button className="adminBtn" onClick={() => goToAdminLogIn()}>Panel de administrador</button>
                <p className="copyright">Cakebook &copy; 2022</p>
                <p className="copyrightText">Todas las recetas son recogidas <br/>del libro <a className="bookLink" href="https://www.amazon.es/Dulces-recetas-disfrutar-estaci%C3%B3n-ilustrados/dp/8412033426/ref=sr_1_1?adgrpid=105323427770&gclid=Cj0KCQjw94WZBhDtARIsAKxWG-_QhFNYJ2_JFDsdFsGOnPEyf0gQXD-mhJ19wB8ifX6xc6zqYUcbxisaAsdhEALw_wcB&hvadid=468714496955&hvdev=c&hvlocphy=9061041&hvnetw=g&hvqmt=e&hvrand=2267938589869631637&hvtargid=kwd-1166773571466&hydadcr=21654_1809393&keywords=dulce+todo+el+a%C3%B1o&qid=1663143137&sr=8-1">"Dulces todo el año"</a></p>
            </footer>
        </div>
    );
}

export default Home;