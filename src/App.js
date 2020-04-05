import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import { render } from '@testing-library/react';

let myArr = [
  { imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg",
    title: "Im card 1",
    text: "lorem5"
  },
  {
    imgUrl: "https://s3-us-west-2.amazonaws.com/lasaga-blog/media/original_images/grupo_imagen.jpg",
    title: "Im card 2",
    text: "This is the text of card 2"
  },
  {
    imgUrl: "https://moovx.mobi/wp-content/uploads/2019/03/applcardti.0.jpg",
    title: "Im card 3",
    text: "This is the text of card 3"
  }

];

function App() {

  const renderCards = () => {
    const allCards = [];
    for (let i = 0; i < myArr.length; i++) {
      allCards.push(<Card imgUrl={myArr[i].imgUrl} title={myArr[i].title} text={myArr[i].text} />);
    };
    return allCards
  }

  return (
    <div className="wrapper">
    <Navbar />
    <Jumbotron />
    {renderCards()}
    </div>
  );
}

export default App;
