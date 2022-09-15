import React, { useState } from "react";
import CakebookHeader from "./CakebookHeader";
import "./AdminPanel.css"

const AdminPanel = () => {


    // const ingredients = "100gr de harina. 50ml de leche. 30gr de pan. 250ml de miel"
    // const ingrArray = ingredients.split('.').map(e => e + '.');
    // console.log(ingrArray);

    const [newRecipeName, setNewRecipeName] = useState('');
    const [newRecipeDescription, setNewRecipeDescription] = useState('');
    const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
    const [newRecipeTags, setNewRecipeTags] = useState('');
    const [newRecipeHowTo, setNewRecipeHowTo] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {

        const splitIngredients = newRecipeIngredients.split('.').map(e => e + '.')
        const splitTags = newRecipeTags.split('. ')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newRecipeName, newRecipeDescription, splitIngredients, splitTags, newRecipeHowTo}),
        };

        fetch("adminpanel", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setMessage(res.message);
            });

        console.log('nombre', newRecipeName);
        console.log('descripcion', newRecipeDescription);
        console.log(splitIngredients);
        console.log(newRecipeHowTo);
        console.log(splitTags);
    }



    return (
        <div className="containerAdminPanel">
            <CakebookHeader />
            <div className="admin-panel">
                <div className="titleAdminPanel">
                    <label>Nombre de la receta</label>
                    <input className="recipeInfoAdminPanel" value={newRecipeName} onChange={(e) => setNewRecipeName(e.target.value)}></input>
                </div>

                <div className="titleAdminPanel">
                    <label>Breve descripción de la receta</label>
                    <input className="recipeInfoAdminPanel" value={newRecipeDescription} onChange={(e) => setNewRecipeDescription(e.target.value)}></input>
                </div>

                <div className="titleAdminPanel">
                    <label>Ingredientes</label>
                    <textarea value={newRecipeIngredients} onChange={(e) => setNewRecipeIngredients(e.target.value)}></textarea>
                </div>

                <div className="titleAdminPanel">
                    <label>Pasos para la preparación</label>
                    <textarea value={newRecipeHowTo} onChange={(e) => setNewRecipeHowTo(e.target.value)}></textarea>
                </div>

                <div className="titleAdminPanel">
                    <label>Etiquetas para filtar la receta</label>
                    <textarea value={newRecipeTags} onChange={(e) => setNewRecipeTags(e.target.value)}></textarea>
                </div>

                <div className="titleAdminPanel">
                    <button className="addRecipeAdminPanel" onClick={() => handleClick()}>Añadir receta</button>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;