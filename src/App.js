import './App.css';
import { TranslateContext } from './contexts/TranslateContext';
import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import dataDoctors from './local/data.json';
import dataText from './local/text.json'
import Home from './pages/Home/Home'
import Balance from './pages/Balance/Balance';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DoctorProfile from './pages/DoctorsProfile/DoctorProfile'
import MyNotes from './pages/MyNotes/MyNotes';
import ScrollToTop from './contexts/ScrollToTop';

function App() {
  const [language, setLanguage] = useState("ru")

 
  const data = useMemo(()=>{
    const doctorsArray = dataDoctors.results.map((item)=>{

      let obj = {
        id: item.id,
        name: item.first_name + " " + item.last_name,
        date_birth: item.date_of_birth,
        price: item.price,
        img: item.profile_image,
        excperience: item.excperience_start_year,
        near_date: item.near_date,
        title: item.user_categories[0].category.title,
        user: item.user_categories[0].category
      }
    
      return obj
    })
    
    return {...dataText, results: doctorsArray}
  },[])
  console.log(data)
  return (
      <TranslateContext.Provider value={[data, language, setLanguage]}>
        <ScrollToTop/>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/doctors/:userId'  element={<DoctorProfile/>}/>
              <Route path='/balance' element={<Balance/>}/>
              <Route path='/notes' element={<MyNotes/>}/>
              <Route path='*' element={<Balance/>}/>
            </Routes>
          <Footer/>
      </TranslateContext.Provider>
    
  );
}

export default App;
