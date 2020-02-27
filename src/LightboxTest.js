import React, { Component } from 'react'
import Lightbox from './lightbox/src/react-image-lightbox'
//import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
class LightboxTest extends Component {
    

    constructor (props){
        super(props)
        this.state = {
            photoIndex: 0,
            isOpen: false,
          };
    }

render() {
    console.log("start render")
    const { photoIndex, isOpen } = this.state;

    const images = [
        <video autoPlay="true" style={{width:"-webkit-fill-available"}} src={"https://guidex-image-storage.nyc3.digitaloceanspaces.com/videos/missouri-web-large.mp4"}/>,

       <div style={{display:"flex",width:"-webkit-fill-available",height:"-webkit-fill-available"}}>
           <img style={{margin:"auto"}} src={'https://guidex-image-storage.nyc3.digitaloceanspaces.com/general-photos/BrownEyeBW.jpg'}/> 
           </div>
      ];

    return (
        <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
          mainCustomContent ={images[photoIndex]}
          enableZoom={false}
            nextCustomContent={images[(photoIndex + 1) % images.length]}
            prevCustomContent={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>

    )
}

}
export default (LightboxTest);