import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppList from './components/AppList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.shuffleImages = this.shuffleImages.bind(this);
    this.increment = this.increment.bind(this);
    this.stats = {
      guessed: 0,
      score: 0,
    }
    this.state = {

    }
  }

  shuffleImages() {
    const imageShuffle = this.state.images.sort(function () { return 0.5 - Math.random() });

    this.setState({
      images: imageShuffle,
    });
  }

  increment() {
    const updateGuesses = this.stats.guessed++;
    console.log(updateGuesses);
  }

  handleClick(event, image) {
    const updateGuesses = this.stats.guessed++;
    const updateScore = this.stats.score++;
    event.preventDefault();
    this.selectedImage = image;
    console.log(image);
    if (image.id === this.state.selectedImage.id) {
      alert("You lose!");
      this.setState({
        stats: {
          score: 0,
          guessed: 0,
        }
      })
      return this.shuffleImages();
    } else {
      this.setState({
        selectedImage: this.selectedImage,
        stats: {
          guessed:updateGuesses,
          score: updateScore,
        }
      })
      return this.shuffleImages();
    }
  };

  componentWillMount() {
    this.setState({
      stats: {
        guessed: 0,
        score: 0,
        topScore: 0,
      },
      selectedImage: {},
      images: [
        {
          id: 1,
          url: './images/image1.jpg'
        },
        {
          id: 2,
          url: './images/image2.jpg'
        }, {
          id: 3,
          url: './images/image3.jpg'
        },
        {
          id: 4,
          url: './images/image4.jpg'
        },
        {
          id: 5,
          url: './images/image5.jpg'
        },
        {
          id: 6,
          url: './images/image6.jpg'
        },
        {
          id: 7,
          url: './images/image7.jpg'
        },
        {
          id: 8,
          url: './images/image8.jpg'
        },
        {
          id: 9,
          url: './images/image9.jpg'
        },
        {
          id: 10,
          url: './images/image10.jpg'
        },
        {
          id: 11,
          url: './images/image11.jpg'
        },
        {
          id: 12,
          url: './images/image12.jpg'
        }
      ],
    });
    this.stats = {
      guessed: 1,
      score: 1,
    }
  };

  render() {
    return (
      <div className="App">
        <AppHeader stats={this.state.stats} />
        <AppList images={this.state.images} selectItem={this.handleClick}/>
      </div>
    );
  }
}

export default App;
