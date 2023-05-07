import React, { useRef } from "react";
import "./GuestLecture.css";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";

function GuestLecture() {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkvz4r4",
        "template_mlow397",
        form.current,
        "b6fBoNzGVxfcKo_CQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          history.push("/engagealumni");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="guest-main ">
      <div className="guest-card rounded-lg ">
        <div class="guest-container rounded-lg ">
          <form
            id="contact"
            action=""
            method="post"
            ref={form}
            onSubmit={sendEmail}
          >
            <h3 className="font-bold">Guest Lecture</h3>

            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                name="user_name"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                name="user_email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                name="user_number"
                tabindex="3"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                name="message"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GuestLecture;
