import React, { useState } from 'react';
import './style.css';
import { HeadMenu } from './MyComponents/HeadMenu';
import { ConfConf } from './MyComponents/ConfConf';
import { ConfConf2 } from './MyComponents/ConfConf2';
import { FpgaSection } from './MyComponents/FpgaSection';
import { LoginMenu } from './LoginComponents/LoginMenu';
import { Pricing } from './MyComponents/Pricing';
import ProtectedRoute from './ProtectedRoute'; // import the new component

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [showBitFile, setShowBitFile] = useState(false);

  const handleClick = () => {
    setShowBitFile(true);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginMenu />
        </Route>
        <ProtectedRoute path="/dashboard" exact>
          <HeadMenu />
          <section className="container-fluid">
            <ConfConf handleClick={handleClick} />
            <ConfConf2 showBitFile={showBitFile} />
          </section>
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard/fpga" exact>
          <HeadMenu />
          <FpgaSection />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard/pricing" exact>
          <HeadMenu />
          <Pricing />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
