import React from "react";
import VisionStatement from "../images/vision-quote.gif";
import Navigation from "./navigation";

function About() {
  return (
    <div>
        <Navigation />
      <div className="flex justify-center items-center">
        <img src={VisionStatement} alt="vision-statement" />
      </div>
      <div>
        <div className="bg-white grid grid-cols-1">
          <div className="p-24">
            {/* <img src={VisionStatement} alt="vision-statement" /> */}

            <div className="font-black pb-5 text-2xl">Mission</div>
            <div className="flex-none">
              1-2-3AllEyesOnMe LLC mission is to provide quality educational
              math services for grades prek-5th, and parents, that will ensure
              your child falls in love with math or keeps their love growing. As
              the originators of mathematics, it is evident that we are born
              with the understanding of numbers, but some need the proper tools
              and strategies for building proper foundations. 1-2-3AllEyesOnMe
              LLC gives your child everything they need to become mathematical
              engineers, develop strong and solid foundations, while building
              cognitive bridges for math to be processed like never before.
            </div>
            <div>
              <div className="font-black pt-5 pb-5 text-2xl">About</div>
              <div>
                My name is Brandi White AKA Your Favorite Math Teacher! I am a
                proud native of SW Philadelphia, PA. My first employment was at
                a home-based childcare center. I was immediately hooked on
                seeing the light bulb go off in a child’s mind when they realize
                they can independently solve a problem. It was at that moment; I
                knew I was destined to be an educator. Atlanta became home in
                2010 as I continue my educational journey. I earned a BA in
                Early Childhood Education and MA in Educational Leadership. Both
                degrees were received from the Illustrious Clark Atlanta
                University. I have over two decades of experience serving
                families and children in grades Pre-K through 5th. It is my core
                belief that strong relationships must be developed before
                learning can take place. I take pride in fostering an
                environment where my students feel safe, loved, seen, valued,
                and heard. My students aren’t afraid to ask questions and make
                mistakes. They tackle equations with the proper tools and
                confidence that they will be successful in the end no matter how
                many attempts it takes. Unfortunately, this isn’t the experience
                most have while in school and it leaves a negative taste in a
                person’s mouth about math. Think about it. Do you like math? How
                do you feel when it’s time to review your child’s math work? I
                promise it’s not your fault if you have any anxiety when
                thinking about the subject. I blame your math teacher. They
                failed to create a place where math was fun and exciting. But
                overall, they failed at making you feel that you COULD and WOULD
                be successful. I will not make that mistake with your child. I
                can turn your child’s least favorite subject into their
                favorite!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;