import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
// import QuestionForm from './QuestionForm'
import Footer from './Footer'
import { useState } from 'react'
import Categories from './Categories'

function App() {
	const [cart, updateCart] = useState([])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart />
			<ShoppingList /> */}
			{/* <QuestionForm /> */}
			{/* <Categories /> */}
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App