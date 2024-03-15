import {
	Container,
	Background,
	Content,
	Heading,
	Description,
	Button,
	ButtonsContainer,
	InfoContainer,
	MadeBy
} from "./components/Body"
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react"

function App() {

	const [products, setProducts] = useState([]);
	const [showAvailable, setShowAvailable] = useState(false);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
			.then(response => response.json())
			.then(data => setProducts(data))
			.catch(error => console.error('Error fetching products:', error));
	}, []);

	const handleShowAll = () => {
		setShowAvailable(false);
	};

	const handleShowAvailable = () => {
		setShowAvailable(true);
	};

	const filteredProducts = showAvailable ? products.filter(product => product.available) : products;

	return (
		<>
			<Container>
				<Background />
				<Content>
					<Heading>
						Our Collection
					</Heading>

					<Description>
						Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
					</Description>

					<ButtonsContainer>
						<Button
							onClick={handleShowAll}
							style={{ backgroundColor: showAvailable ? 'initial' : '#6F757C' }}
						>
							All Products
						</Button>
						<Button
							onClick={handleShowAvailable}
							style={{ backgroundColor: showAvailable ? '#6F757C' : 'initial' }}
						>
							Available Now
						</Button>
					</ButtonsContainer>

					<InfoContainer>
						{filteredProducts.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</InfoContainer>
					<MadeBy>
						<p>Made By:</p>
						<a 
							href="https://github.com/ulisesrojas70" 
							target="_blank"
							style={{color: '#BEE3CC'}}
						>
							Ulises Rojas
						</a>
					</MadeBy>
				</Content>
			</Container>
		</>
	)
}

export default App
