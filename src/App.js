import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import routes from './routes/route';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App = () => {
  const [account, setAccount] = useState('');

  const purchase = (amount) => {
    console.log("amount =>", amount, "address=>", account);
  }

  useEffect(() => {
    console.log(account);
    setAccount(account);
  }, [account]);

  return (
    <BrowserRouter>
      <ContactUs />
      <Header 
        account={setAccount}
      />
      <AppLayout>
        <Routes>
          {routes.map((route, idx) => (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={<route.component 
                  onClick={purchase}
                />}
              />
            )
          ))}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AppLayout>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
