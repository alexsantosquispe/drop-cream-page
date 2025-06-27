import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { HeroSection } from './components/organisms/HeroSection/HeroSection';
import { TrendingSection } from './components/organisms/TrendingSection/TrendingSection';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/img/bg.webp')] bg-cover pt-20 pb-8">
      <div className="flex w-[96.375rem] flex-col gap-y-[6.875rem] self-center">
        <Header />
        <main className="flex flex-col gap-y-[6.875rem]">
          <HeroSection />
          <TrendingSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
