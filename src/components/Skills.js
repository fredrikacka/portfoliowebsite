import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useState } from "react";
import resume from "../assets/img/resume.pdf";

export const Skills = () => {
  const experience = [
    {
      company: "Accenture",
      jobTitle: "Technology Intern",
      datesWorked: "Nov 2022 - Dec 2022",
      description1:
        "• Created and designed a market overview tool for client’s top management through Salesforce CRM Analytics, using SQL",
      description2:
        " • Developed strategies to transition clients’ systems into dynamic database management and implemented them through sprints, using Agile method throughout the Software Development Life Cycle.",
    },
    {
      company: "Ameriprise",
      jobTitle: "Investment Specialist",
      datesWorked: "January 2022 - October 2022",
      description1:
        "• Actively manage clients’ portfolios and I have individually placed trades over $85M.",
      description2:
        "• Collaborated with internal Investment Committee to find strategies to maximize performance in our clients’ portfolios.",
    },
    {
      company: "PricewaterhouseCoopers",
      jobTitle: "Risk Assurance Intern",
      datesWorked: "September 2021 - November 2021",
      description1:
        "• Represented the company as a consulting analyst on a project for a well-known financial institution to determine suspicious activity.",
      description2:
        "• Investigated and identified unusual behavior to detect potential money laundering activity.",
    },
    {
      company: "FirstBank",
      jobTitle: "Commercial Banking Analyst Intern",
      datesWorked: "May 2021 - August 2021",
      description1:
        "• Reviewed commercial customers detect red flags such as rapid growth, change in suppliers, key management, decreased margins, and an increase in A/R, A/P, and inventory days.",
      description2:
        "• Calculated the probability of default by assigning risk ratings on Commercial borrowers by looking at income statements, balance sheet, cash flow statement, macroeconomic factors, LTV.",
    },
    {
      company: "Alpha and Omega",
      jobTitle: "Finance Intern",
      datesWorked: "January 2021 - August 2021",
      description1:
        "• Assisted owners with finding leads & contacting potential customers about renewing/purchasing insurance options.",
      description2:
        "• Gained experience with the company’s CRM models and helped ensure great automated communication with customers.",
    },
    {
      company: "Alliant Health Plans",
      jobTitle: "Data Analytics Intern",
      datesWorked: "January 2021 - August 2021",
      description1:
        "• Built a query in SQL that flagged members that we were insuring without receiving risk for. Our team that collaborated on this project estimated that we could reclaim $6 million each year from risk pooling by implementing our methods.",
      description2:
        "• Oversaw the projection for company’s rates in their expansion to new territory. Presented results for 50 people, including executives and board of directors. The estimates were used for the company’s 2021 rates.",
    },
  ];
  const [company, setCompany] = useState(0);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="experienceHeader">Experience</h2>
              <span className="resumeDownload">
                <a href={resume} download="Resume_Fredrik_Ackander">
                  <h4>Download Resume</h4>
                </a>
              </span>

              <ul className="listExperiences">
                <div className="button-group">
                  <ul className="experienceCompany">
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(0)}
                      >
                        {experience[0].company}
                      </button>
                    </li>
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(1)}
                      >
                        {experience[1].company}
                      </button>
                    </li>
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(2)}
                      >
                        {experience[2].company}
                      </button>
                    </li>
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(3)}
                      >
                        {experience[3].company}
                      </button>
                    </li>
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(4)}
                      >
                        {experience[4].company}
                      </button>
                    </li>
                    <li>
                      <button
                        className="companyButton"
                        onClick={() => setCompany(5)}
                      >
                        {experience[5].company}
                      </button>
                    </li>
                  </ul>
                </div>
                <ul className="experiencePosition">
                  <li className="jobTitleHeader">
                    {experience[company] ? (
                      <h3>
                        {experience[company].jobTitle} @{" "}
                        {experience[company].company}
                      </h3>
                    ) : null}
                  </li>
                  <li>
                    {experience[company] ? (
                      <h4 className="datesWorkedHeader">
                        {experience[company].datesWorked}
                      </h4>
                    ) : null}
                  </li>
                  <li>
                    {experience[company] ? (
                      <p>{experience[company].description1}</p>
                    ) : null}
                  </li>
                  <li>
                    {experience[company] ? (
                      <p>{experience[company].description2}</p>
                    ) : null}
                  </li>
                </ul>
              </ul>
              {/*               <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
