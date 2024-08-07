import React from 'react';
import Card from './card';
import bootstrap from "./img/bootstrap.png";
import keeper from "./img/keeper.png";
import todo from "./img/todo.png";
import guess from "./img/Guess My Number.png";
import Zoom from "@mui/material/Zoom";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <>
      <div className='homeHeader'>
        <Zoom in={true}>
          <h1 className='name'>Hi, my name is Ayush Singh Chouhan</h1>
        </Zoom>
        <Zoom in={true}>
          <p className='work'>And I'm a <strong>front-end web developer</strong>.</p>
        </Zoom>
      </div>

      <div className="more">
        <h3>My specialty is in HTML, CSS, JavaScript, React JS, and Bootstrap Framework</h3>
        <div>Here are some of the projects I've worked on:</div>
          <div>
        <Fade top distance="20%" duration={1000}>
            <Card 
            key="1"
            id={1}
              image={bootstrap}
              title="Bootstrap Framework"
              desc="Here I used only the Bootstrap framework."
              link= " https://jeratos.github.io/bootstra-framework-website/"
            />
            <Card
               key="2"
               id={2}
              image={keeper}
              title="Keeper App"
              desc="Here I used React library using hooks & props."
               link= " https://jeratos.github.io/reactDemoKeeperApp/"
            />
            <Card
               key="3"
               id={3}
              image={todo}
              title="Todo App"
              desc="Here I also used the React JS library."
               link= "https://jeratos.github.io/todoApp-react/"
            />
            <Card
               key="4"
               id={4}
              image={guess}
              title="Guess The Number (Game)"
              desc="And here I used JS to make the logic."
               link= " https://jeratos.github.io/guessTheNumber/"
            />
        </Fade>
          </div>
      </div>
    </>
  );
}
