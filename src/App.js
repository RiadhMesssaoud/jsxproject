import imageInSrc from './imageInSrc.jpg';
import video from "./video.mp4";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Riadh_Messaoud</h1>
          <br />
          <img src={imageInSrc}  width = "500"/>

          <br />
          <img src="/imageInPublic.jpg" width = "500"/>
          <br />
        </div>
        <video width={500} height={500} controls>
          <source src="{video}" type = "video/mp4"  autoPlay= "true"/>
        </video>
      </div>
    </div>
  );
}

export default App;
