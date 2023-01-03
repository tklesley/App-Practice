import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// --------- App -----------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "bg-dark",
      bgButton: "button-dark",
      settings: false,
    };
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

  /*
  if (this.state.bg === "bg-dark") {
    this.setState({ bgButton: "button-dark" })
  } else if (App.state.bg === "bg-classic") {
    this.setState({ bgButton: "button-classic"})
  } else {
    this.setState({ bgButton: "button-light"})
  };
  */
  
  render() {
    return (
      <div className={"page-layout " + this.state.bg}>
        <Heading />
        <Display />
        <ScrollMenu />
        <ButtonLayout />
        <Footer />
      </div>
    )
  }
}

// --------- Main Page Layout -----------

class Heading extends React.Component {
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

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "roomDesc",
    };
  };

  render() {
    if (this.state.view === "map") {
      return (
        <div className="display-container">
          <Map />
        </div>
      );
    } else if (this.state.view === "roomDesc") {
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


class ScrollMenu extends React.Component {

 render() {
  return (
    <div className="scrolling-menu-container">
      Menu
    </div>
  );
 };
};

class ButtonLayout extends App {
  constructor(props){
    super(props);
    this.state = {
      layout: "default",
      bgButton: props.bgButton,
    };
  };

 render() {
  return (
    <div className="button-container">
      <button className={"main-button " + this.state.bgButton} id="button1">1</button>
      <button className={"main-button " + this.state.bgButton} id="button2">2</button>
      <button className={"main-button " + this.state.bgButton} id="button3">3</button>
      <button className={"main-button " + this.state.bgButton} id="button4">4</button>
      <button className={"main-button " + this.state.bgButton} id="button5">5</button>
      <button className={"main-button " + this.state.bgButton} id="button6">6</button>
    </div>
  );
  };
};

class Footer extends React.Component {
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

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoomID: null,
    };
  };

  render() {
    return (
      <div className='map'>
        <div className="map-title">
          Map Title
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

// ------------ Render ----------------

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)