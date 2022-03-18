import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import LoginSignScreen from './components/LoginSignScreen'
import HospitalSearch from './components/HospitalSearch'
import HospitalDetail from './components/HospitalDetail'
import DoctorInfo from './components/DoctorInfo'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/log" element={<LoginSignScreen />} />
          <Route path="/hospitalsearch" element={<HospitalSearch />} />
          <Route path="/hospitaldetail" element={<HospitalDetail />} />
          <Route path="/doctorInfo" element={<DoctorInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
