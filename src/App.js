import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "./components/itemList";
import PaginationSelector from "./components/paginationSelector";
import PaginationComponent from "./components/PaginationComponent";

function App() {
	const [restaurantList, setRestaurantList] = useState([])
	const [currentPage, setCurrentPage] = useState(0);
	const [itensPerPage, setItensPerPage] = useState(5);
	const [totalItens, setTotalItens] = useState(0);

	const fetchData = () => {
		fetch(`http://localhost:3000/itens?itensPerPage=${itensPerPage}&page=${currentPage}`, { method: "GET" })
			.then(response => response.json())
			.then(result => {
				setRestaurantList(result)
			})
	}

	const dataQuantity = () => {
		fetch(`http://localhost:3000/count`, { method: "GET" })
			.then(response => response.json())
			.then(result => {
				setTotalItens(result.count)
			})
	}

	useEffect(() => {
		setCurrentPage(0);
		fetchData();
	}, [itensPerPage]);

	useEffect(() => {
		fetchData()
	}, [currentPage])

	useEffect(() => {
		dataQuantity();
		fetchData();
	}, [])

	const pages = Math.ceil(totalItens / itensPerPage);

	return (
		<div className="main">
			<h2>Restaurantes</h2>

			
			<ItemList itens={restaurantList} />
			<div className={"Row"}>
				<PaginationSelector
					itensPerPage={itensPerPage}
					setItensPerPage={setItensPerPage}
				/>
				<PaginationComponent
					pages={pages}
					currentPage={currentPage}
					itensPerPage={itensPerPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}

export default App;
