import { useState } from 'react'

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
]

const Item = ({ item }) => {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	)
}

const Logo = () => {
	return <h1>🌴 Far Away 💼</h1>
}

const Form = () => {
	const [description, setDescription] = useState('')
	const [quantity, setQuantity] = useState(1)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!description) return
		const newItem = { description, quantity, packed: false, id: Date.now() }

		handleAddItems(newItem)
		console.log(newItem)

		setDescription('')
		setQuantity(1)
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	)
}

const PackingList = ({ items }) => {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	)
}

const Stats = () => {
	return (
		<footer className="stats">
			<em>You have X items on your list, and you already packed X (x%)</em>
		</footer>
	)
}

const App = () => {
	const [items, setItems] = useState([])
	const handleAddItems = (item) => {
		setItems((items) => [...items, item])
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems />
			<PackingList items={ite} />
			<Stats />
		</div>
	)
}

export default App
