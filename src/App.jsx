import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from './paths'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsSection from './components/NewsSection'
import Home from './pages/Home'
import About from './pages/About'
import Achievments from './pages/Achievements'
import Conditions from './pages/Conditions'
import Contacts from './pages/Contacts'
import Documents from './pages/Documents'
import Gallery from './pages/Gallery'
import Infrastructure from './pages/Infrastructure'
import Management from './pages/Management'
import StudyPlan from './pages/StudyPlan'
import StudyDetail from './pages/StudyDetail'
import Directions from './pages/Directions'
import AdminNews from './pages/AdminNews'
import NewsDetail from './pages/NewsDetail'
import Login from './pages/Login'
import NewsList from './pages/NewsList'
import Director from './pages/Director'
import Deputy from './pages/Deputy'
import ScrollToTop from './components/ScrollToTop'
import DirectionsDetail from './pages/DirectionsDetail'
import Schedule from './pages/Schedule'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.DIRECTIONS} element={<Directions />} />
        <Route path={`${ROUTES.DIRECTIONS}/:id`} element={<DirectionsDetail />} />
        <Route path={ROUTES.ACHIEVEMENTS} element={<Achievments />} />
        <Route path={ROUTES.CONDITIONS} element={<Conditions />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.DOCUMENTS} element={<Documents />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.INFRASTRUCTURE} element={<Infrastructure />} />
        <Route path={ROUTES.MANAGEMENT} element={<Management />} />
        <Route path={ROUTES.STUDYPLAN} element={<StudyPlan />} />
        <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
        <Route path={`${ROUTES.STUDYPLAN}/:id`} element={<StudyDetail />} />
        <Route path={ROUTES.NEWSSECTION} element={<NewsSection />} />
        <Route path={ROUTES.NEWSLIST} element={<NewsList />} />
        <Route path={ROUTES.DIRECTOR} element={<Director />} />
        <Route path="/management/deputy/:id" element={<Deputy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App