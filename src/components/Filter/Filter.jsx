import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="Filter">
        <label>
          Find contacts by name
          <input type="text" value={value} onChange={onChange} />
        </label>
      </div>
    );
  }
}

export default Filter;
