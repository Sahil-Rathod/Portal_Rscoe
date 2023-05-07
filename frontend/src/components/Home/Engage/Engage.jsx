import React from "react";
import "./Engage.css";
import { Link } from "react-router-dom";
function Engage() {
  return (
    <div className="engmain flex justify-center items-center flex-col">
      <div className="head-text font-bold mb-16">Alumni Engage Program</div>
      <div className="engcontainer space-y-16 drop-shadow-2xl  ">
        <div className="engcontent">
          <div className="sub_head-text">Be a Mentor</div>
          <div className="p-text mb-4">
            "A mentor empowers a person to see a possible future, and beleive it
            can be obtained". Through your rich work experience,anecdotes and
            life lessons, you have the chance to positively impact the life of a
            young COEP student and show him/her the right path. Come, be an
            Alumni Mentor, and experience the joy of giving back to the JSPM
            student community.
          </div>
          <Link to="/guestlecture">
            <button className="button-engage space-y-8">Click here</button>
          </Link>
        </div>

        <div className="engcontent">
          <div className="sub_head-text">Share an Achievement</div>
          <div className="p-text mb-4">
            We all at COEP take extreme pride in each of your achievements and
            endeavours. Your ambitious strides continue to be an inspiration for
            all of us to emulate. Do feel free to share with us your scholastic,
            industrial or extra-curricular achievements. The entire RSCOE
            fraternity will love to read about their alumni excelling in various
            spheres.
          </div>
          <Link to="/guestlecture">
            <button className="button-engage space-y-8">Click here</button>
          </Link>{" "}
        </div>

        <div className="engcontent">
          <div className="sub_head-text">Guest lecture</div>
          <div className="p-text mb-4">
            The highest form of service is by knowledge dissemination. We will
            be highly obliged if you can share your key industrial
            learnings/skills/expertise with our current students in the form of
            a Guest Lecture session on campus. Do connect with us to discuss the
            same..
          </div>
          <Link to="/guestlecture">
            <button className="button-engage space-y-8">Click here</button>
          </Link>{" "}
        </div>

        <div className="engcontent">
          <div className="sub_head-text">Webinar</div>
          <div className="p-text mb-4">
            We are working towards hosting Online Webinar sessions for our
            students/alumni to help us all learn from each other. Do connect
            with us if you wish to host a skill/domain/sector specific webinar
            with the RSCOE community.
          </div>
          <Link to="/guestlecture">
            <button className="button-engage space-y-8">Click here</button>
          </Link>
        </div>
        <div className="engcontent">
          <div className="sub_head-text">
            Volunteer for updating Batch database
          </div>
          <div className="p-text mb-4">
            We have been constantly working towards keeping our alumni database
            up to date. In this quest, we wish to seek your support in improving
            our database. If you wish to provide any updated information of your
            batchmates/yourself, do get in touch with us.
          </div>
          <Link to="/guestlecture">
            <button className="button-engage space-y-8">Click here</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Engage;
