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
        {/* Add all your ProjectsCard components here */}
        <ProjectsCard
          title="Tic-Tac-Toe"
          main="A simple Tic-Tac-Toe game built using HTML, CSS, and JS. Players can choose X or O and take turns marking spaces in a 3x3 grid. The game checks for a winner after each move."
          demoLink="https://22prachi.github.io/Tic-Tac-Toe-/"
          projectImage={tic}
        />

        <ProjectsCard
          title="NetFlix Clone"
          main="A Netflix clone built with HTML and CSS. The app replicates the user interface of Netflix, showing movie and TV show thumbnails, categories, and a responsive layout. It uses static data and implements the basic design structure of Netflix's homepage."
          demoLink="https://22prachi.github.io/Clone-of-Netflix/"
          projectImage={net}

        />

        <ProjectsCard
          title="Amazon Clone"
          main="An Amazon clone created using HTML and CSS. This project mimics the layout and features of Amazon's homepage with a responsive design, including product categories, images, and a shopping cart functionality built with React state management."
          demoLink="https://22prachi.github.io/Amazon_clone/"
          projectImage={amazon}
        />

        <ProjectsCard
          title="Rock-Paper-Scissors"
          main="A Rock-Paper-Scissors game developed with HTML, CSS, and  JS. The player selects one of the three options, and the game randomly generates the computer's choice. The result is displayed along with the score, and a reset button allows for multiple rounds."
          demoLink="https://22prachi.github.io/Rock-Paper-Scissor/"
          projectImage={rock}
        />

        <ProjectsCard
          title="Weather App"
          main="A weather app built using HTML, CSS, and JavaScript. The app allows users to search for weather information by city name. JavaScript is used to fetch weather data from an API (like OpenWeatherMap) and dynamically update the UI with temperature, humidity, wind speed, and weather conditions."
          demoLink="https://22prachi.github.io/Weather-App/"
          projectImage={weather}
        />

        <ProjectsCard
          title="Video Lecture Assignment"
          main="This project contains a playlist of 12 video lectures covering various topics. You can access the complete playlist on YouTube via the following link: [YouTube Playlist](https://www.youtube.com/your-playlist-link)."
          demoLink="https://www.youtube.com/your-playlist-link"
          projectImage={you}

          />
        
      </div>
    </div>
  );
};

export default Projects;

