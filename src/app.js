import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: 'this is the state text',
      cat: 0
    }
  }

  update(e){
    this.setState({ txt: e.target.value })
  }


  render(){

    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
        <h3> I ate {this.state.cat} apples</h3>
      </div>
    );
  }

}

//impongo il tipo alle proprietà
App.propTypes = {
  txt: React.PropTypes.string, 
  cat: React.PropTypes.number.isRequired
}

//impongo valori di default delle proprietà
App.defaultProps = {
  txt: 'this is the default text'
}

//rendering nel DOM
ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);


export default App;
