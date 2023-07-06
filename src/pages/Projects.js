import React from 'react'

import cards1 from "../img/projects/cutSpace.jpg";
import cards2 from "../img/projects/geekbr11.jpg";
import cards3 from "../img/projects/port2.jpg";
import cards4 from "../img/projects/MiniGames2.png";
import cards5 from "../img/projects/timer2.png";
import cards6 from "../img/projects/calc2.png";

function Projects() {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards1} alt="project img" className="project__img" />
                                <h3 className="project__title">CutSpace</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards2} alt="project img" className="project__img" />
                                <h3 className="project__title">GeekBrains</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards3} alt="project img" className="project__img" />
                                <h3 className="project__title">Portfolio WebCademy</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards4} alt="project img" className="project__img" />
                                <h3 className="project__title">Mini Games: Snake, TicTacToe</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards5} alt="project img" className="project__img" />
                                <h3 className="project__title">Calendar</h3>
                            </a>
                        </li>
                        <li className="project">
                            <a href="./project-page.html">
                                <img src={cards6} alt="project img" className="project__img" />
                                <h3 className="project__title">Calculator</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Projects;
