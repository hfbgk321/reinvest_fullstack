import axios from 'axios';
import React, {useState} from 'react';
import { DropdownButton, Dropdown, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import formData from 'form-data';

function ImageUpload () {
    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
      //e.preventDefault();
      console.log(e.img[0].name);
      axios
      .post("http://localhost:4000/img_fetch", e.img[0].name)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType = "multipart/form-data">
        <input ref={register} type="file" name="img" id = "img" />
        <button>Submit</button>
      </form>
    );
}

export default ImageUpload;