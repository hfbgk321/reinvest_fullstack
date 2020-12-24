import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';



function ImageUpload () {
    return (
        <DropdownButton title="Press Me!">
            <Dropdown.Item> Upload Image </Dropdown.Item>
        </DropdownButton>
    );
}

export default ImageUpload;