
var now = new Date;
class SignUpForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  	
  	let firstname = this.refs.FirstName.value;
  	let lastname = this.refs.LastName.value;
  	let email = this.refs.Email.value;
  	let username = this.refs.UserName.value;
  	let password = this.refs.Password.value;
  	var obj = {
  		firstname: firstname,
  		lastname: lastname,
  		email: email,
  		username: username,
  		password: password,

  	};

  	axios.post('/users/submit', obj).then(function(res) {console.log("complete")});
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
          
          <input type="text" ref='FirstName' placeholder="First Name" />
        </label>
        <label>
          
          <input type="text" ref='LastName' placeholder="Last Name" />
        </label>
        <label>
          
          <input type="text" ref='Email' placeholder="E-mail" />
        </label>
        <label>
          
          <input type="text" ref='UserName' placeholder="Username" />
        </label>
        <label>
          
          <input type="text" ref='Password' placeholder="Password" />
        </label>
        {console.log(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()))}
        
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