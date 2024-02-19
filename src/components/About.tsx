// import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Is {" "}
                </span>
                Dennis Schouten   
                 <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text ml-3">
                    al dood?{" "}
                </span>
              </h2>
              <p className="text-xxl text-muted-foreground mt-4">
                Nope, Dennis leeft nog! 
              </p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};
