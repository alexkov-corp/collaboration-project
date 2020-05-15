import React, {Suspense, lazy} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./router-path";
import './routes.scss'
import Preloader from '../preloader/Preloader';
const Home = lazy(() => import('../home/Home'));
const Collections = lazy(() => import('../collections/Collections'));
const Boutique = lazy(() => import('../boutique/Boutique'));
const Measure = lazy(() => import('../measure/Measure'));
const Corporate = lazy(() => import('../corporate/Corporate'));
const Services = lazy(() => import('../services/Services'));
const StoreLocator = lazy(() => import('../storeLocator/StoreLocator'));
const PressRoom = lazy(() => import('../pressRoom/PressRoom'));
const Careers = lazy(() => import('../careers/Careers'));
const Social = lazy(() => import('../social/Social'));
const Contacts = lazy(() => import('../contacts/Contacts'));
const Navigation = lazy(() => import('../navigation/Navigation'));
const PageNotFound = lazy(() => import('../pageNotFound/pageNotFound'));

const Routes = () => {
  console.log(routes,'navigation')
  const {
    root,
    collections,
    boutique,
    measure,
    corporate,
    services,
    storeLocator,
    pressRoom,
    careers,
    social,
    contacts,
    navigation
  } = routes;
  return (
      <React.Fragment>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path={root.link} component={Home}/>
            <Route path={collections.link} component={Collections}/>
            <Route path={boutique.link} component={Boutique}/>
            <Route path={measure.link} component={Measure}/>
            <Route path={corporate.link} component={Corporate}/>
            <Route path={services.link} component={Services}/>
            <Route path={storeLocator.link} component={StoreLocator}/>
            <Route path={pressRoom.link} component={PressRoom}/>
            <Route path={careers.link} component={Careers}/>
            <Route path={social.link} component={Social}/>
            <Route path={contacts.link} component={Contacts}/>
            <Route path={navigation.link} component={Navigation}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Suspense>
      </React.Fragment>
  );
};

export default Routes;