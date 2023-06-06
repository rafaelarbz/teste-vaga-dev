import React from "react";
import api from './services/Api';
import Formulario from "./Formulario";
import Lista from "./Lista";

function Principal() {

    return (
        <div>
            <div>
                <Formulario />
            </div>
            <div className="mt-5">
                <Lista />
            </div>
        </div>
    );
}

export default Principal;