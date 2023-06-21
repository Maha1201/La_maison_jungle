import { useState } from 'react'
import { plantList } from '../datas/plantList'

function Categories() {
    const [cate, setCate] = useState('')

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <select value={cate} onChange={(e) => setCate(e.target.value)}>

                <option value=''>Catégorie</option>

                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}

            </select>
            <button onClick={() => setCate('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories