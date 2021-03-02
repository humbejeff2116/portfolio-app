import React,{Suspense} from 'react';
import { Route,Switch, useLocation } from 'react-router-dom';
import './App.css';
import FallbackLoader from '../components/suspenseLoader/SuspLoader';
import { AnimatePresence } from "framer-motion";
const IndexPage = React.lazy(() => import('../pages/IndexPage/IndexPage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const Projectspage = React.lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
const ContactPage = React.lazy(()=> import('../pages/ContactPage/ContactPage'));
const NotFoundPage = React.lazy(()=> import('../pages/404Page/404') )



export default function App() {
    const location = useLocation();
    

  return (
   
    <AnimatePresence exitBeforeEnter >
     <Switch location={location} key={location.pathname} >            
        <Route exact  path="/" >
        <Suspense fallback={<FallbackLoader />}>
            < IndexPage />
            </Suspense>
        </Route>

        <Route exact path="/about-me" >
        <Suspense fallback={<FallbackLoader/>}>
            < AboutPage/>
            </Suspense>
        </Route>

        <Route exact path="/projects"  >
        <Suspense fallback={ <FallbackLoader/> }>
            <Projectspage/>
            </Suspense>
        </Route>

        <Route exact  path="/contact" >
        <Suspense fallback={ <FallbackLoader/> }>
            < ContactPage />
            </Suspense>
        </Route>
       
        <Route path="*">
        <Suspense fallback={ <FallbackLoader/> }>
        <NotFoundPage />
        </Suspense>
        </Route> 

      </Switch> 
      </AnimatePresence>
   

  )
}

