import { Component } from 'react/cjs/react.production.min';
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPassword: ''
    }
  }

  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (e) => {
    e.preventDefault();
    var { txtName, txtPassword } = this.state;
    if (txtName === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({
        name: txtName,
        password: txtPassword
      }))
    }
  }

  render() {

    var nick = localStorage.getItem('user');
    if (nick !== null) {
      var { location } = this.props;
      return <Redirect to={{
        pathname: '/products',
        state: {
          from: location
        }
      }} />
    }



    return (
      <form className="col-md-6" onSubmit={this.onHandleSubmit}>&nbsp;
        <div className="mb-3">
          <h2>Dang nhap</h2>
          <hr />
          <input type="text" placeholder="name@example.com" className="form-control" name='txtName' value={this.state.txtName} onChange={this.onHandleChange} />
          <label>Email address</label>
        </div>
        <div >
          <input type="password" placeholder="Password" className="form-control" name='txtPassword' value={this.state.txtPassword} onChange={this.onHandleChange} />
          <label >Password</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default Login;
