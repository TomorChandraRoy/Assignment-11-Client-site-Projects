import Banner from "../Banner/Banner";
import Category from "../CategoryPage/Category";
import Upcoming from "../UpcomingCours/Upcoming";
import Services from "../UpcomingCours/servicesPage/services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Upcoming></Upcoming>
            <Category></Category>
            <Services></Services>
        </div>
    );
};

export default Home;