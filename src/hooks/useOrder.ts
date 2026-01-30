import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

// Custom hook to manage order state
export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [ tip, setTip ] = useState(0);

    const addItem = (item: MenuItem) => {

        // Check if item already exists in order
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        
        // If item exists, increase quantity
        if (itemExist) {
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
                    {...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
            setOrder(updatedOrder);
        } else {
            // If item does not exist, add to order with quantity 1
            const newItem = {...item, quantity: 1};
            setOrder([...order, newItem]);
        }
    };

    const removeItem = (id: MenuItem["id"]) => {
        // Implementation for removing an item from the order
        setOrder(order.filter(item => item.id !== id));
    };

    const placeOrder = () => {
        // Implementation for placing the order
        alert("Order placed!");
        setOrder([]); // Clear order after placing
        setTip(0);    // Reset tip after placing order
    };
    
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder    
    };
}