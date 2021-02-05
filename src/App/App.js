import React,{Suspense} from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import IndexSkeleton,{AboutSkeleton,ProjectsSkeleton,ContactSkeleton} from '../components/skeleton/AppSkeleton';
// import  {AboutSkeleton,ProjectsSkeleton,ContactSkeleton} from '../components/skeleton/AppSkeleton';
import NotFoundPage from '../pages/404Page/404';
const IndexPage = React.lazy(() => import('../pages/IndexPage/IndexPage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const Projectspage = React.lazy(() => import('../pages/ProjectsPage/ProjectsPage'));
const ContactPage = React.lazy(()=> import('../pages/ContactPage/ContactPage'));
// const NotFoundPage = React.lazy(()=> import('../pages/404Page/404') )






export default function App() {

  return (

   
     <Switch>            
        <Route exact  path="/" >
        <Suspense fallback={< IndexSkeleton />}>
            < IndexPage />
            </Suspense>
        </Route>

        <Route exact path="/about-me" >
        <Suspense fallback={< AboutSkeleton/>}>
            < AboutPage/>
            </Suspense>
        </Route>

        <Route exact path="/projects"  >
        <Suspense fallback={ <ProjectsSkeleton/> }>
            <Projectspage/>
            </Suspense>
        </Route>

        <Route exact  path="/contact" >
        <Suspense fallback={ <ContactSkeleton/> }>
            < ContactPage />
            </Suspense>
        </Route>
       
        <Route path="*">
        <NotFoundPage />
        </Route> 

      </Switch> 

    
   
  )
}

