import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../components/Home';
import fullProyect from '../components/FullProyect';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';



const App = () => {
    return(
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/proyects" component={fullProyect} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />

                    <Route component={NotFound} />

                </Switch>
            </Layout>
        </HashRouter>
    )
}

export default App;


