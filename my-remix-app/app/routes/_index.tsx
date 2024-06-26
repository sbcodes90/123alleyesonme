import type { MetaFunction } from "@remix-run/node";
import logo from "../images/new-header.png";
import { Link } from "@remix-run/react";
import Footer from "./Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "123AllEyesOnMe LLC" },
    { name: "description", content: "Tutoring service for kids and parents" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-teal-200 min-h-screen">
        <img src={logo} alt="logo" />
        <Link to="/home/welcome"> <button className="bg-yellow-400 px-16 py-5 rounded-3xl font-black -translate-y-10">Enter the hive</button></Link>
      </div>
    
    </>
  );
}
