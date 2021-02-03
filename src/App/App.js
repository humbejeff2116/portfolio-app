








import React,{Suspense} from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import IndexSkeleton from '../components/skeleton/AppSkeleton';
import  {AboutSkeleton,ProjectsSkeleton} from '../components/skeleton/AppSkeleton';
const IndexPage = React.lazy(() => import('../pages/IndexPage/IndexPage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const Projectspage = React.lazy(() => import('../pages/ProjectsPage/ProjectsPage'));






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
        
        {/* <Route path="*">
        <Woops404 />
        </Route>  */}

      </Switch> 

    
   
  )
}

