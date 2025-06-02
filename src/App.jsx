import { lazy, Suspense, useRef } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
import AboutPage from "./components/about/about";

const App = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Sample navigation buttons */}
      <div className="fixed top-4 right-4 z-50 space-x-4">
        <button onClick={() => scrollToSection(homeRef)} className="bg-purple-200 px-4 py-2 rounded">Home</button>
        <button onClick={() => scrollToSection(servicesRef)} className="bg-purple-200 px-4 py-2 rounded">Services</button>
        <button onClick={() => scrollToSection(contactRef)} className="bg-purple-200 px-4 py-2 rounded">Contact</button>
      </div>

      <Suspense fallback={"Loading..."}>
        <LazyLoad once offset={100}>
          <section ref={homeRef}>
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <LazyLoad once offset={100}>
          <AboutPage />
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <LazyLoad once offset={200}>
          <Portfolio />
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <LazyLoad once offset={100}>
          <section ref={servicesRef}>
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <LazyLoad once offset={100}>
          <section ref={contactRef}>
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
