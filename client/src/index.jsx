import React from 'react';
import ReactDOM from 'react-dom';
import { Right_col, Left_col } from './styled.js';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameTitle: ''
    }
  }

  componentDidMount() {
    let gameId = window.location.pathname.split('/')[2];
    console.log('gameId: ', gameId);
    Axios.get('/api/name/' + gameId)
    .then (({data}) => {
      this.setState({
        gameTitle: data[0].gameTitle
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id='page_content'>
          <div id='title'>
            {
              this.state.gameTitle
            }
          </div>
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