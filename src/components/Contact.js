import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          Actualmente estoy abierto a propuestas. Si quieres discutir algo, no
          dudes en enviarme un correo electrónico o llamarme.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> cadalagu@hotmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +57 3182441439
        </p>
      </div>
    </section>
  );
};

export default Contact;
