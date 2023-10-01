import React, { useEffect } from "react";
import userAvatar from "../../public/avt.png"; // Import your user avatar image
import Image from 'next/image'

const About = () => {
    useEffect(() => {
        const text = "Greetings, I'm Md. Salman Hossain, proud to call Comilla my hometown in beautiful Bangladesh. My journey into the realm of technology has been an exciting one.Greetings, I'm Md. Salman Hossain, proud to call Comilla my hometown in beautiful Bangladesh. My journey into the realm of technology has been an exciting one.I laid my educational foundation at Comilla Zilla School for my SSC and continued to Dhaka City College for my HSC, where my fascination with technology truly took flight. This led me to pursue a Bachelor's degree in Computer Science Engineering at East West University.Currently, I'm making strides as a Software Engineer at a prestigious company. In this role, I thrive on crafting innovative solutions that push the boundaries of what's possible in the digital world. My dedication to excellence, along with my penchant for creative problem-solving, has made me an indispensable part of my team.Beyond my professional endeavors, I'm known for my warm personality and my commitment to giving back to my community. I firmly believe that technology can be a force for positive change, and I'm determined to contribute to a brighter, more connected future.In essence, I'm Md. Salman Hossain, and my journey is characterized by innovation, resilience, and unwavering dedication. As I continue to push the boundaries of technology, I'm not just shaping my future but also the future of the tech industry itself. Let's connect and explore the exciting possibilities together!                                     ";
        const typingTextElement = document.getElementById("typing-text");
        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                typingTextElement.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 50); // Typing speed (milliseconds)
            }
        }

        type();
    }, []);

    return (
        <div className="about-section">
            <div className="parallax-background">
                
                {/* <div className="triangle"></div>
                <div className="circle"></div>
                <div className="color-scope"></div> */}
            </div>
            <div className="content-container border-4 border-blue-500 border-white custom-border shadow-2xl">
                <Image
                    src={userAvatar}
                    width={500}
                    height={500}
                    className="user-avatar hover:translate-x-2 hover:translate-y-2"
                    alt="User Avatar"
                />
                <div className="text-container">
                    <h2>About Me</h2>
                    <p id="typing-text"></p>
                </div>
            </div>
        </div>
    );
};

export default About;
