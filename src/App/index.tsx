import React from 'react';

import Button from './Components/Button';
import Result from './Components/Result';
import { IAppState } from './Interfaces/IAppState';

class App extends React.Component<{}, IAppState> {

  state = { counter: 0 };

  incrementCounter = incrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementValue
    }));
  }

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    )
  }
}

export default App;