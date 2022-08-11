import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


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

    return ( <div>
        <h1>Recipes Page</h1>
        <div className="oneRecipe">
                {data ? data.map((e, i) =>
                    <div key={i}>
                        <div className="listData">
                            <div><h1>{e.name}</h1></div>
                            <div><p>{e.description}</p></div>
                            <div><img className="recipeImg" src={e.image} alt="cocaMalfeta"/></div> 
                        </div>
                    </div>) : ""}
            </div>
        <button onClick={() => goToHomePage()}>Go back to Home Page</button>
    </div> );
}
 
export default Recipes;