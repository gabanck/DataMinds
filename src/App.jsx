import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeatureGrid from './components/FeatureGrid';
import ChallengeList from './components/ChallengeList';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import { siteConfig } from './data/siteData';
import './App.css';

function App() {
  return (
    <>
      <Header brand={siteConfig.appName} navItems={siteConfig.navItems} />
      <Hero />
      <Stats items={siteConfig.metrics} />
      <FeatureGrid items={siteConfig.featureCards} />
      <ChallengeList items={siteConfig.challengeCards} />
      <CommunitySection items={siteConfig.communityHighlights} />
      <Footer items={siteConfig.navItems} />
    </>
  );
}

export default App;
