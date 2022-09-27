## Interview Application Instructions

This project is a barebones version of our production application. It is a basic web page that calls a mock API and displays images from said request. At a minimum, we will be reviewing this code during your technical interview. We recommend interested applicants fork this repository and improve it in any way they see fit. You can find a list of recommended tasks below that closely mimic current Kuva projects. We understand that applicants are busy and have their own work to prioritize, so it is not necessary that you complete all the tasks. That being said, finishing at least one of them will give you a feel for the work we do! 

Have fun with it! If you find a bug, dislike the UX, or are frustrated by the file structure, change it! This should be a fun way of showcasing your frontend interests and skills. 

### Running the Project 

#### `npm start`

This command concurrently runs the app on port 3000 & a jsonserver on port 7071.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

More information about available scripts can be found [here](https://facebook.github.io/create-react-app/docs/getting-started). 

### JSON Server 

This project mimics our production application APIs using the json-server package. The mock server runs on port 7071.\
The json files contain a list of organizations (e.g. Kuva clients), a list of available cameras, and a list of gas events (this includes a *scanresults* object: an array of images and their associated metadata). You can read and write to the json files using standard HTTP Methods (GET, POST, PUT, DELETE). The project currently uses Axios to handle HTTP requests. 

More information about the server is available [here](https://www.npmjs.com/package/json-server).\
More information about our HTTP client is is available [here](https://www.npmjs.com/package/axiosr).

### Recommended Tasks

#### Right & Left Arrow Buttons 

There is currently no way of moving from one image in the list to the next! 

#### Filter Images  

Once you're able to scroll through available scans, it may be useful to filter out images that have no gas detections. Each image should have a *detectionList* field in its metadata. A simple toggle should do the trick!  

#### Display Image Metadata

Each scan has certain metadata associated with it. Examples include confidence levels (*overallConf*) and noise floor levels (*noiseFloorMetric*). Similarly, images with detections (*detectionsList*) will have metadata associated with those detections. None of this information is currently being displayed. 
 

#### Add Detection Boxes

If an image has a "detection" (gas identified by our internal algorithms), than the detection (found in *detectionsList*) will have a list of coordinates called *roicoordsList*. These are the coordinates of our "*Regions of Interest*": red boxes we draw on the image to indicate where exactly the detection was found. Draw the boxes on the image based on the coordinates provided. 

#### Navigation Bar  

The site is currently only one page! It would be nice to have a functional navigation bar that lets you see other pages (e.g. Account, Settings).\
Basic page routing can be done with [react router](https://reactrouter.com/web/guides/quick-start). 

#### Switch Selected Cameras

The jsonserver has a list of available cameras. It would be helpful to get that list in the frontend, and allow the user to select which camera they would like to see. 

#### Redux/Context  

As our projects get larger and more complex, it becomes harder to manage our application's state and make certain variables widely available. Certain tools simplify the process. Redux and React *Contexts* are two such tools. Implement either in the best way you see fit. 

More information about Redux can be found [here](https://redux.js.org/introduction/getting-started).\
More information about React Context can be found [here](https://reactjs.org/docs/context.html).


Done
- Right & Left Arrow Buttons
    -Used JavaScript HTML DOM EventListener, then looked at the current image then added one or substracted one depending on if it was left or right
- Display Image Metadata
    -looks at the images, then current image in the array, then found id,overallConfig,detectionslist.lenght,noisefloormetric in div
- Navigation Bar
    -Nav Bar needs React Router as it will become a application with multiple page routes

Needed to do
- Must: Clean file structure, styling and make everything looks pretty
- Filter Images
    -many different ways to filter images
        -filter by id
        -filter by all the different meta data that is happening  
- Redux/Context (hooks context)
    - state immutable object in js to use the state, client side database, one way data flow to make sure that data is predictable and testable. 
    - state is alot easier to use and manage with a state manager. 
    - can get complex pretty fast

- Add Detection Boxes
    -add a true of false button, use app to update the endpoint of the API so that something can display to be there
- Switch Selected Cameras 
    -Switch camera multiple different ways of doing this,
    filter by location, list of all different camera for customer, left and right button, filter based off meta data, filter based of detections or issues 

Ideas for the future 
- location of all cameras on google maps
- compare side by side cameras 
- display all camera at once(big screen)
- more meta data so that more analysis can be done 
- notes for camera, client can name cameras
- 

Big Ideas High level ideas
- compare all the data from all different clients
    - clients can we all date and see how there cameras are compared to other cameras
