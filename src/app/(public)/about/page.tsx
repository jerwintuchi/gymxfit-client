import MainHeroSection from "./_components/MainSection";
import MainSectionList from "./_components/MainSectionList";

const AboutPage = () => {
    
    return (
        <MainHeroSection aboutDescription="We are passionate about helping you achieve your fitness goals. Our
                            state-of-the-art facility and experienced trainers provide the
                            perfect environment for you to transform your body and mind. We
                            believe in a holistic approach to fitness, focusing on strength,
                            endurance, and overall well-being."
            missionParagraph="To empower individuals to lead healthier and more fulfilling lives
                            through fitness and community."
            valuesList={<MainSectionList />} />
    );
};

export default AboutPage;