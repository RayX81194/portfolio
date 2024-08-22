import Image from "next/image";

export default function Contact() {
  return (
    <>
    <section className="relative px-7 gap-x-10 flex items-center justify-center top-32">
      <div>
      <h1 className="text-white text-8xl">Contact us</h1>
      <p className="text-white leading-6 mt-10 max-w-[700px]">If you have any question regarding to the project,<br></br> feel free to ask us.</p>    
      </div>
      <div className="w-[600px] h-[400px]">
        <h1 className="text-white mb-3">Your Email</h1>
        <input type="email" placeholder="Enter your Email" className="bg-black border text-white placeholder-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent h-[60px] w-[500px] mb-3 px-3"></input>
        <h1 className="text-white mb-3">Write a Message</h1>
        <textarea placeholder="Enter your Message" className="h-[200px] w-[500px] text-white placeholder-gray-800 bg-black border focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent  border-gray-600 p-3"></textarea>
        <button className="mt-3 border hover:text-yellow transition-all hover:border-yellow-500 border-gray-600 px-10 py-4 text-white">Send &nbsp;&nbsp;&nbsp;{"->"}</button>
      </div>
    </section>
    </>
  );
}
