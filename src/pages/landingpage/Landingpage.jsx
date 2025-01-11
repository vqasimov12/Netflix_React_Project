import { useEffect, useState } from "react";
import Entry from "landingComponents/Entry";
import Arch from "landingComponents/Arch";
import Trending from "landingComponents/Trending";
import Navbar from "landingComponents/Navbar";
import ReasonsToJoin from "landingComponents/ReasonsToJoin";
import FAQ from "landingComponents/FAQ";
import Footer from "common/components/Footer";
import { ThemeStore } from "common/Store.js";
import { useStore } from "zustand";
import { useNavigate } from "react-router";

const Landingpage = () => {
  const { accessToken } = useStore(ThemeStore);
  const {navigate}=useNavigate()
  const [scrollY, setScrollY] = useState(0);
  const handleScroll=()=>{
    setScrollY(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return()=>{
      window.removeEventListener("scroll",handleScroll)
    }
    
  },[])

  useEffect(()=>{
if(accessToken!=="")
  navigate("/home")
},[])
  return (
    <div id="landing" className="overflow-hidden relative bg-[#000000]">
      <Navbar />
      <Entry />
      <Arch />
      <div className="px-6 sm:px-8 lg:px-[148px] flex flex-col">
        <Trending scrollY={scrollY}/>
        <ReasonsToJoin />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Landingpage;
