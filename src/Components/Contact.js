import { Component } from 'react/cjs/react.production.min';
import { Prompt } from "react-router-dom";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        Day la trang Lien he <br />
        <button type="button" onClick={() => this.onClick(false)} className="btn btn-primary">Cho phep</button>&nbsp;
        <button type="button" onClick={() => this.onClick(true)} className="btn btn-danger">Khong cho phep</button>
        <Prompt when={this.state.isChecked} message={location => (`Ban co chac muon den${location.pathname}`)} />
      </div>
    );
  }
}

export default Contact;
