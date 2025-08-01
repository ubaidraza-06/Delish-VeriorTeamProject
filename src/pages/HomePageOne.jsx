import BottomBar from '../components/BottomBar'
import ExpertChefSection from '../components/ExpertChefSection';
import FeedbackSection from '../components/FeedbackSection';
import FoodGallerySection from '../components/FoodGallerySection';
import FoodMenuSection from '../components/FoodMenuSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestNewsSection from '../components/LatestNewsSection';
import PopularFastFoodSection from '../components/PopularFastFoodSection';
import ReservationSection from '../components/ReservationSection';
import ServiceSection from '../components/ServiceSection';
import Topbar from '../components/Topbar';
import WelcomeSection from '../components/WelcomeSection';

const HomePageOne = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Topbar />
      <Header />
      <Hero />
      <WelcomeSection />
      <ServiceSection />
      <FoodMenuSection />
      <FoodGallerySection />
      <FeedbackSection />
      <ReservationSection />
      <ExpertChefSection />
      <PopularFastFoodSection />
      <LatestNewsSection />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default HomePageOne;