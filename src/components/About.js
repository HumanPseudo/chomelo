import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi everyone, welcome to my blog! My name is David and I'm a music
            artist, music producer, systems engineer, barman, and barista. Yes,
            you read that right. I wear many hats and I love them all. I started
            making music when I was a kid, playing the guitar and singing in the
            choir so I decided to study music production in college.
          </p>
          <p className="pb-5">
            I studied systems engineering in college as well, Actually I'm
            working as a systems engineer for a large company, where I help them
            solve technical problems. I also love
            working with people and making them happy. That's why I have two
            jobs as a barman and a barista. I enjoy both jobs because they allow
            me to interact with different kinds of people and learn new things.
            Thank you for reading and stay tuned for more updates on my life as
            a human
          </p>

          {/* <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p> */}

          {/* <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p> */}
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
