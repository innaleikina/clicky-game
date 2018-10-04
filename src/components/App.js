import React, {
  Component
} from 'react';
import { Header, Counter, HighScore } from '../styles/--header';
import shuffle from 'shuffle-array';
import Card from './Card';
import cards from '../cards.json'
import '../styles/cards.css'
import '../styles/normalize.css'
import '../styles/main.css'



class App extends Component {

  state = {
    cards: cards,
    clickedArr: [],
    clickCount: 0,
    highScore: 0,
  };

  compareIdToArr = (e) => {
    e.preventDefault();
    let newId = e.target.id;
    console.log("second log")
    console.log(this.state.clickedArr)

    // ========== IF ELSE STATEMENT TO COMPARE CARDS
    if(this.state.clickedArr.includes(newId)){
      console.log("duplicate");
       if(this.state.clickCount > this.state.highScore){
         this.setState({highScore: this.state.clickCount});
       }
       this.setState({clickCount: 0, clickedArr:[]});
    } else {
    this.setState({
      clickedArr: this.state.clickedArr.concat(newId),
      clickCount: this.state.clickCount + 1,
    });

     }
   }

  
  
  
   handleClick = (e) => {
    let newId = e.target.id;
    e.preventDefault();
  
    if (this.state.clickCount === 0) {
      this.setState({
        clickedArr: this.state.clickedArr.concat(newId)
      })
      this.setState({
        clickCount: this.state.clickCount + 1,
        highScore: this.state.highScore
      })
      console.log("first log");
      console.log(this.state.clickedArr);
    } else {
      this.compareIdToArr(e);
    }

   
    //on click of the picture component is forced to rerender calling the randomize function in the return statement
    this.forceUpdate()
  }


  render() {

    //shuffle happens here
    const shuffledCards = shuffle(this.state.cards);


    return ( <div className = "App" >
      <Header >
      <h2 > Clicky Game </h2> 
      <Counter> counter: {this.state.clickCount} </Counter>
      <HighScore> high score: {this.state.highScore} </HighScore>
      </Header> 
      <div className = "cards" > 
      { /* map is performed on the shuffled cards */ } 
       {shuffledCards.map(card => (
          <Card cards = {this.state.cards}
          handleClick = {this.handleClick}
          image = {card.image}
          key = {card.id}
          id = {card.id}
          />
        ))
      } </div> 
      </div>
    );
  }
}

export default App;