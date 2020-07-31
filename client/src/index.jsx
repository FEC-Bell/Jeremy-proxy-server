import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, styled } from 'styled-components';
import { Right_col, Left_col } from './styled.js';

// const GlobalStyle = createGlobalStyle`
// html {
//   background: #1b2838;
// }

// body {
//   font-family: 'Roboto', sans-serif;
// }

// `;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <div id='header'>
          Header
        </div>
        <div id='page_content'>
          <div id='title'></div>
          <div id='topBlock'>
            <div id='topContent'>
              <div className='block_element' id="photo-carousel"></div>
              <div className='block_element2' id='game-description'></div>
              <div id='tags'></div>
            </div>
          </div>
        </div>
        <div id='middle_content'>
          <div id='content_block'>
              <Right_col id='right_col metadata'></Right_col>
              <Left_col id='left_col description'>
                <div id='purchase_area'>
                  <div id='buy_and_bundle'>

                  </div>
                  <div id='dlc_area'>
                    <div id="dlc"></div>
                  </div>
                </div>
              </Left_col>
          </div>
          <div id='graph'>hello</div>
        </div>
        <div id="reviews-graph">
        </div>
        <div id="reviews"></div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
      </React.Fragment>
    );

  }


}

ReactDOM.render(<App />, document.getElementById('app'));