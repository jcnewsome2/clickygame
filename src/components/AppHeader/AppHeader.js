import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      stats: this.props.stats,
    })
    console.log(this.state.stats);
  }

  render() {
    return (
      <header>
        <h1>Clicky the Game</h1>
        <ul>
          <li>You Guessed {this.props.stats.guessed}</li>
          <li>point: {this.props.stats.score}</li>
        </ul>
      </header>
    );
  };
};

AppHeader.propTypes = {
  stats: PropTypes.object,
}

export default AppHeader;
