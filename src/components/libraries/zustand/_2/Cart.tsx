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


function Cart() {
	return (
		<>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="secondary" size="icon">
						<ShoppingCart />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="overflow-y-scroll space-y-2 w-96">
					<div className="flex gap-2 text-lg items-center">
						<h1>Cart:</h1>
						<Button variant="destructive" size="icon">
							<CircleX />
						</Button>
					</div>
					<div className="space-y-2">
						<Card className="flex flex-col" >
							<CardHeader className="flex flex-row items-center gap-2">
								<CardTitle></CardTitle>
								<Button
									variant="destructive"
								>
									<Trash2 />
								</Button>
							</CardHeader>
							<CardContent></CardContent>
							<CardFooter>
								<ChangeQtyButtons />
							</CardFooter>
						</Card>
					</div>
					<p>Total: {"total"}$</p>
					<p>Address: {"address"}</p>
				</PopoverContent>
			</Popover>
		</>
	)
}


export default Cart;