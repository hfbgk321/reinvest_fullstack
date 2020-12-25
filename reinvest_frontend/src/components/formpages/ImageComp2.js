import React, { useState } from "react";

export default function ImageComp2() {
  const [image,setImage] = useState({});

  const fileOnChange = (event) =>{
    setImage(event.target.files[0]);

  }

  const sendImage = async (event) =>{
    let formData = new FormData();
    formData.append("image",image);

    let response = await fetch('http://localhost:4000/img_fetch',{
      method:"post",
      body: formData
    })
    
      let data = await response.json();
      console.log(data);
    
  }


  return (
    <div>
      <input type="file" onChange = {fileOnChange}/>
      <button onClick ={sendImage}>Upload</button>
    </div>
  );
}