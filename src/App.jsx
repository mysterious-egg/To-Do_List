import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: '',
    };
  }

  add = () => {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: '',
    });
  };
  

  change = (e) => {
    this.setState({ item: e.target.value });
  };

  delete = (index) => {
    const { list } = this.state;
    const updatedList = list.filter((_, i) => i !== index);
    this.setState({ list: updatedList });
  };
  

  edit = (index, e) => {
    const { value } = e.target;
    const newList = [...this.state.list];
    newList[index] = value;
    this.setState({ list: newList });
  };
  

  render() {
    const { list, item } = this.state;

    return (
      <div className='container'>
        <h1>TO-DO List</h1>
        <div className='main'>
          <div>
            <input
              type="text"
              value={item}
              placeholder='Enter your task'
              onChange={this.change}
            />
          </div>
          <div>
            <button type='submit' onClick={this.add}>
              Add
            </button>
          </div>
        </div>
        <div>
          {list.map((item, index) => (
            <div key={index} className='items'>
              <input
                type="text"
                value={item}
                onChange={(e) => this.edit(index, e)}
              />
              <button type='submit' onClick={() => this.delete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
