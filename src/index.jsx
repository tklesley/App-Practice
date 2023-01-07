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
  description: `You find yourself in a room.  There is a door to your right and a door in front of you.  Neither one are locked.`,
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
  description: `You find yourself in a room.  There is a door to your right and a door behind you.  Neither one are locked.`,
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
  description: `You find yourself in a room.  There is a door to your left and a door behind you.  Neither one are locked.`,
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
  description: `You find yourself in a room.  There is a door to your left and a door in front of you.  Neither one are locked.`,
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
  let cridMove = this.state.currentRoomID;
  if (direction === "north") {
    if (cridMove.north === null) {
      console.log(`Cannot move ${direction}.`);
      return;
    } else {
      console.log(`Moving ${direction}`);
      this.setState({ currentRoomID: eval(cridMove.north) }, () => {
        cridMove = this.state.currentRoomID;
        console.log(cridMove.roomID);
        const currentRoomName = cridMove.roomName;
        const currentRoomDescription = cridMove.description;
        this.setState({
        roomName: currentRoomName,
        roomDescription: currentRoomDescription,
        });
      })
      return;
    };
  } else if (direction === "south") {
    if (cridMove.south === null) {
      console.log(`Cannot move ${direction}.`);
      return;
    } else {
      console.log(`Moving ${direction}`);
      this.setState({ currentRoomID: eval(cridMove.south) }, () => {
        cridMove = this.state.currentRoomID;
        console.log(cridMove.roomID);
        const currentRoomName = cridMove.roomName;
        const currentRoomDescription = cridMove.description;
        this.setState({
        roomName: currentRoomName,
        roomDescription: currentRoomDescription,
        });
      })
      return;
    };
  } else if (direction === "east") {
    if (cridMove.east === null) {
      console.log(`Cannot move ${direction}.`);
      return;
    } else {
      console.log(`Moving ${direction}`);
      this.setState({ currentRoomID: eval(cridMove.east) }, () => {
        cridMove = this.state.currentRoomID;
        console.log(cridMove.roomID);
        const currentRoomName = cridMove.roomName;
        const currentRoomDescription = cridMove.description;
        this.setState({
        roomName: currentRoomName,
        roomDescription: currentRoomDescription,
        });
      })
      return;
    };
  } else if (direction === "west") {
    if (cridMove.west === null) {
      console.log(`Cannot move ${direction}.`);
      return;
    } else {
      console.log(`Moving ${direction}`);
      this.setState({ currentRoomID: eval(cridMove.west) }, () => {
        cridMove = this.state.currentRoomID;
        console.log(cridMove.roomID);
        const currentRoomName = cridMove.roomName;
        const currentRoomDescription = cridMove.description;
        this.setState({
        roomName: currentRoomName,
        roomDescription: currentRoomDescription,
        });
      })
      return;
    };
  }
};

/*
function setRoomState () {
  console.log("Changing room state");
  const currentRoom = this.state.currentRoomID;
  console.log("acquired current room ID")
  const currentRoomName = currentRoom.roomName;
  const currentRoomDescription = currentRoom.description;
  this.setState({
    roomName: currentRoomName,
    roomDescription: currentRoomDescription,
  });
};
*/

// --------- App -----------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "bg-dark",
      bgButton: "button-dark",
      settings: false,
      blayout: "move",
      view: "roomDesc",
      currentRoomID: room1,
      roomName: room1.roomName,
      roomDescription: room1.description,
    };
    this.handleMoveApp = handleMove.bind(this);
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
    return (
      <div className={`centering ${this.state.bg}`}>
        <div className={"page-layout " + this.state.bg}>
          <Heading />
          <Display
            bg={this.state.bg}
            view={this.state.view}
            crid={this.state.currentRoomID}
            roomName={this.state.roomName}
            roomDescription={this.state.roomDescription}
          />
          <ScrollMenu />
          <ButtonLayout
            handleMoveChild={(direction) => this.handleMoveApp(direction)}
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
          <AreaDescription
            bg={this.props.bg}
            roomName={this.props.roomName}
            roomDescription={this.props.roomDescription}
            />
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
          <button className={`main-button ${this.props.bgButton}`} id="button2" onClick={() => this.props.handleMoveChild("north")}>Up</button>
          <button className={`main-button ${this.props.bgButton}`} id="button3">Select</button>
          <button className={`main-button ${this.props.bgButton}`} id="button4" onClick={() => this.props.handleMoveChild("west")}>Left</button>
          <button className={`main-button ${this.props.bgButton}`} id="button5" onClick={() => this.props.handleMoveChild("south")}>Down</button>
          <button className={`main-button ${this.props.bgButton}`} id="button6" onClick={() => this.props.handleMoveChild("east")}>Right</button>
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
    let mapCRID = this.props.currentRoomID;
  };

  render() {

    return (
      <div className='map'>
        <div className="map-title">
          `${String(mapCRID.roomName)}`
        </div>
        Map
      </div>
    );
  };
};

class AreaDescription extends Display {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div className='area'>
        <div className={`room-title ${this.props.bg}`}>{`${this.props.roomName}`}</div>
        <div className="room-image">Room Image</div>
        <div className="room-description">{`${this.props.roomDescription}`}</div>
      </div >
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