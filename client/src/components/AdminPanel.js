import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CakebookHeader from "./CakebookHeader";
import "./AdminPanel.css"

const AdminPanel = () => {
    return (
        <div className="containerAdminPanel">
            <CakebookHeader />
            <div className="admin-panel">
                <div>
                    <label>Nombre receta</label>
                    <input></input>
                </div>

                <div>
                    <label>Breve descripción de la receta</label>
                    <input></input>
                </div>

                <div>
                    <label>Ingredientes</label>
                    <textarea></textarea>
                </div>

                <div>
                    <label>Pasos para preparación</label>
                    <textarea></textarea>
                </div>

                <div>
                    <label>Etiquetas de la receta</label>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;