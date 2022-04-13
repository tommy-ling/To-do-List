import React, {Component} from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuidv4} from 'uuid'

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: [{height: 100, width: 200, backgroundColor: "pink", id: uuidv4()}]
    }
    this.addBox = this.addBox.bind(this)
    this.deleteBoxes = this.deleteBoxes.bind(this)
  }

  addBox(box) {
    let newBox = { ...box, id: uuidv4() }
    this.setState(st => ({
      boxList: [newBox, ...st.boxList]
    }))
  }

  renderBoxes() {
    return (
      <ul>
        {this.state.boxList.map(b => (
          <li key={b.id}>
            <Box height={b.height}
            width={b.width}
            backgroundColor={b.backgroundColor}
            id={b.id}
            deleteBoxes={this.deleteBoxes}/>
          </li>
        ))}
      </ul>
    )
  }

  deleteBoxes(id) {
    this.setState({
      boxList: this.state.boxList.filter(b => b.id !== id)
      })
  }

  render() {
    return (
      <div>
        <h1>Box Maker Thingy</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;