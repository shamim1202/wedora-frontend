
import TopDecorators from "../../../components/TopDecorators/TopDecorators";
import TopService from "../../../components/TopService/TopService";
import Coverage from "../Coverage/Coverage";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopService></TopService>
            <HowItWorks></HowItWorks>
            <TopDecorators></TopDecorators>
            <Coverage></Coverage>
        </div>
    );
};

export default Home;