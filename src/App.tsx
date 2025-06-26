import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/img/bg.webp')] bg-cover pt-20">
      <div className="flex w-[96.375rem] flex-col gap-y-[6.875rem] self-center">
        <Header />
        <main className="flex flex-col">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
