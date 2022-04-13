import React, {Component} from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteBoxes(this.props.id)
  }

  render() {
    let styleConfig = {height: parseInt(this.props.height),
    width: parseInt(this.props.width),
    backgroundColor: this.props.backgroundColor}

    let button = styleConfig.height === 0 && styleConfig.width === 0 ?
    "" :
    <button onClick={this.handleDelete}>Delete</button>

    return (
      <div>
        <div style={styleConfig}></div>
        {button}
      </div>
    );
  }
}

export default Box;