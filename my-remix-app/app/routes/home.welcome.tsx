import React from "react";
import hive from "../images/WelcomeToTheHive.png";
import beeIcon from "../images/bee.png";
import honeycomb from "../images/honey-comb.png";
import miniHive from "../images/sweet.png";
import bee from "../images/laugh.png";


function welcome() {
  return (
    <>
      <div className="grid grid-row justify-center items-center  min-h-screen bg-cyan-200">
        <img src={hive} alt="hive" />
      </div>
      <section className="lg:p-20">
        <div className="px-52">
          <div className="text-3xl font-black pb-5">What we're learning:</div>
          <div className="text-lg font-medium">
            <strong>What’s This “NEW MATH”?</strong> It is my personal belief that today’s “NEW
            MATH” helps develop our children into critical thinking mathematical
            engineers. Engineers have numerous ways to process information and
            solve problems. “New Math” allows students to decompose and analyze
            numbers in ways we could have never imagined while in elementary
            school. It promotes critical thinking and number fluency. Yes, it
            can be challenging and overwhelming to assist/review math
            assignments because we did not learn the common core way when we
            were in school but, it is needed in today’s 21st century society.
            Don’t worry, we are in this together! I have created a program
            specifically for parents to teach you everything you need to assist
            your child with their assignments. My Parent Boot Camps (make link
            to go to that tab) are tutoring sessions for adults where you become
            the student and learn all the skills and strategies they are using
            in class.
          </div>
        </div>
        </section>
        <section>
        <div className="bg-yellow-100 text-center px-40 py-40">
          <div className="text-3xl font-black pb-20">Programs</div>
          <div className="grid lg:grid-cols-4 gap-5 justify-center	">
            <div className="bg-yellow-500 hover:bg-teal-200 p-20 rounded-3xl font-bold text-2xl">
              <div><img src={beeIcon} alt="beeIcon" /></div>
              One-on-One Tutoring</div>
            <div className="bg-yellow-500 hover:bg-teal-200 p-20 rounded-3xl font-bold text-2xl">
            <div><img src={honeycomb} alt="beeIcon" /></div>
Parent Bootcamp</div>
            <div className="bg-yellow-500 hover:bg-teal-200 p-20 rounded-3xl font-bold text-2xl">
            <div><img src={miniHive} alt="beeIcon" /></div>
              Mathematics in the Park  </div>
            <div className="bg-yellow-500 hover:bg-teal-200 p-20 rounded-3xl font-bold text-2xl">
            <div><img src={bee} alt="beeIcon" /></div>

              Mathematician Toolbox </div>
          </div>
        </div>
      </section>
      <section className=" p-40 flex flex-col items-center">
        <header className="text-center text-3xl font-bold pb-40">Testimonials</header>
      <button className="text-center text-1xl font-bold bg-black text-white px-10 py-5 rounded-3xl">Become a Bee</button>

      </section>

    </>
  )
}

export default welcome;
