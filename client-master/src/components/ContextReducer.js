import React, { createContext, useContext, useReducer } from "react";

// Define initial state
const initialState = [];

// Create context objects
const CartStateContext = createContext(initialState);
const CartDispatchContext = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        return [...state, {id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size,img:action.img}];
    case "REMOVE":
        let newArr=[...state];
        newArr.splice(action.index, 1);
        return newArr;
    case "UPDATE":
        let arr=[...state];
        arr.find((food,index)=>{
            if(food.id===action.id){
                //console.log(food.qty,parseInt(action.qty),action.price+food.price)
                arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}
            }
            return arr
        })
        return arr
    case "DROP":
      let empArr=[]
      return empArr
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// Custom hooks to use context
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
