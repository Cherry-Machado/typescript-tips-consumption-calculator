import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react";


type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void}

export default function OrderTotals( { order, tip, placeOrder }: OrderTotalsProps ) {

    // Calculate subtotal using useMemo for performance optimization
    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);


  return (
    <>
        <div className="space-y-3">
            <h2 className='font-black text-2xl'>Totals and Tips</h2>
            <p>Subtotal amount: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Suggested Tip Amounts: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total with Tip: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}      
        >
            Complete Order
        </button>
    </>
  )
}
