import React, { useState } from 'react';

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFeature = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const features = [
        {
            title: 'Add Posts',
            details: 'Allows users to create new posts quickly by clicking on the "Add Post" button.'
        },
        {
            title: 'Delete Posts',
            details: 'Users can remove any post by clicking the "Delete" button associated with that post.'
        },
        {
            title: 'Like Posts',
            details: 'Users can express their approval by liking a post, which will increase the like count.'
        },
        {
            title: 'Dislike Posts',
            details: 'Users can express their disapproval by disliking a post, which will increase the dislike count.'
        },
        {
            title: 'Search Posts',
            details: 'Provides a search bar to quickly find posts by keywords.'
        },
        {
            title: 'Share Posts',
            details: 'Enables users to share posts via various platforms or copy the post link.'
        },
        {
            title: 'Experience Sharing',
            details: 'Users can share their personal experiences related to the post content.'
        }
    ];

    return (
        <div className="quick-post-features">
            <h2>Quick Post Features</h2>
            <div className="features-list">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <button
                            className="feature-title"
                            onClick={() => toggleFeature(index)}
                        >
                            {feature.title}
                        </button>
                        {activeIndex === index && (
                            <div className="feature-details">
                                <p>{feature.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
                .quick-post-features {
                    padding-block: 5vh;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                }
                .features-list {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .feature-item {
                    border-bottom: 1px solid #ddd;
                }
                .feature-title {
                    background-color: #f7f7f7;
                    padding: 10px;
                    width: 100%;
                    text-align: left;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    outline: none;
                }
                .feature-title:hover {
                    background-color: #eaeaea;
                }
                .feature-details {
                    background-color: #fff;
                    padding: 10px;
                    font-size: 14px;
                }
                .feature-details p {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default Features;
