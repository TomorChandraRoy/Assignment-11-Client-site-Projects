import Banner from "../Banner/Banner";
import Category from "../CategoryPage/Category";
import MarqueePage from "../Marquee/MarqueePage";
import Swipers from "../Swiper/Swipers";
import Upcoming from "../UpcomingCours/Upcoming";
import Services from "../UpcomingCours/servicesPage/services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Upcoming></Upcoming>
            <Category></Category>
            <Services></Services>
            <Swipers></Swipers>
            <MarqueePage></MarqueePage>
        </div>
    );
};

export default Home;