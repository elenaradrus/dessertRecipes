import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css"

const Home = () => {

    const { id } = useParams();
    const [data, setData] = useState('');
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
        console.log(id)
    }


    return (
        <div>
            <h1>Home Page</h1>
            <div className="list">
                {data ? data.map((e, i) =>
                    <div key={i}>
                        <div className="listData">
                            <div><h1>{e.name}</h1></div>
                            <div><p>{e.description}</p></div>
                            <div><img className="recipeImg" src={e.image} alt="cocaMalfeta"/></div> 
                        </div>

                        <button id={e._id} onClick={(e) => goToRecipesPage(e.target.id)}>Ver receta completa</button>
                    </div>) : ""}
            </div>
        </div>);
}

export default Home;