import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { Plus, Minus } from "lucide-react"
import { useEffect } from "react"
import { useShallow } from "zustand/shallow"

type Props = {
	productId: string
}

function ChangeQtyButtons({ productId }: Props) {
	const { getProductById, incrQty, decrQty, setTotal } = useStore(
		useShallow((state) => ({
			getProductById: state.getProductById,
			incrQty: state.incrQty,
			decrQty: state.decrQty,
			setTotal: state.setTotal
		}))
	)

	const product = getProductById(productId);

	useEffect(() => {
		const unSub = useStore.subscribe(
			(state) => state.cartProducts,
			(cartProducts) => {
				setTotal(
					cartProducts.reduce((accumulate, item) => accumulate + item.quantity * item.price, 0)
				)
			},
			{
				fireImmediately: true
			}
		)
		return unSub
	}, [setTotal])

	return (
		<>
			{
				product && (
					<div className="flex gap-4 items-center">
						<Button size="icon" onClick={() => decrQty(product.id)}>
							<Minus />
						</Button>
						<p>{product.quantity}</p>
						<Button size="icon" onClick={() => incrQty(product.id)}>
							<Plus />
						</Button>
					</div>
				)
			}

		</>
	)
}


export default ChangeQtyButtons