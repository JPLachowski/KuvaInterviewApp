import "./App.css";
import { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";

function App() {
  const axios = require("axios");
  const baseURL = "http://localhost:7071";
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //const [isError, setIsError] = useState(false);
  //const [initialState, setInitialState] = useState;
  //const [meta, setMeta] = useState([]);


  //TODO: API functions (more to be added) should be in their own file!
  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        setImages(response.data.scanResults);
        infoList(response.data)// added infolist and the response data
        //Might need function for meta data display
        console.log(response);
      })
      .catch(function (error) {
        //TODO: this should display an error in the UI!
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  ////
  //useEffect(() => {
  //  getEvents();
  //}, [isError]);
  // if(!initialState) return null;
  ////
  //After this you could have return where you have a return of the error that is going on
  //Probably good idea to ahve in in another file so that it will be clearer and easy to add
  //more things

  return (
    //TODO: This code should be factored out into multiple files
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <div
        // Styles can be defined in a seperate file using mui useStyle
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "85%",
          height: "100%",
        }}
      >
        {/*This button looks at Previous Image
        //Does not equal zero for image index
        */}
        <button type="button" onClick={() => setCurrentImageIndex((prevImage) => 
        (currentImageIndex === 0? currentImageIndex : currentImageIndex - 1 ))}>
          Previous Image
        </button>
        
        
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div> {images.length} total images </div>
            <div> Index: {currentImageIndex} </div>
          </div>
          {images.length > 0 && <img src={images[currentImageIndex].jpg} />}
          {images[currentImageIndex]?.createdOn && (
            <div> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
          )}


          {/* Finish adding image metadata!
          //get is display ID, Confidence Levels, Number of detections and noise floor metric
            */}
          <div class = "ImageMetaData" > Image Metadata {images[currentImageIndex]?.id} </div>
          <div class = "ConfidenceLevels" > Confidence Levels {images[currentImageIndex]?.overallConf} </div>
          <div class = "NumberOfDetections"> Number of Detections {images[currentImageIndex]?.detectionsList.length} </div>
          <div class = "NoiseFloorMetric"> Noise Floor Metric {images[currentImageIndex]?.noiseFloorMetric} </div>
        </div></div>


        {/* Done this button will go to the next image when clicked  
         //when button is clicked will run function looks at what image we are currently at
         //then it adds one
        */}
        <button type="button" onClick={() => setCurrentImageIndex((prevImage) => currentImageIndex === 0? currentImageIndex 
          : currentImageIndex + 1)}>Next Image
        </button>
      </div>
    //</div>
  );
}
  
export default App;
