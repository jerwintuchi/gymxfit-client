import AboutDescription from "./_components/MainHeroProps/AboutDescription";
import Contacts from "./_components/MainHeroProps/Contacts";
import IframeMap from "./_components/MainHeroProps/IframeMap";
import MissionDescription from "./_components/MainHeroProps/MissionDescription";
import MainSectionList from "./_components/MainHeroProps/ValuesList";
import MainHeroSection from "./_components/MainSection";


const AboutPage = () => {

    return (
        <MainHeroSection
            aboutDescription={<AboutDescription />}
            missionParagraph={<MissionDescription />}
            valuesList={<MainSectionList />}
            iframeMap={<IframeMap />}
            contactDetails={<Contacts />
            }
        />
    );
};

export default AboutPage;