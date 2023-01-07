import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


// ------------ Map Test --------------

const room1 = {
  roomID: "room1",
  roomName: "Lower Left",
  north: "room2",
  east: "room4",
  south: null,
  west: null,
  roomImage: null,
  description: "",
  firstEntry: true,
  firsfEntryDescription: "",
  visible: true,
  northKey: null,
  eastKey: null,
  southKey: null,
  westKey: null,
}

const room2 = {
  roomID: "room2",
  roomName: "Upper Left",
  north: null,
  east: "room3",
  south: "room1",
  west: null,
  roomImage: null,
  description: "",
  firstEntry: true,
  firsfEntryDescription: "",
  visible: true,
  northKey: null,
  eastKey: null,
  southKey: null,
  westKey: null,
}

const room3 = {
  roomID: "room3",
  roomName: "Upper Right",
  north: null,
  east: null,
  south: "room4",
  west: "room2",
  roomImage: null,
  description: "",
  firstEntry: true,
  firsfEntryDescription: "",
  visible: true,
  northKey: null,
  eastKey: null,
  southKey: null,
  westKey: null,
}

const room4 = {
  roomID: "room4",
  roomName: "Lower Right",
  north: "room3",
  east: null,
  south: null,
  west: "room1",
  roomImage: null,
  description: "",
  firstEntry: true,
  firsfEntryDescription: "",
  visible: true,
  northKey: null,
  eastKey: null,
  southKey: null,
  westKey: null,
}

const map1 = {
  room1: room1,
  room2: room2,
  room3: room3,
  room4: room4
}

function handleMove(direction) {
  const cardinal = ["north", "south", "east", "west"]
  for (card of cardinal) {
    if (direction === card) {
      if (this.currentRoomID.north === null) {
        console.log(`Cannot move ${direction}.`);
        return;
      } else {
        console.log(`Moving ${direction}`);
        this.setState({ currentRoomID: eval(this.state.currentRoomID.north) })
        return;
      };
    }
  }
};


// --------- App -----------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "bg-dark",
      bgButton: "button-dark",
      settings: false,
      blayout: "move",
      view: "default",
      currentRoomID: room1,
      room1: room1,
      room2: room2,
      room3: room3,
      room4: room4
    };

    handleMove = handleMove.bind(this);
    /*   
     if (this.state.bg === "bg-dark") {
       this.setState({ bgButton: "button-dark" })
     } else if (this.state.bg === "bg-classic") {
       this.setState({ bgButton: "button-classic"})
     } else {
       this.setState({ bgButton: "button-light"})
     };
    */
  };
  
  render() {
    console.log(this.state.currentRoomID);
    console.log(String(this.state.currentRoomID.roomName));
    return (
      <div className={`centering ${this.state.bg}`}>
        <div className={"page-layout " + this.state.bg}>
          <Heading />
          <Display
           view={this.state.view}
            currentRoomID={this.state.currentRoomID}
            room1={this.state.room1}
            room2={this.state.room2}
            room3={this.state.room3}
            room4={this.state.room4}
          />
          <ScrollMenu />
          <ButtonLayout
            handleMove={(direction) => this.handleMove(direction)}
            blayout={this.state.blayout}
            bgButton={this.state.bgButton}
          />
          <Footer />
        </div>
      </div>
    )
  }
};

// --------- Main Page Layout -----------

class Heading extends App {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="heading">
        Heading
      </div>
    );
  };
};

class Display extends App {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    if (this.props.view === "map") {
      return (
        <div className="display-container">
          <Map />
        </div>
      );
    } else if (this.props.view === "roomDesc") {
      return (
        <div className="display-container">
          <AreaDescription />
        </div>
      );
    }
    else {
      return (
        <div className="display-container">
          Display
        </div>
      );
    };
  };
};


class ScrollMenu extends App {

  render() {
    return (
      <div className="scrolling-menu-container">
        Menu
      </div>
    );
  };
};


class ButtonLayout extends App {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    if (this.props.blayout === "default") {
      return (
        <div className="button-container">
          <button className={`main-button ${this.props.bgButton}`} id="button1">Back</button>
          <button className={`main-button ${this.props.bgButton}`} id="button2">Up</button>
          <button className={`main-button ${this.props.bgButton}`} id="button3">Select</button>
          <button className={`main-button ${this.props.bgButton}`} id="button4">Left</button>
          <button className={`main-button ${this.props.bgButton}`} id="button5">Down</button>
          <button className={`main-button ${this.props.bgButton}`} id="button6">Right</button>
        </div>
      )
    } else if (this.props.blayout === "move") {
      return (
        <div className="button-container">
          <button className={`main-button ${this.props.bgButton}`} id="button1">Back</button>
          <button className={`main-button ${this.props.bgButton}`} id="button2" onClick={() => this.props.handleMove("north")}>Up</button>
          <button className={`main-button ${this.props.bgButton}`} id="button3">Select</button>
          <button className={`main-button ${this.props.bgButton}`} id="button4" onClick={() => this.props.handleMove("east")}>Left</button>
          <button className={`main-button ${this.props.bgButton}`} id="button5" onClick={() => this.props.handleMove("south")}>Down</button>
          <button className={`main-button ${this.props.bgButton}`} id="button6" onClick={() => this.props.handleMove("west")}>Right</button>
        </div >
      )
    } else {
      return (
        <div className="button-container">
          <button className={`main-button ${this.props.bgButton}`} id="button1">1</button>
          <button className={`main-button ${this.props.bgButton}`} id="button2">2</button>
          <button className={`main-button ${this.props.bgButton}`} id="button3">3</button>
          <button className={`main-button ${this.props.bgButton}`} id="button4">4</button>
          <button className={`main-button ${this.props.bgButton}`} id="button5">5</button>
          <button className={`main-button ${this.props.bgButton}`} id="button6">6</button>
        </div>
      )
    }
  };
};

class Footer extends App {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="footer">
        Footer
      </div>
    );
  };
};


// ------------ Display Sections ------------

class Map extends App {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  };

  render() {
    console.log(this.props.currentRoomID);
    console.log(String(this.props.currentRoomID.roomName));
    return (
      <div className='map'>
        <div className="map-title">
          `${String(this.props.currentRoomID.roomName)}`
        </div>
        Map
      </div>
    );
  };
};

class AreaDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoomID: null,
    };
  };

  render() {
    return (
      <div className='area'>
        <div className="room-title">Room Title</div>
        <div className="room-image">Room Image</div>
        <div className="room-description">Room Description</div>
      </div>
    );
  };
};

// ------------ Items -------------

/*
class Room extends Map {
  constructor(props) {
    super(props);
    this.state = {
      roomID: null,
      north: null,
      east: null,
      south: null,
      west: null,
      roomImage: null,
      description: "",
      firstEntry: true,
      firsfEntryDescription: "",
      visible: true,
      northKey: null,
      eastKey: null,
      southKey: null,
      westKey: null,
    }
  }; 
}
*/


// ------------ Render ----------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)