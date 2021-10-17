import React from 'react'

export default function Storycard() {
    const details = [
        {
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
            heading: 'Introduction To A Machine Learning...',
            date: '23 Aug 2019',
            authar: 'EdYoda',
            description: 'We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...'
        },
        {
            id: 2,
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/7.png',
            heading: 'Importance of Data Backup and Recovery in...',
            date: '26 Aug 2019',
            authar: 'EdYoda',
            description: 'A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the...'
        },
        {
            id: 3,
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/5.png',
            heading: 'Breaking the Myths around Cybersecurity',
            date: '26 Aug 2019',
            authar: 'EdYoda',
            description: ' As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The n...'
        },
        {
            id: 4,
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
            heading: 'Challenges of Machine Learning in Big Data...',
            date: '24 Aug 2019',
            authar: 'EdYoda',
            description: ' Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the...'
        },
        {
            id: 5,
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/4.png',
            heading: 'Impact of Cloud Computing in various...',
            date: '24 Aug 2019',
            authar: 'EdYoda',
            description: ' Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are us...'
        },
        {
            id: 6,
            image: 'https://edyoda.s3.amazonaws.com/media/blog-images/6.png',
            heading: 'LAMP Stack Vs MEAN stack: Choosing the..',
            date: '24 Aug 2019',
            authar: 'EdYoda',
            description: ' In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement...'
        },
    ]

    return (
        <div className="story-section">
            {
                details.map(ele => {
                    const { id, image, heading, date, authar, description } = ele;
                    return <div key={id} className="article">
                        <figure className="img-section">
                            <img className="image-style"
                                src={image}
                                alt="Mechine Learning" />
                        </figure>
                        <div className="text-section">
                            <h3 className="story-title">{heading}</h3>
                            <p><span className="author-name">{authar}</span> | <span className="date">{date}</span></p>
                            <p className="Story-description">
                                {description}
                            </p>
                        </div>
                    </div>
                })


            }
        </div>

    )
}
