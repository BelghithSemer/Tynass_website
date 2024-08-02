import React, { useEffect } from 'react';
import './AboutSection.css'; // Assuming you will move the relevant CSS here

const AboutSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const textElements = aboutSection.querySelectorAll('.framer-text span');
            const scrollPosition = window.scrollY;

            // Reset all text colors to the default
            textElements.forEach((element) => {
                element.style.color = 'rgb(129, 123, 111)';
            });

            if (scrollPosition > 300) {
                textElements.forEach((element) => {
                    element.style.color = 'white';
                });
            } else if (scrollPosition > 200) {
                if (textElements[2]) textElements[2].style.color = 'white';
                if (textElements[3]) textElements[3].style.color = 'white';
                if (textElements[4]) textElements[4].style.color = 'white';
            } else if (scrollPosition > 100) {
                if (textElements[1]) textElements[1].style.color = 'white';
            } else {
                if (textElements[0]) textElements[0].style.color = 'white';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="framer-uj0svf" data-framer-name="About section" id="about" name="About section">
            <div className="framer-12k3t0a" data-framer-name="Container" name="Container">
                <div className="framer-1d1cp0z-container" id="gY0_h0Id4"
                    style={{ opacity: 1, transform: 'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0)', zIndex: 10 }}>
                    <div className="framer-tBmD3 framer-TikEq framer-BpYPo framer-m1vqha framer-v-m1vqha"
                        data-framer-name="Desktp | Default" data-highlight="true" style={{ width: '100%' }}
                        tabIndex="0">
                        <div className="framer-1vjzcm6"
                            style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, '--extracted-1of0zx5': 'var(--token-eb8c27e0-67a7-4528-8f45-dec76405f53e, rgb(129, 123, 111))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none', zIndex: 10 }}
                            data-framer-component-type="RichTextContainer">
                            <h2 className="framer-text framer-styles-preset-17h5qw0" data-styles-preset="qQY7qerWT"
                                style={{ '--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-1of0zx5, var(--token-eb8c27e0-67a7-4528-8f45-dec76405f53e, rgb(129, 123, 111)))', color: 'rgb(129, 123, 111)', zIndex: 10 }}>
                                <span>Hey there! 👋We Are Tynass IT and Welcome to our realm of innovation!</span>
                                <span> We're passionate about crafting unforgettable XR experiences for businesses like yours.</span>
                                <span> Let's dive together and transform the world into something extraordinary ! 🚀</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="framer-e0ko0h" data-framer-name="Space 1" id="space-1" name="Space 1"></div>
                <div className="framer-16m22ab" data-framer-name="Space 2" id="space-2" name="Space 2"></div>
                <div className="framer-1yybvl1" data-framer-name="Space 3" id="space-3" name="Space 3"></div>
                <div className="framer-dwpo98" data-framer-name="Space 4" id="space-4" name="Space 4"></div>
                <div className="framer-12k1m1i" data-framer-name="Space 5" id="space-5" name="Space 5"></div>
                <div className="framer-1jgc95h" data-framer-name="Space 6" id="space-6" name="Space 6"></div>
                <div className="framer-1t5c25a" data-framer-name="Space 7" id="space-7" name="Space 7"></div>
            </div>
        </div>
    );
};

export default AboutSection;