import React from 'react';
import DirectorSelector from '../components/DirectorSelector';
import FilmList from '../components/FilmList';
// import { CountryDetail } from '../components/CountryDetail';
//
class DirectorInfoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      focusDirector: "Quentin Tarantino",
      directors: ["Quentin Tarantino", "Ang Lee", "Christopher Nolan", "Ridley Scott"],
      films:[]
    }
  }

  getName(index, nameString){
    const arrayOfStrings = nameString.split(" ");
    return arrayOfStrings[index]
  }

  componentDidMount() {
    this.getNewFilms();
  }

  setFocusDirector(director){
    // console.log("HURRAY!");
    console.log("director: ", director)
    this.setState({focusDirector: director}, () => {
      console.log("focusDirector: ", this.state.focusDirector);
      console.log("Should display films for: ", director);
      this.getNewFilms();
    })
    getNewFilms()
  }

  getNewFilms(){
    const firstname = this.getName(0, this.state.focusDirector);
    const lastname = this.getName(1, this.state.focusDirector);
    const url = "http://netflixroulette.net/api/api.php?director=" + firstname+"%20"+lastname;
    console.log("url: ", url)

    const request = new XMLHttpRequest();
    request.open("GET", url)

    request.onload = () => {
      if (request.status !== 200) return
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      // console.log("data: ", data)

      this.setState({films: data})
      console.log("FILMS: ", this.state.films);
    }
    request.send()
  }

  render(){
    return (
      <div>
        <h2>Director</h2>
        <DirectorSelector directors={this.state.directors} selectDirector={this.setFocusDirector.bind(this)}/>
        <FilmList films={this.state.films}/>
      </div>
    );
  }
}

export default DirectorInfoContainer;
