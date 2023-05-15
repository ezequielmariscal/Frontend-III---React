import React, { Component } from 'react';

import "./App.css";
import Color from './Color';

export default class App extends Component {


        state = {
            colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
          }

        shuffle = () => {
            console.log("Ejecutando shuffle");
            this.setState(prevState => {
                return {
                    colors: prevState.colors.sort(()=> Math.random() - 0.5)
                }
            });
        }
        
        render() {
            return (
              <div className="container">
                <Color colors={this.state.colors} shuffle={this.shuffle}/>
              </div>
        
            )
          }
    }