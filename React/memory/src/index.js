import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

/*function Welcome(props){
  console.log(props.children);
  return<h1>Bonjour {props.name} !!! {props.children}</h1>;

}
render(<Welcome name='pascal'>comment va tu aujourd'hui?</Welcome>, document.querySelector('#main'));*/

class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render(props) {
    return <h1>Bonjour {this.props.name} !!! {this.props.children}</h1>;
  }
}
class Clock extends React.Component {
  constructor(){
    super();
    this.state={date: new Date()};
    this.timer=null;
  }

  componentDidMount() {
    this.timer=setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  tick() {
    this.setState({date: new Date()});
  }
 
  render(){
    const date=new Date();
    return <div>
              <h2>nous sommes le {date.toLocaleDateString()} et il est {date.toLocaleTimeString()}</h2>
          </div>;
  }
}

function Home() {
  return <>
            <Welcome  name="pascal"  />
            <Welcome  name="Aristote"  />
            <Clock />
        </>
}

//render(<Welcome name='pascal'>comment va tu aujourd'hui?</Welcome>, document.querySelector('#main'));
render(<Home/>, document.body);