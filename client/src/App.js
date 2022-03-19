import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import LoginSignScreen from './components/LoginSignScreen'
import HospitalSearch from './components/HospitalSearch'
import HospitalDetail from './components/HospitalDetail'
import DoctorInfo from './components/DoctorInfo'
import HospitalDashboard from './components/HospitalDashboard'
import Doctordetail from './components/Doctordetail'
import UpdateHosInfo from './components/UpdateHosInfo'
import UpdateDocInfo from './components/UpdateDocInfo'
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
          <Route path="/hospitaldashboard" element={<HospitalDashboard />} />
          <Route path="/doctordetail" element={<Doctordetail />} />
          <Route path="/updatehosinfo" element={<UpdateHosInfo />} />
          <Route path="/updatedocinfo" element={<UpdateDocInfo />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
