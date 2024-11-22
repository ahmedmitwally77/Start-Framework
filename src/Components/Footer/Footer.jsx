import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2C3E50] text-white ">
        <div className="max-w-screen-xl mx-auto ">
          <div className="container mx-auto">
            <div className="footer-info flex justify-between text-center flex-wrap md:gap-0 gap-16 py-24 px-6">
              <div className="location md:w-1/3 w-full ">
                <h3 className="text-2xl uppercase font-bold">Location</h3>
                <p className="mt-2 mb-4">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="about-web md:w-1/3 w-full">
                <h3 className="text-2xl uppercase font-bold">About The Web</h3>
                <ul className="mt-4 flex align-center justify-center gap-3">
                  <li>
                    <Link>
                      <i className="fa-brands fa-facebook-f border p-3 rounded-full"></i>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-twitter border p-3 rounded-full"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-linkedin-in border p-3 rounded-full"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <i className="fa-brands fa-instagram border p-3 rounded-full"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="about-freelanser md:w-1/3 w-full">
                <h3 className="text-2xl uppercase font-bold">
                  About Freelanser
                </h3>
                <p className="mt-4 font-medium">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer footer-center  text-white bg-[#151E26] p-6">
          <p className="text-lg">
            Copyright © Your Website - {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
