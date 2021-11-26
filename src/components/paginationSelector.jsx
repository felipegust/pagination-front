import React from "react";
import "../App.css";

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
	return (
		<div className="Row">
			Itens por página:
			<select
				value={itensPerPage}
				onChange={(e) => setItensPerPage(Number(e.target.value))}
			>
				<option value={2}>2</option>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={20}>20</option>
			</select>
		</div>
	);
};

export default PaginationSelector;
