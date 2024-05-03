import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              As a dedicated Full Stack Developer, I bring a comprehensive set of skills to the table, enabling me to deliver innovative and reliable solutions for your projects. With expertise in web development, frontend development, backend development, database management, project management, and version control, I offer a holistic approach to building and maintaining web applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development Meter" />
                  <h5>Web Development</h5>
                  <p>
                    Crafting robust and efficient backend solutions while
                    maintaining versatility across the entire development stack.
                  </p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Frontend Development Meter" />
                  <h5>Frontend Development</h5>
                  <p>
                    Expertise in building dynamic and interactive user
                    interfaces using technologies like Next.js, React.js, and
                    Tailwind CSS.
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Backend Development Meter" />
                  <h5>Backend Development</h5>
                  <p>
                    Proficient in developing scalable and efficient backend
                    systems utilizing Node.js, Express.js, and Prisma ORM for
                    database management.
                  </p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Database Management Meter" />
                  <h5>Database Management</h5>
                  <p>
                    Experience working with various databases such as PostgreSQL
                    and MongoDB, ensuring data integrity and optimal
                    performance.
                  </p>
                </div>
                {/* Additional slides based on your bio */}
                <div className="item">
                  <img src={meter2} alt="Project Management Meter" />
                  <h5>Project Management</h5>
                  <p>
                    Managing projects efficiently on personal VPS server running
                    Ubuntu, ensuring optimal performance and reliability.
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Version Control Meter" />
                  <h5>Version Control</h5>
                  <p>
                    Deep understanding and implementation of version control
                    using Git, ensuring organized and collaborative development
                    processes.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
