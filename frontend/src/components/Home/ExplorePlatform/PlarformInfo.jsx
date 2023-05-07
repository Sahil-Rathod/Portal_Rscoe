import React from "react";
import { Link } from "react-router-dom";
import "./PlatformInfo.css";
import Welcome from "./Welcome/Welcome";
const PlarformInfo = () => {
  return (
    <>
      <Welcome />
      <div className="px-4 pb-20 py-px mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-px pb-20 lg:px-8 lg:py-px pb-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              RSCOE Initiative
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            "Forever Titans: Honoring the legacy of our graduates."
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Alumni are the living legacy of our college. Join us on our alumni
            portal to celebrate your achievements, reconnect with classmates,
            and shape the future of our institution
          </p>
        </div>
        <div className="grid pb-20 gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Alumni Directory
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Explore the Alumni Directory and discover the achievements of our
              graduates. Connect, network, and forge lasting relationships with
              your fellow alumni.Looking to reconnect with old classmates? Our
              Alumni Directory has got you covered.
            </p>
            <Link
              to="/alumni_talk"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Your Alumni Profile{" "}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Alumni can share any notable achievements or awards that they've
              received in their professional or personal life, as well as any
              significant contributions they've made to their community or
              industry.
            </p>
            <Link
              to="/profilePage"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Alumni Talk</h6>
            <p className="mb-3 text-sm text-gray-900">
              The Alumni Talk option is a valuable resource for our alumni
              community, offering a platform where graduates can connect with
              each other, learn from expert speakers, and grow both personally
              and professionally.
            </p>
            <Link
              to="/alumni_talk"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Alumni Engage</h6>
            <p className="mb-3 text-sm text-gray-900">
              The Alumni Engage section is designed to help our alumni community
              stay connected and engaged with our college/university.Alumni
              Engage offers a range of activities and resources to help you
              connect with your fellow graduates.
            </p>
            <Link
              to="/engagealumni"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="main-explore">
        <div className="explore-first-half">
          <div className="explore-links">
            <Link to="/find_alumni">
              <h3>Alumni Directory</h3>
              <p>
                Here, you can find alumni from our college, learn more about
                them, and connect with them.
              </p>
            </Link>
          </div>
          <div className="explore-links">
            <Link to="/profilePage">
              <h3>Your Alumni Profile</h3>
              <p>
                You may review your individual profile's status and modify it
                here.
              </p>
            </Link>
          </div>
        </div>
        <div className="explore-second-half">
          <div className="explore-links">
            <Link to="alumni_talk">
              <h3>Alumni Talk</h3>
              <p>
                You can learn more about placement, study tools, interview
                preparation.
              </p>
            </Link>
          </div>
          <div className="explore-links">
            <Link to="/feed">
              <h3>Updates By Alumni</h3>
              <p>
                You can browse alumni reviews here and post your own as well.
              </p>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PlarformInfo;
