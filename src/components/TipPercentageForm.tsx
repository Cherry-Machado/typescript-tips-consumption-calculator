import type { Dispatch, SetStateAction } from "react";

 // Define available tip options
 // Iam using an array of objects to represent each tip option
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

// Component to select tip percentage

export default function TipPercentageForm({ setTip, tip } : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Tip Percentage:</h3>

        <form>
            {/* Map through tipOptions to create radio buttons */}
            {tipOptions.map( tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        // Update tip state when a radio button is selected
                        onChange={ e => setTip(parseFloat(e.target.value))}
                        // Check the radio button if it matches the current tip state
                        checked={ tipOption.value === tip }
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
