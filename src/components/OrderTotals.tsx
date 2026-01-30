import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react";


type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void}

// Component to display order totals and complete order button

export default function OrderTotals( { order, tip, placeOrder }: OrderTotalsProps ) {

    // Calculate subtotal using useMemo for performance optimization
    // This recalculates only when 'order' changes
    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order]);

    // Calculate tip amount based on subtotal and selected tip percentage
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

    // Calculate total amount (subtotal + tip)
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
            // Disable button if there is no total
            onClick={placeOrder}      
        >
            Complete Order
        </button>
    </>
  )
}
