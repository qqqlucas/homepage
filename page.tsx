import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <Carousel />
      <MainContent />
    </div>
  );
}