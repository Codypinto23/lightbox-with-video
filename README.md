### React-Lightbox-With-Video

This is library uses the base library, React Lightbox, along with some code from andrew-giangrant to allow Lightbox to use custom items (PDFs, videos, etc..). 

This repo shows how to integrate the code into your system, without have to do a pull request on the original library


## Demo
[![Edit heuristic-khorana-gh4hn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/heuristic-khorana-gh4hn?fontsize=14&hidenavigation=1&theme=dark)

## Change this code to update images/videos shown

```
const images = [
      <video
        autoPlay="true"
        style={{ width: "-webkit-fill-available" }}
        src={
          "https://guidex-image-storage.nyc3.digitaloceanspaces.com/videos/missouri-web-large.mp4"
        }
      />,

      <div
        style={{
          display: "flex",
          width: "-webkit-fill-available",
          height: "-webkit-fill-available"
        }}
      >
        <img
          style={{ margin: "auto" }}
          src={
            "https://guidex-image-storage.nyc3.digitaloceanspaces.com/general-photos/BrownEyeBW.jpg"
          }
        />
      </div>
    ];


```
