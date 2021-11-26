import React from "react";

const PaginationComponent = ({ pages, currentPage, itensPerPage, setCurrentPage }) => {

	const goToPage = (page) => {
		setCurrentPage(page);
	}

	return (
		<div className="Row">
			<span>{(currentPage * itensPerPage) + 1}-{(currentPage + 1) * (itensPerPage)} de {itensPerPage * pages}</span>
			<button
				onClick={(e) => goToPage(0)}
				disabled={currentPage == 0}
			>&#171;</button>
			<button
				onClick={(e) => goToPage(currentPage - 1)}
				disabled={currentPage == 0}
			>&lt;</button>
			<button
				onClick={(e) => goToPage(currentPage + 1)}
				disabled={currentPage == (pages - 1)}
			>&gt;</button>
			<button
				onClick={(e) => goToPage(pages - 1)}
				disabled={currentPage == (pages - 1)}
			>&#187;</button>
		</div>
	);
};

export default PaginationComponent;
