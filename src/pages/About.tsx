import React from "react";
import aboutPic from "/images/about.jpg";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="font-serif p-8 min-h-screen max-w-full bg-[url('/images/background.png')] bg-cover bg-center">
      <h1 className="font-bold text-5xl pb-3">THE BLOOMING LAND,</h1>
      <div className="text-lg">
        <h2 className="mt-3">
          Refer to a space where everyone is welcome to bloom and grow, a
          <br />
          place where we each shine in our own unique way; in other words,
          <br />
          it's a 'place for everyone to shine and rise.'
        </h2>
        <br />
        <h2>
          The garden of life is filled with flowers, each representing
          <br />
          individuals who strive to succeed in life. Yet, life doesn't unfold
          the
          <br />
          same way for all of us, and we cannot follow the same patterns. So,
          <br />
          while some flowers are blooming, others are still waiting for their
          <br />
          moment, and that's perfectly natural—each has its own time, just like
          us.
        </h2>
        <br />
        <h2>
          We cannot force a flower to bloom, just as we cannot rush the <br />
          timing of life. There will be ups and downs; we can't fast-forward to
          <br />
          the good parts, nor can we savor the sweet without first tasting
          <br />
          the bitter. But as long as you patiently water and care for the
          <br />
          flower, its time will come, and it will bloom beautifully - I believe.
        </h2>
      </div>
      <img
        src={aboutPic}
        alt="about page pic"
        className="mt-5 max-w-full w-full h-50"
      />
      <Link
        to="/content"
        className="absolute bottom-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Explore our contents?
      </Link>
    </div>
  );
};

export default About;
