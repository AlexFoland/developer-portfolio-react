import React from 'react'

function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__wraper">
                    <h1 className="header__title">
                        <strong>
                            Hi, my name is <em>Alexey</em><br />
                            a frontend and backend developer
                        </strong>
                    </h1>
                    <div className="header__text">
                        <p>with fervor for learning and creating.</p>
                    </div>
                    <a href="https://github.com/AlexFoland" className="btn">View GITHub</a>
                </div>
            </header>
        </div>
    )
}
export default Header;
