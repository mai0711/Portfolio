import React from 'react'
import "./Box.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Box(props) {

  const githubLink = () => {
    window.open(props.githubLink, '_blank');
  };

  return (
    <div className='cardContainer'>
        <Card className='cardContent'>
          <div className="flexContainer">
            <div className="imgContainer">
              <Card.Img
                style={{width: "70%", height:"30%", marginTop:"5%", marginBottom:"5%"}}
                variant="top" src={props.imageUrl}
              />
            </div>
            <div className="textContainer">
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                <Button
                  style={{backgroundColor: "pink", fontSize:"30%"}}
                  variant="light"
                  onClick={githubLink}
                >
                  GitHub
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
    </div>
  )
}
