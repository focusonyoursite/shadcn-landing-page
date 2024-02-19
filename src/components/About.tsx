// import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="py-12 border rounded-lg bg-muted/50">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          
          <div className="flex flex-col justify-between bg-green-0">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                  Is {" "}
                </span>
                Dennis Schouten   
                 <span className="ml-3 text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                    al dood?{" "}
                </span>
              </h2>
              <p className="mt-4 text-xxl text-muted-foreground">
                Nope, Dennis leeft nog! 
              </p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};
