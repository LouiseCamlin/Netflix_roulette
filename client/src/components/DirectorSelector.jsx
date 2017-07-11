import React from 'react';

class DirectorSelector extends React.Component {

  constructor(props) {
      super(props)
      this.state = {selectedIndex: 0}
  }

  handleChange(event) {
    const newIndex = event.target.value;
    this.setState({selectedIndex: newIndex})

    const selectedDirector = this.props.directors[newIndex]
    this.props.selectDirector(selectedDirector)
  }


  render() {

    const options = this.props.directors.map((director, index) => {
      return <option value={index} key={index}>{director}</option>
    })

    return (
      <select id="directors" onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    );
  }
}

export default DirectorSelector;
