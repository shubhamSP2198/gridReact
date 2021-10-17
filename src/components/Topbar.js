import React from 'react'

export default function Topbar() {
    return (
        <div id="top-bar">
            <nav className="menu-items">
                <div className="logo-div">
                    <div className="logo">EDYODA</div>
                    <div className="story-text">
                        Stories
                    </div>
                </div>
                <div className="explore-cate">
                    Explore Categories
                    <i style={{color: "black"}} className="fas fa-caret-down"> </i>
                </div>
            </nav>
            <div id="option" >
                <p>EdYoda is free learning and knowledge sharing platform for techies</p>
                <button>Go to Main Website</button>
            </div>
        </div>
    )
}
