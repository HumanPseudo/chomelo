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
            Hola a todos, ¡bienvenidos a mi blog! Mi nombre es David y soy un
            artista musical, productor musical, ingeniero de sistemas, barman y
            barista. Sí, has leído bien. Tengo muchos roles y me encantan todos.
            Comencé a hacer música cuando era niño, tocando la guitarra y
            cantando en el coro, así que decidí estudiar producción musical en
            la universidad.
          </p>
          <p className="pb-5">
            También estudié ingeniería de sistemas en la universidad.
            Actualmente trabajo como ingeniero de sistemas para una gran
            empresa, donde les ayudo a resolver problemas técnicos. También me
            encanta trabajar con personas y hacerlas felices. Disfruto mis trabajos
            porque me permiten interactuar con diferentes tipos de personas y
            aprender cosas nuevas. Gracias por leer y manténganse atentos para
            más actualizaciones sobre mi vida como ser humano.
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
