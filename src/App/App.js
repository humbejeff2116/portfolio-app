








import React,{Suspense} from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';

const IndexPage = React.lazy(() => import('../pages/IndexPage/IndexPage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage/AboutPage'));
const Projectspage = React.lazy(() => import('../pages/ProjectsPage/ProjectsPage'));






export default function App() {

  return (

   
     <Switch>            
        <Route exact  path="/" >
        <Suspense fallback={<div>Loading...</div>}>
            < IndexPage />
            </Suspense>
        </Route>

        <Route exact path="/about-me" >
        <Suspense fallback={<div>Loading...</div>}>
            < AboutPage/>
            </Suspense>
        </Route>

        <Route exact path="/projects"  >
        <Suspense fallback={<div>Loading...</div>}>
            <Projectspage/>
            </Suspense>
        </Route>
        
        {/* <Route path="*">
        <Woops404 />
        </Route>  */}

      </Switch> 

    
   
  )
}

