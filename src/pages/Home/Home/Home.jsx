import HeroBanner from "../../../components/HeroBanner/HeroBanner";
import TopDecorators from "../../../components/TopDecorators/TopDecorators";
import TopService from "../../../components/TopService/TopService";
import Coverage from "../Coverage/Coverage";

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TopService></TopService>
            <TopDecorators></TopDecorators>
        </div>
    );
};

export default Home;