import AboutDescription from "./_components/MainHeroProps/AboutDescription";
import MissionDescription from "./_components/MainHeroProps/MissionDescription";
import MainSectionList from "./_components/MainHeroProps/ValuesList";
import dynamic from "next/dynamic";

const MainHeroSection = dynamic(() => import("./_components/MainSection"));
const AboutPage = () => {

    return (
        <MainHeroSection
            aboutDescription={<AboutDescription />}
            missionParagraph={<MissionDescription />}
            valuesList={<MainSectionList />}
        />
    );
};

export default AboutPage;