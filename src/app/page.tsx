import AnimatedHero from '../components/AnimatedHero';
import AnimatedViewer from '../components/AnimatedViewer';
import AnimatedFeatures from '../components/AnimatedFeatures';
import AnimatedCTA from '../components/AnimatedCTA';
import NavigationButton from '../components/NavigationButton';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      {/* Top-right corner button */}
      <NavigationButton />
      
      {/* Hero Section with Fullscreen 3D Model and Centered Title */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Massive 3D Model as Background */}
        <div className="absolute inset-0 z-0 scale-125">
          <AnimatedViewer />
        </div>
        
        {/* Centered Large Title */}
        <div className="relative z-10 text-center">
          <AnimatedHero />
        </div>
      </section>

      {/* Features Section with adjusted background */}
      <section className="bg-middle-section backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <AnimatedFeatures />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <AnimatedCTA />
      </section> */}
    </main>
  );
}
