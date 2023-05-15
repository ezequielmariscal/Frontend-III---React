import React, { Component } from 'react';
import Button from './Button';

export default class Color extends Component {

    render() {
        return (
          <div className="container">
            <div className="panel">
              {this.props.colors.map(color => <div key={color} className={color}>{color}</div>)}
            </div>
            <Button fn={()=>this.props.shuffle()} />
          </div>
    
        )
      }
}