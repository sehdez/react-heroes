import { Navigate, Route, Routes } from "react-router-dom"
import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/heros/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"


export const DashboardRoutes = () => {
  return (
    <>  
    <Navbar />
      <div className=' container-fluid ' >
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          
          <Route path="/" element={<MarvelScreen />} />
          <Route  path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
    </>
  )
}
