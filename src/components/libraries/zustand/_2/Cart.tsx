import { CircleX, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import ChangeQtyButtons from '@/components/libraries/zustand/_2/ChangeQtyBtns';
import { useStore } from '@/store/useStore';
import { useShallow } from 'zustand/shallow';


function Cart() {
	const { reset, cartProducts, remove, total, address } = useStore(
		useShallow((state) => ({
			reset: state.reset,
			cartProducts: state.cartProducts,
			remove: state.remove,
			total: state.total,
			address: state.address
		}))
	)

	return (
		<div className=''>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="secondary" size="icon">
						<ShoppingCart />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="overflow-y-scroll space-y-2">
					<div className="flex gap-4 text-lg justify-between">
						<h2 className="text-2xl font-bold">Cart:</h2>
						<Button variant="destructive" size="icon" onClick={reset}>
							<CircleX />
						</Button>
					</div>
					<div className="space-y-2">
						{
							cartProducts.map((product) => (
								<Card className="flex flex-col" key={product.id}>
									<CardHeader className="flex flex-row items-center gap-2">
										<CardTitle>{product.title}</CardTitle>
										<Button
											variant="destructive"
											onClick={() => remove(product.id)}
										>
											<Trash2 />
										</Button>
									</CardHeader>
									<CardContent></CardContent>
									<CardFooter>
										<ChangeQtyButtons productId={product.id} />
									</CardFooter>
								</Card>
							))
						}

					</div>
					<p>Total: {total}$</p>
					<p>Address: {address}</p>
				</PopoverContent>
			</Popover>
		</div>
	)
}


export default Cart;