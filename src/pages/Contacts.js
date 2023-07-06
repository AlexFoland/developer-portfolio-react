import React from 'react'

function Contacts() {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <div className="project-details">
                        <h1 className="title-1">Contacts</h1>
                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title2">Location</h2>
                                <p>Bishkek, Kyrgyzstan</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title2">Telegram / WhatsApp</h2>
                                <p>
                                    <a href="+996 556 20 62 03">+996 (556) 20-62-03</a>
                                </p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title2">Email</h2>
                                <p>
                                    <a href="folomeev.aleksei97@gmail.com">folomeev.aleksei97@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contacts;
