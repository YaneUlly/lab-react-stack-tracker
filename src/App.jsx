import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CompaniesData from './companies.json';
import TechnologiesData from './technologies.json';
import Navbar from './components/Navbar';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const [companies, setCompanies] = useState(CompaniesData);
  const [technologies, setTechnologies] = useState(TechnologiesData);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route
          path='/company/:companySlug'
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path='/tech/:slug'
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
