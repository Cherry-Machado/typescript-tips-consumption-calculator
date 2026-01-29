export default function OrderTotals() {
  return (
    <>
        <div className="space-y-3">
            <h2 className='font-black text-2xl'>Totals and Tips</h2>
            <p>Subtotal amount: {''}
                <span className="font-bold">$0</span>
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
