
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero =lazy(() => import("./components/hero/Hero"));
const Services =lazy(() => import("./components/services/Services"));
const Portfolio =lazy(() => import("./components/portfolio/Portfolio"));
const Contact =lazy(() => import("./components/contact/Contact"));
/*initiate different sections*/
/*use lazy loading to import the pages only at the prev page -> faster loading */

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
      <LazyLoad height ={"100vh"} offset={-100}>
      <section id="#home">
        <Hero />
      </section>
      </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
      <LazyLoad height ={"100vh"} offset={-100}>
      <section id="#services">
        <Services />
      </section>
      </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
      <LazyLoad height ={"600vh"} offset={-100}>
      {/*section id="#portfolio"*/}
        <Portfolio />
      {/*section is removed as there is already section in portfolio*/} 
      </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
      <LazyLoad height ={"100vh"} offset={-100}>
      <section id="#contact">
      < Contact />
      </section>
      </LazyLoad>
      </Suspense>
    </div>
  );
};
export default App