import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import Slider from "./Slider";
import Slider_home from "./Slider_home";

const Home = () => {
  const [highly_trends, setHighlyTrends] = useState([]);
  const [education, setEducation] = useState([]);
  const [productivity, setProductivity] = useState([]);
  const [healthcare, setHealthcare] = useState([]);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = "App Store";
    }, []);

  useEffect(() => {
    fetch("highly_trends.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setHighlyTrends(data); // Avoid fetching same file twice
      });
  }, []);

  useEffect(() => {
    fetch("education.json")
      .then((res) => res.json())
      .then((eduData) => setEducation(eduData));
  }, []);

  useEffect(() => {
    fetch("productivity.json")
      .then((res) => res.json())
      .then((prodData) => setProductivity(prodData));
  }, []);

  useEffect(() => {
    fetch("healthcare.json")
      .then((res) => res.json())
      .then((healthData) => setHealthcare(healthData));
  }, []);

  return (
    <div className="w-full max-w-[92%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full mt-5 sm:mt-4 md:mt-6">
        <Slider data={data} />
      </div>

      <div className="w-full text-base-content text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-4 md:my-8 px-4">
        <h1>Trending, Top-Rated, Unmissable <br /> Your App Journey <br /> Starts Here</h1>
      </div>

      {/* Highly trends */}
      <Section title="Highly Trends Apps 🚀🚀" data={highly_trends} />

      {/* Education Apps */}
      <Section title="Education Apps 📖📖" data={education} />

      {/* Productivity Apps */}
      <Section title="Productivity Apps 💡⚡" data={productivity} />

      {/* Healthcare Apps */}
      <Section title="Healthcare Apps 👨‍🔬👩‍🔬" data={healthcare} />

      {/* Repeat Highly Trends (if needed) */}
      <Section title="Highly Trends Apps 🚀🚀" data={highly_trends} />
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, data }) => (
  <div className="w-full">
    <h1 className="my-6 sm:my-8 text-base-content text-xl sm:text-2xl md:text-3xl font-semibold">
      {title}
    </h1>
    <Slider_home data={data} />
  </div>
);

export default Home;
