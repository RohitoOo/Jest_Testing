
import React, {Component} from 'react';
// import { Grid , Col , Row , Image, Thumbnail} from 'react-bootstrap/lib';
import img1 from './images/img1.JPG'
import img2 from './images/img2.JPG'
import img3 from './images/img3.JPG'
import './images/images.css'

class Images extends Component {

  render() {
    return (
      <div style={{
        padding : '10px' ,
        borderRadius : '10px'
      }}>

        <img src={img2} alt="images"  ></img>
        <img src={img1} alt="images"></img>
        <img src={img3} alt="images"></img>
        <img src={img2} alt="images"></img>
        <img src={img1} alt="images"></img>
        <img src={img3} alt="images"></img>
        <img src={img2} alt="images"></img>
        <img src={img1} alt="images"></img>

      </div>
    );
  }

}

export default Images;
