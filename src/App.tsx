import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { HeroSection } from './components/organisms/HeroSection/HeroSection';
import { TrendingSection } from './components/organisms/TrendingSection/TrendingSection';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/img/bg.webp')] bg-cover bg-center md:pt-20 lg:bg-cover">
      <div className="flex w-full max-w-[96.375rem] flex-col gap-16 self-center lg:gap-y-[6.875rem] lg:px-4">
        <Header />
        <main className="flex flex-col gap-20 md:gap-y-[6.875rem]">
          <HeroSection />
          <TrendingSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
