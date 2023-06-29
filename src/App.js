import './App.css';
import { TranslateContext } from './contexts/TranslateContext';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import data from './local/RU/dataRU.json';

import Home from './pages/Home/Home'
import Balance from './pages/Balance/Balance';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DoctorProfile from './pages/DoctorsProfile/DoctorProfile'
import MyNotes from './pages/MyNotes/MyNotes';
import ScrollToTop from './contexts/ScrollToTop';
import store from './store';

function App() {
  return (
    <TranslateContext.Provider value={[data]}>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors/:userId' element={<DoctorProfile />} />
          <Route path='/balance' element={<Balance />} />
          <Route path='/notes' element={<MyNotes />} />
          <Route path='*' element={<Balance />} />
        </Routes>
        <Footer />
      </Provider>
    </TranslateContext.Provider>

  );
}

export default App;
