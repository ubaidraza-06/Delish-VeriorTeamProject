
import Footer from '../components/pagetwo/Footer';
import Hero from '../components/pagetwo/Hero';
import HomePageTwoBlog from '../components/pagetwo/HomePageTwoBlog';
import HomePageTwoCategory from '../components/pagetwo/HomePageTwoCategory';
import HomePageTwoChefs from '../components/pagetwo/HomePageTwoChefs';
import HomePageTwoDishes from '../components/pagetwo/HomePageTwoDishes';
import HomePageTwoFeature from '../components/pagetwo/HomePageTwoFeature';
import HomePageTwoFeedback from '../components/pagetwo/HomePageTwoFeedback';
import HomePageTwoOpeningTime from '../components/pagetwo/HomePageTwoOpeningTime';
import HomePageTwoPromo from '../components/pagetwo/HomePageTwoPromo';

const HomePageTwp = () => {
  return (
    <div>
      <Hero />
      <HomePageTwoFeature />
      <HomePageTwoPromo />
      <HomePageTwoCategory />
      <HomePageTwoOpeningTime />
      <HomePageTwoDishes />
      <HomePageTwoChefs />
      <HomePageTwoFeedback />
      <HomePageTwoBlog />
      <Footer />
    </div>
  )
}

export default HomePageTwp