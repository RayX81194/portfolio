import Image from "next/image";

export default function Work() {
  return (
    <>
      <section className="relative pb-36 px-10 top-32">
      <div className="heading">
      <h1 className="text-white text-8xl">Work</h1>   
      <p className="text-white mt-10 tracking-wider max-w-[800px]">Modern web projects showcasing responsive design, interactive UI/UX, API integration, and custom-styled elements for diverse applications.</p>
      </div>
      <div className="projects flex flex-col gap-y-10 justify-between mt-20">
        <div className="project-1 flex items-start justify-between ">
            <div className="text">
              <h1 className="text-yellow mb-2 text-sm">website</h1>
              <h1 className="text-white text-4xl max-w-[625px]">pawrangers - a pet adoption website</h1>
              <h1 className="text-2xl mt-4" ><a className="text-white hover:text-yellow transition-all" href="">VISIT {"->"}</a></h1>
            </div>
            <div className="img">
              <img src="one.png" className="w-[1000px] h-[500px]" />
            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="project-2 flex items-start justify-between ">
            <div className="text">
              <h1 className="text-yellow mb-2 text-sm">website</h1>
              <h1 className="text-white text-4xl max-w-[625px]">onizuka - anime and manga search<br></br> website</h1>
              <h1 className="text-2xl mt-4" ><a className="text-white hover:text-yellow transition-all" href="">VISIT {"->"}</a></h1>
            </div>
            <div className="img">
              <img src="five.png" className="w-[1000px] h-[500px]" />
            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="project-3 flex items-start justify-between ">
            <div className="text">
              <h1 className="text-yellow mb-2 text-sm">website</h1>
              <h1 className="text-white text-4xl max-w-[625px]">Cortex - A Web Agency Website</h1>
              <h1 className="text-2xl mt-4" ><a className="text-white hover:text-yellow transition-all" href="">VISIT {"->"}</a></h1>
            </div>
            <div className="img">
              <img src="four.png" className="w-[1000px] h-[500px]" />
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
