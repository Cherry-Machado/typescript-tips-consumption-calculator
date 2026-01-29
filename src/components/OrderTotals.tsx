import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react";


type OrderTotalsProps = {
  order: OrderItem[]
}

export default function OrderTotals( { order }: OrderTotalsProps ) {

    // Calculate subtotal using useMemo for performance optimization
    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order]);

  return (
    <>
        <div className="space-y-3">
            <h2 className='font-black text-2xl'>Totals and Tips</h2>
            <p>Subtotal amount: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Suggested Tip Amounts: {''}
                <span className="font-bold">10%: $0</span>
                <span className="font-bold">15%: $0</span>
                <span className="font-bold">20%: $0</span>
            </p>

            <p>Total with Tip: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>

        <button>
            Complete Order
        </button>
    </>
  )
}
