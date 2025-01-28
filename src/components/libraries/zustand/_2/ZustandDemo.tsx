import { Button } from "@/components/ui/button"
import ChangeQtyButtons from "./ChangeQtyBtns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Cart from "@/components/libraries/zustand/_2/Cart";
import User from "@/components/libraries/zustand/_2/User";
import { useStore } from "@/store/useStore";


function ZustandDemo() {
	const showChangeQtyButtons = Math.random() < 0.5;
	const store = useStore()

	return (
		<>
			<div className="my-8">
				<h2 className="text-2xl font-bold">Store State:</h2>
				<pre>{JSON.stringify(store, null, 2)}</pre>
			</div>
			<div className="flex justify-between">
				<User />
				<Cart />
			</div>
			<h2 className="my-8 text-2xl font-bold">Products:</h2>
			<div className="space-y-2">
				<Card>
					<CardHeader>Header</CardHeader>
					<CardContent>Content</CardContent>
					<CardFooter>
						{showChangeQtyButtons ? <ChangeQtyButtons /> : (
							<Button variant={"default"} className="ml-auto">
								Add to Cart
							</Button>
						)}
					</CardFooter>
				</Card>
			</div>
		</>
	)
}


export default ZustandDemo