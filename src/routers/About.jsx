import React from 'react';

const About = () => {
    return (
        <div className="about-component">
            <h2>About Quick Post</h2>
            <p>
                Quick Post is a dynamic platform designed to make sharing your thoughts and experiences as seamless as possible. Whether you want to create a new post, interact with others by liking or disliking content, or share your experiences with the community, Quick Post provides all the tools you need in one place.
            </p>
            <p>
                Our goal is to foster a space where users can quickly and easily connect, share, and engage with content that matters to them. With features like post creation, deletion, search, and sharing, Quick Post is your go-to platform for staying connected and expressing your ideas.
            </p>
            <p>
                Join us in building a community of engaged and thoughtful individuals who are passionate about sharing their voice and experiences. Welcome to Quick Post, where your story matters.
            </p>
            <style jsx>{`
                .about-component {
                   
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    
                    margin-block:5vh;
                }
                .about-component h2 {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }
                .about-component p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 10px;
                    color: #555;
                }
            `}</style>
        </div>
    );
};

export default About;
