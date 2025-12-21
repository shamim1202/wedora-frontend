
import TopDecorators from "../../../components/TopDecorators/TopDecorators";
import TopService from "../../../components/TopService/TopService";
import Coverage from "../Coverage/Coverage";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Reviews from "../Reviews/Reviews";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopService></TopService>
            <HowItWorks></HowItWorks>
            <TopDecorators></TopDecorators>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <Coverage></Coverage>
        </div>
    );
};

export default Home;