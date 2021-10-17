import React from 'react'

export default function Latestpost() {
    const latestPost =['All', 'Artificial Intelligance', 'Cloud Computing', 'DevOps', 'Programming Languages', 'Mobile Application Development', 'Technology and Tools', 'Get a Job in Tech Company', 'Others']
    return (
        <div className="category-container">
                <div>
                    <h2 className="category-heading">Trending Posts</h2>
                </div>
                <div className="filter-line">
                    <span >
                        <i className="fas fa-filter"></i>
                    </span>
                    <span id="filter-text" className="filter-line" >
                        Filter by Category
                    </span>
                </div>
                <div>
                    {
                        latestPost.map(ele => {
                            return <div className="category-items">{ele}</div>
                        })
                    }
                </div>
            </div>
    )
}
