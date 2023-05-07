import React from "react";
import Principle from "../../About/Images/PrincipalIMG.jpeg";
import Tpo from "../../About/Images/TPO.jpeg";

function Review() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class=" mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Principle}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 class="title-font text-3xl mb-4 font-medium text-gray-900">
              Dr. R.K Jain
              <br />
              <h3 class="hidden lg:inline-block text-xl">Director, RSCOE</h3>
            </h2>
            <p class="mb-8 leading-relaxed text-lg">
              Dear Friends,
              <br /> It is with immense pride, that I introduce you to an
              entirely new approach of learning in our college. An approach,
              where traditional methods of learning go hand in hand with modern
              learning techniques, keeping with the current trends and
              technology. We facilitate our students to excel academically and
              to develop their personalities in diverse fields. To this end, we
              have complemented academics with other developmental activities
              such as performing arts, sports, hobbies and technical clubs, to
              name a few.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 class="title-font text-3xl mb-4 font-medium text-gray-900">
              Dr. S P Rao Borde
              <br />
              <h3 class="hidden lg:inline-block text-xl">
                Dean of SI&IR's, RSCOE
              </h3>
            </h2>
            <p class="mb-8 leading-relaxed text-lg">
              Dear Friends, From The Dean of SI&IR's Desk,
              <br /> I would like to introduce our campus, Rajarshi Shahu
              College of Engineering (RSCOE), an autonomous institute which is
              in the band 250 to 300 of MHRD-NIRF 2022 and is also accredited by
              NAAC and NBA. Our college is the flagship institute of JSPM and
              TSSM Group of Institutes, Pune, Maharashtra. RSCOE is now also
              known as TEDxJSPM RSCOE. Being an autonomous institute, the
              companies like Veritas, TCS, KPIT & Persistent Systems, Bentley
              Institute, IIT Ropar, and Builders Association of India
              contributed to the curriculum integration, giving an opportunity
              to students from various social and economic backgrounds to be
              part of excelling in higher education.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Tpo}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
