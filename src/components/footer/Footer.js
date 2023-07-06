import React from 'react'

import vk from "../../img/icons/vk.svg";
import insta from "../../img/icons/instagram.svg";
import tg from "../../img/icons/telegram.svg";
import git from "../../img/icons/gitHub.svg";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a href="https://vk.com/folomeev.aleksei"><img src={vk} alt="link" /></a>
                            </li>
                            <li className="social__item">
                                <a href="https://www.instagram.com/folomeev.aleksey/"><img src={insta} alt="link" /></a>
                            </li>
                            <li className="social__item">
                                <a href="https://t.me/AlexFoland"><img src={tg} alt="link" /></a>
                            </li>
                            <li className="social__item">
                                <a href="https://github.com/AlexFoland"><img src={git} alt="link" /></a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>2023 All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;