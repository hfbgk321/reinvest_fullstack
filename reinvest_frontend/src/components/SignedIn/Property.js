import React from 'react'

const Property = (props) => {
  const {img,address,price} = props;
  const clickHandler = (e) =>{
    console.log('clicked');

  }

return (
    <article className="book" onMouseOver={()=> {
      console.log(price);
    }}>
     <img src={img} height="200px" onClick={clickHandler}></img>
      <h1>{address}</h1>
      <h4>{price}</h4>
      
      </article>
  )
}

export default Property
