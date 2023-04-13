import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog1 from "../assets/devlog1.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Cafe = () => {
  const projects = [
    {
      img: devlog1,
      comp3: "CB-Dream",
      title: "CB-Dream",
      comp1: "Metodo : Maquina DE Espresso ",
      comp2: "Base Alcholica: Whisky, Ron Blanco",
      comp4: "Aromatizante : Lavanda, Butterfly Pea, Mango, Pimienta",
      comp5: "Ingredientes : ",
      comp7: "- 1 Oz de Ron Blanco",
      comp6: "- 1 Oz de Whisky",
      comp8: "- 1 Oz de Half&Half",
      comp9: "- 2 Oz de Espresso",
      preparacion: "Metodo de preparacion: Agitado o Refrescado",
      cristaleria: "Cristaleria : Vaso Irish Coffee",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
    
      <div className="container mx-auto grid md:grid-cols-1 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Café de Autor
          </h2>
          <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  <p>{project.comp3}</p>
                  {project.comp1}
                  <p></p>
                  {project.cristaleria}
                </p>
                <p>{project.comp2}</p>
                <p>{project.comp4}</p>
                <p>{project.comp5}</p>
                <p>{project.comp7}</p>
                <p>{project.comp6}</p>
                <p>{project.comp8}</p>
                <p>{project.comp9}</p>
                {project.preparacion}

                <div className="mx-auto">
                  {/* <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a> */}
                  {/* <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
          <p className="pb-5">
            CB-Dream es un café de autor único y exclusivo que combina los
            mejores granos de café de la región sur occidente antioqueño con los
            beneficios del cannabidiol (CBD). Con una tostión media, los granos
            de café tienen un perfil de sabor excepcional con notas de cata a
            limón, piña y panela, lo que los hace ideales para aquellos que
            buscan un café suave y afrutado.
          </p>
          <p className="pb-5">
            Pero eso no es todo lo que hace que el CB-Dream sea especial.
            También tiene un toque de ron blanco infundido con lavanda y
            Butterfly Pea, una flor exótica que aporta un delicado matiz azul a
            la bebida. Además, el café cuenta con un whisky infusionado con
            mango, pimienta y anís, que aporta una nota especiada y dulce.
          </p>
          <p className="pb-5">
            Por último, pero no menos importante, el CB-Dream está hecho con
            half & half, una mezcla de leche y crema que le da una textura
            cremosa y suave, y el 10% de CBD por gramo proporciona un efecto
            calmante y relajante. En resumen, el CB-Dream es un café de autor
            sofisticado y único que ofrece una experiencia sensorial
            excepcional. Desde sus notas de cata afrutadas hasta sus toques de
            ron, whisky y CBD, este café es el compañero perfecto para cualquier
            momento del día.
          </p>

          <div>
            <p className="pb-5">
            <h1>Metodo de preparacion</h1>
            <p className="pb-5">
                Para preparar un delicioso CB-Dream, el barista comienza por
                preparar un espresso en la máquina. Una vez que el espresso se
                ha extraído, se corta la cocción de forma manual para obtener el
                sabor perfecto y concentrado.
            </p>
            <p className="pb-5">
                Luego, el barista procede a preparar el cóctel dentro de la
                coctelera. Se agregan 1 oz de ron blanco, 1 oz de whisky
                infusionado con mango, pimienta y anís, 1 oz de Half & half y 2
                oz del espresso recién preparado.
            </p>
            <p className="pb-5">
                Se agita vigorosamente para mezclar todos los ingredientes y
                enfriar la bebida. A continuación, se sirve la mezcla en un vaso
                irlandés. Se completa con una generosa porción de crema batida,
                lo que aporta un toque dulce y suave a la bebida.
            </p>
            <div>
                <h1>Historia</h1>
            <p className="pb-5">
            El CB-Dream es una verdadera obra de arte en forma de café de
            autor. Inspirado en bebidas como el Irish Coffee y el
            Frappuccino, este café es una creación innovadora que combina
            sabores y técnicas de preparación de todo el mundo. Desde la
            cultura asiática y su amor por el té hasta la belleza de los
            árboles y las plantas, el CB-Dream es una expresión artística
            de la pasión por el café y la creatividad. El uso de la
            lavanda, tanto en el ron como en la presentación, evoca
            imágenes de campos morados de lavanda y la delicadeza de los
            árboles tipo zakura japonés, añadiendo una dimensión sensorial
            y visual a la experiencia del café. En resumen, el CB-Dream es
            un tributo a la belleza y la complejidad de la naturaleza, la
            cultura y la gastronomía, todo reunido en una sola taza.
        </p>
        </div>
            </p>
          </div>
        </div>

        <div className="about-img"></div>
      </div>

      
    </section>
  );
};

export default Cafe;
