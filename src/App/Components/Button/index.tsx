import React, { Component } from 'react';
import { IButtonProps } from '../../Interfaces/IButtonProps';

class Button extends Component<IButtonProps, {}> {
  private handleClick = (): void => {
    this.props.onClickFunction(this.props.incrementValue);
  }

  public render(): JSX.Element {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

export default Button;