import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem({ id, cover, name, water, light }) {

	return <div>
		
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>

			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}

			<div><CareScale careType='water' scaleValue={water} /></div>
			<div><CareScale careType='light' scaleValue={light} /></div>

		</li>
	</div>
}

function handleClick(e) {
	alert(e)
}

export default PlantItem