import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from './images/img-9.jpg'
import img2 from './images/img-8.jpg'
import img3 from './images/img-4.jpg'
import { Container, Row, Col, Image } from "react-bootstrap";


function Cards() {
  return (
    <div>
     
      <Container className='cardsContainer'>
        <Row>
          <Col>
          <CardItem
              src={img1}
              text='Data Analysis Software'
              label='Software'
              path='/signedin'
            />

          </Col>
          <Col>
          <CardItem
              src={img2}
              text='Tons of Visual Graphs'
              label='Graphical Data'
              path='/signedin'
            />
          </Col>
          <Col>
          <CardItem
              src={img3}
              text='Less Paperwork'
              label='Effortless'
              path='/signedin'
            />
          </Col>
          
        </Row>

      </Container>
          
        
            
            
          
          
            
           
           
          
       
    </div>
  );
}

export default Cards;
