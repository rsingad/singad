import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Homepage from "./components/home/homepage";
import Header from "./components/headerSection/header";
import About from "./components/aboutpage/about";
import FooterPage from "./components/footer/footer";
import OverLatestBlog from "./components/over latest blog/latestblog";
import SignUpForm from "./components/signup/signuppage";
import LoginForm from "./components/login/loginpage";
import DesbordHeader from "./components/dashbord/header/dheader";
import { useEffect } from "react";
import Profile from "./components/dashbord/profile/profile";
import MyHomePage from "./components/dashbord/homepage/myhome";
import Tour from "./components/dashbord/tours/tours";
import Travel from "./components/dashbord/travel/travel";
import service from "./components/services/service";
import Services from "./components/services/service";
import OsmPkg from "./components/aosmpackg/osmpkg";
import PopularDestination from "./components/populardes/popdestination";
import Testomoniyal from "./components/testomoniyal/testtomon";
import NotFound from "./components/notfound/notfound";
import Contect from "./components/contect/contect";
import Destinationapi from "./components/dashbord/destination add/dess";
import Privetpkgs from "./components/dashbord/privetpackag/privtpkgs";
import PrivetPkgDetail from "./components/dashbord/privetpackgdetail/privetpkgdetail";
import BuyNow from "./components/dashbord/buynowpage/buynowpage";
import BookingHis from "./components/dashbord/profile/bookinghis/bookinghis";
import WishlistPage from "./components/dashbord/profile/cart/cart";
import Chatmain from "./components/dashbord/profile/chatmanagement/chatmain";
import AdminPanel from "./components/dashbord/profile/chatadmin/adminpanl";


function App() {
  useEffect(() => {
    // Ensure the default value for isLoggedIn is set to false
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
      // console.log()
    }
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <DesbordHeader/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<OverLatestBlog/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/SignUpForm" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/packages" element={<OsmPkg/>} />
        <Route path="/destinetion" element={<PopularDestination/>}/>
        <Route path="/testomonial" element={<Testomoniyal/>}/>
        {/* <Router path="/dashboard/:apiID" element={<deshboard/>} */}
        {/* <Route path="DashboardHeader" element={<DesbordHeader/>} /> */}
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/privethomepage" element={<MyHomePage/>}/>
        <Route path="Tours" element={<Tour/>} />
        <Route path="/contect" element={<Contect/>} />
        <Route path="/adminDES" element={<Destinationapi/>}/>
        <Route path="/privetpkgs" element={<Privetpkgs/>} />
        <Route path="/pkgDetail/:ID" element={<PrivetPkgDetail/>} />
        <Route path="/:ID/bookNow" element={<BuyNow/>}/>
        <Route path="/bookinghistory" element={<BookingHis/>}/>
        <Route path="/wishlistpage" element={<WishlistPage/>} />
        <Route path="/chatbox" element={<Chatmain/>}/>
        <Route path="/chatadmin" element={<AdminPanel/>}  />
        <Route path="*" element={<NotFound/>}/>
        {/* <Route path="/travel" element={<Travel/>}/> */}

      </Routes>
      <FooterPage/>
    </BrowserRouter>
  );
}

export default App;
