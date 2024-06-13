import React from "react";
import header from "../images/about-image.png";
function About() {
  return (
    <>
        <section className=" bg-white grid lg:grid-cols-2 lg:px-20 py-20 gap-10 items-start">
        <div className="w-full block md:hidden lg:hidden">
          <img src={header} alt="vision" />
        </div>
        <div className="border-black border-solid border-2  rounded-3xl w-full p-20 lg:p-20">
          <div className="font-bold pb-5 text-2xl text-left">Mission</div>
          <div>
            <div className="pb-5 text-lg font-semibold">
              1-2-3AllEyesOnMe LLC mission is to provide quality educational
              math services for grades prek-5th, and parents, that will ensure
              your child falls in love with math or keeps their love growing.
            </div>
            <div>
              As the originators of mathematics, it is evident that we are born
              with the understanding of numbers, but some need the proper tools
              and strategies for building proper foundations. 1-2-3AllEyesOnMe
              LLC gives your child everything they need to become mathematical
              engineers, develop strong and solid foundations, while building
              cognitive bridges for math to be processed like never before.
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block lg:block">
          <img src={header} alt="vision" />
        </div>
      </section>
      <section className="bg-yellow-500 p-10 lg:p-32">
        <div className="bg-white lg:h-[700px] p-10 lg:p-20 rounded-3xl shadow-2xl ">
          <div className="text-black text-center font-bold text-2xl pb-5">About</div>
          <div className="text-black text-left text-lg px-5 lg:px-32">
            <div className="text-center pb-5 font-bold">My name is Brandi White AKA Your Favorite Math Teacher! </div>
            <div className="pb-5 text-pretty drop-shadow-2xl">I am a proud
            native of SW Philadelphia, PA. My first employment was at a
            home-based childcare center. I was immediately hooked on seeing the
            light bulb go off in a child’s mind when they realize they can
            independently solve a problem. It was at that moment; I knew I was
            destined to be an educator. Atlanta became home in 2010 as I
            continue my educational journey. I earned a BA in Early Childhood
            Education and MA in Educational Leadership. Both degrees were
            received from the Illustrious Clark Atlanta University. I have over
            two decades of experience serving families and children in grades
            Pre-K through 5th.</div>
            <div className=" text-pretty">It is my core belief that strong relationships
            must be developed before learning can take place. I take pride in
            fostering an environment where my students feel safe, loved, seen,
            valued, and heard. My students aren’t afraid to ask questions and
            make mistakes. They tackle equations with the proper tools and
            confidence that they will be successful in the end no matter how
            many attempts it takes. Unfortunately, this isn’t the experience
            most have while in school and it leaves a negative taste in a
            person’s mouth about math. Think about it. Do you like math? How do
            you feel when it’s time to review your child’s math work? I promise
            it’s not your fault if you have any anxiety when thinking about the
            subject. I blame your math teacher. They failed to create a place
            where math was fun and exciting. But overall, they failed at making
            you feel that you <strong>COULD and WOULD</strong> be successful. I will not make
            that mistake with your child. I can turn your child’s least favorite
            subject into their favorite!</div>
          </div>
        </div>
      </section>
      <div>
      </div>
    </>
  );
}

export default About;
