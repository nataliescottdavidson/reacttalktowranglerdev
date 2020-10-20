import React from 'react';
import logo from './logo.svg';
import './App.css';

class WorkerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      workerresp: null
    };
  }

  componentDidMount() {
    fetch("/coloapiworker")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            workerresp: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render() {
    const { error, isLoaded, workerresp } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div>Loaded {workerresp.colo}</div>;
    }
  }
}

function App() {
  return <WorkerComponent/>;
}

export default App;
