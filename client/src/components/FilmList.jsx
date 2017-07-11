import React from 'react';

class FilmList extends React.Component {

  render() {
    console.log("films in FilmList render method: ", this.props.films)

    const listItems = this.props.films.map((film, index) => {
      return <li key={index}>{film.show_title}</li>
    })

    return (
      <ul id="films">
        {listItems}
      </ul>
    );
  }
}

export default FilmList;
