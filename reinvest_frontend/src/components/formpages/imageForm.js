import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function ImageForm() {
  const { register, handleSubmit } = useForm() 

  const onSubmit = (data) => {
    console.log(data)

    axios
      .post("http://localhost:4000/img_fetch", {...data})
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form>
  );
}

export default ImageForm;