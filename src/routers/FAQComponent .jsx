import React, { useState } from 'react';

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is Quick Post?',
            answer: 'Quick Post is a feature that allows users to create, share, and manage posts quickly and efficiently.'
        },
        {
            question: 'How do I add a post?',
            answer: 'To add a post, click on the "Add Post" button, enter your content, and submit.'
        },
        {
            question: 'Can I delete a post?',
            answer: 'Yes, you can delete any post by clicking the "Delete" button associated with the post.'
        },
        {
            question: 'How do I like or dislike a post?',
            answer: 'Each post has "Like" and "Dislike" buttons. Click them to express your opinion.'
        },
        {
            question: 'How do I search for posts?',
            answer: 'Use the search bar at the top of the page to find posts by keywords.'
        },
        {
            question: 'Is it possible to share posts?',
            answer: 'Yes, you can share posts via social media or copy the post link using the "Share" button.'
        },
        {
            question: 'Can I edit my posts?',
            answer: 'Currently, Quick Post does not support editing posts. You can delete and repost your content.'
        }
    ];

    return (
        <div className="faq-component">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
                .faq-component {
                    padding-block:5vh;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                }
                .faq-list {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .faq-item {
                    border-bottom: 1px solid #ddd;
                }
                .faq-question {
                    background-color: #f7f7f7;
                    padding: 10px;
                    width: 100%;
                    text-align: left;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    outline: none;
                }
                .faq-question:hover {
                    background-color: #eaeaea;
                }
                .faq-answer {
                    background-color: #fff;
                    padding: 10px;
                    font-size: 14px;
                }
                .faq-answer p {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default FAQComponent;
