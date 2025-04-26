import React from 'react';
import "../index.css";
import "../Responsive.css";
import Navbar from "../components/Navbar";
import Gemini from '../components/Gemini';
import Who from "../components/Who";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Target from "../components/Target";
import Earl from '../components/Earl';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Gemini/>
      <Who />
      <Vision />
      <Mission />
      <Target />
      <Earl/>
    </div>
  );
}