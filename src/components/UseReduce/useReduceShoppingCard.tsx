import React, { useReducer } from "react";

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREMENT_ITEM"; payload: number }
  | { type: "DECREMENT_ITEM"; payload: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    case "INCREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "DECREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

const useReduceShoppingCard = () => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = () => {
    const newItem = { id: Date.now(), name: "Item A", quantity: 1 };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch({ type: "INCREMENT_ITEM", payload: item.id })}>
              +
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT_ITEM", payload: item.id })}>
              -
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default useReduceShoppingCard;