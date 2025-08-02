import BottomBar from '../components/BottomBar'
import ExpertChefSection from '../components/ExpertChefSection';
import FeedbackSection from '../components/FeedbackSection';
import FoodGallerySection from '../components/FoodGallerySection';
import FoodMenuSection from '../components/FoodMenuSection';
import Hero from '../components/Hero';
import LatestNewsSection from '../components/LatestNewsSection';
import PopularFastFoodSection from '../components/PopularFastFoodSection';
import ReservationSection from '../components/ReservationSection';
import ServiceSection from '../components/ServiceSection';
import WelcomeSection from '../components/WelcomeSection';
import Header from '../components/Header';
const HomePageOne = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      
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
    </div>
  );
};

export default HomePageOne;