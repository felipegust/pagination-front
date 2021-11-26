import React from "react";

function ItemList({ itens }) {
	
	return itens.map(({ name, borough, cuisine }) => {
		return (
			<div className="Item">
				<span>{name}</span>
				<span>{borough}</span>
				<span>{cuisine}</span>
			</div>
		);
	})
}

export default ItemList;
