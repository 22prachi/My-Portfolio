import React from "react";
import ProjectsCard from "./ProjectsCard";
import tic from "../../assets/tic.png"
import net from "../../assets/net.png"
import amazon from "../../assets/amazon.png"
import rock from "../../assets/rock.png"
import weather from "../../assets/weather.png"
import you from "../../assets/you.avif"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Projects</h1>
      <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
        <ProjectsCard
          title="Tic-Tac-Toe"
          main="A simple Tic-Tac-Toe game built using HTML, CSS, and JS. Players can choose X or O and take turns marking spaces in a 3x3 grid. The game checks for a winner after each move."
          demoLink="https://tic-tac-toe-six-henna.vercel.app/"
          projectImage={tic}
        />

        <ProjectsCard
          title="NetFlix Clone"
          main="A Netflix clone built with HTML and CSS. The app replicates the user interface of Netflix, showing movie and TV show thumbnails, categories, and a responsive layout. It uses static data and implements the basic design structure of Netflix's homepage."
          demoLink="https://clone-of-netflix-blush.vercel.app/"
          projectImage={net}

        />

        <ProjectsCard
          title="Amazon Clone"
          main="An Amazon clone created using HTML and CSS. This project mimics the layout and features of Amazon's homepage with a responsive design, including product categories, images, and a shopping cart functionality built with React state management."
          demoLink="https://amazon-clone-iota-rust-55.vercel.app/"
          projectImage={amazon}
        />

        <ProjectsCard
          title="Rock-Paper-Scissors"
          main="A Rock-Paper-Scissors game developed with HTML, CSS, and  JS. The player selects one of the three options, and the game randomly generates the computer's choice. The result is displayed along with the score, and a reset button allows for multiple rounds."
          demoLink="https://rock-paper-scissor-sand-eight.vercel.app/"
          projectImage={rock}
        />

        <ProjectsCard
          title="Weather App"
          main="A weather app built using HTML, CSS, and JavaScript. The app allows users to search for weather information by city name. JavaScript is used to fetch weather data from an API (like OpenWeatherMap) and dynamically update the UI with temperature, humidity, wind speed, and weather conditions."
          demoLink="https://weather-app-accs.vercel.app/"
          projectImage={weather}
        />

        <ProjectsCard
          title="Video Lecture Assignment"
          main="This project contains a playlist of 12 video lectures . You can access the complete playlist on YouTube via the clicking on  following view the project button: "
          demoLink="https://www.youtube.com/playlist?list=PLuSS0ahdkB09Jsgfg25JcymZgV2zcWO7Q"
          projectImage={you}

          />
        
      </div>
    </div>
  );
};

export default Projects;

