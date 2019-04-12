
var now = new Date;
class SignUpForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  	let username = this.refs.UserName.value;
  	var obj = {
  		username: username,
  	};
    alert('The value is: ' + JSON.stringify(obj));
    var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	console.log(today);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SignUpForm">
        <label>
          First Name:
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          Last Name:
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          User Name:
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          Email:
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          Password:
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          Name:
          {console.log(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()))}
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

class App extends React.Component {


  //changes the state after login success
  constructor(props) {
      super(props);

      this.state = {
            child: "SignUpForm"
      };
    }

  render() {
  	console.log("EHEHRHEHEHE");
    return( 
     	<div className="sign">

     		<SignUpForm child={this.state.child}/>
     	</div>
     	
    );
  }  
};
console.log("HERE");
const reactContainer = document.getElementById("main-body");

var reactApp = ReactDOM.render(React.createElement(App),reactContainer);

window.dispatchEvent(new Event('resize'));