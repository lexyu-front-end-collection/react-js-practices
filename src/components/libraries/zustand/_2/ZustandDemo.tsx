import { Button } from "@/components/ui/button"
import ChangeQtyButtons from "./ChangeQtyBtns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Cart from "@/components/libraries/zustand/_2/Cart";
import User from "@/components/libraries/zustand/_2/User";
import { useStore } from "@/store/useStore";
import { PRODUCTS_DATA } from "@/data/carts";


function ZustandDemo() {
	// const showChangeQtyButtons = Math.random() < 0.5;

	const addProduct = useStore(state => state.add);
	const cartProducts = useStore(state => state.cartProducts);

	return (
		<>
			<div className="flex justify-between">
				<User />
				<Cart />
			</div>
			<h2 className="my-8 text-2xl font-bold">Products:</h2>
			<div className="space-y-2">
				{
					PRODUCTS_DATA.map((product) => (
						<Card key={product.id}>
							<CardHeader className="text-2xl font-bold">{product.title}</CardHeader>
							<CardContent className="text-xl">${product.price}</CardContent>
							<CardFooter>
								{
									cartProducts.find((item) => item.id === product.id) ? (
										<ChangeQtyButtons productId={product.id}></ChangeQtyButtons>
									) : (
										<Button variant={"default"} className="ml-auto"
											onClick={() => addProduct(product)}>
											Add to Cart
										</Button>
									)

								}
							</CardFooter>
						</Card>
					))
				}

			</div>
		</>
	)
}


export default ZustandDemo