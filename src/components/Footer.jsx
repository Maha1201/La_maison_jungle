import { useState } from 'react'
import React from 'react';

function Footer() {
    const [inputValue, setInputValue] = useState('Adresse mail')

    // Vérifie qu'il y ait bien un @ dans le mail après avoir un-focus l'input
    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert(`Le mail n'est pas valide`)
        }
    }

    return (
        <div>

            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
            />

            <button onClick={() => handleBlur()}>Envoyer</button>

        </div>
    )
}

export default Footer