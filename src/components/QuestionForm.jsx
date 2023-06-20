import { useState } from 'react'

function QuestionForm() {

    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi</button>
        </div>
    )

    // empêche la saisie de la lettre f
    //function checkValue(value) {
    //    const isInputError = inputValue.includes('f')
    //    if (!value.includes('f')) {
    //        setInputValue(value)
    //    }
    //}
}

export default QuestionForm