import type { MetaFunction } from "@remix-run/node";
import logo from "../images/header.png";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-full" />
    
      </div>
    </>
  );
}
