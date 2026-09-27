import React,{useState} from 'react';
function MyComponent(){
  const[name,setName]=useState();
  const[comment,setComment]=useState();
  const[payment,setPayment]=useState();
  const[shipping,setShipping]=useState();
  function handleShipping(){
    setShipping(event.target.value)
  }
  function handlePayment(event){
    setPayment(event.target.value)
  }
  function commentChange(event){
      setComment(event.target.value);
  }
  function update(event){
    setName(event.taget.value);}
  
  return (
    <div>
      <input value={name} onChange={update}/>
      <p>Name:{name}</p>
      <textarea value={comment} onChange={commentChange} placeholder="Write your text here"/>
      <p>Comment:{comment}</p>   
      <select value={payment} onchange={handlePayment} >
      <option value="">Select an option</option>
      <option value="Visa">Visa</option>
      <option value="mastercard">mastercard</option>
      </select>
      <p>payment:{payment}</p>
      <label >
        <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={handleShipping}/>
        Pick up
      </label>
      <label>
        <input type="radio" value ="delivery" checked={shipping==="delivery"} onChange={handleShipping}/>
        Delivery
      </label>
    </div>
  )

}
  export default MyComponent
