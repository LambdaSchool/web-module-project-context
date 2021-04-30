import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const updatedCart = [...cart, item]
		setCart(updatedCart);
		console.log("Added item to cart", updatedCart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
