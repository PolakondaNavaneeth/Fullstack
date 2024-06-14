import React, { useState, useRef, useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';


export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");


  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, name: props.foodItem.name, qty: qty, size: size, img: props.foodItem.img });
        return;
      } else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, price: finalPrice, name: props.foodItem.name, qty: qty, size: size, img: props.foodItem.img });
        return;
      }
      return;
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, price: finalPrice, name: props.foodItem.name, qty: qty, size: size, img: props.foodItem.img });
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '420px' }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'fill' }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className='container w-100'>
            <select className="m-2 h-100 bg-success" name="" id="" onChange={(e) => { setQty(e.target.value) }}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100 bg-success rounded' ref={priceRef} name="" id="" onChange={(e) => { setSize(e.target.value) }}>
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>{data}</option>
                )
              })}
            </select>
            <div className='d-inline h-100 fs-5'>
              ₹{finalPrice}/-
            </div>
            <hr />
            <button className="btn btn-success justify-content ms-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
