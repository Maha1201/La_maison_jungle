import { plantList } from '../datas/plantList'
// import CareScale from './CareScale'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div>
			<Categories/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) =>
					//!Categories.cate || Categories.cate === category ? 
					(
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) //: null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList