

class App extends React.Component {


  //changes the state after login success
  

  render() {
  	console.log("EHEHRHEHEHE");
    return( 
     	React.createElement('div',{className: 'all-info'}, "HELLO")
    );
  }  
};
console.log("HERE");
const reactContainer = document.getElementById("main-body");

var reactApp = ReactDOM.render(React.createElement(App),reactContainer);

window.dispatchEvent(new Event('resize'));