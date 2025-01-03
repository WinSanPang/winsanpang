import { text } from "stream/consumers"
import TimelineSection from "./timeline-section"

export default function Timeline() {
  const workSections = [
    {
      companyName: "Butternut Box",
      summary:
        "I joined Butternut Box as a Junior Frontend Engineer and have progressed into a Software Engineer over the course of the years. I have worked primarily on the Acquisition team.",
      roles: [
        {
          date: "Feb 2021",
          role: "Software Engineer",
          responsibilities: [
            {
              heading: "Acquisition Product Area",
              description:
                "Predominantly worked in the business' Acquisition digital product remit and developed high-quality user interfaces. Utilised AB testing within the product feature development process and achieved a 13% improvement in conversion rates and led to increased sign-ups. Key features include the homepage, public- facing support and landing pages, the entire sign-up and checkout journey, and the refer-a-friend scheme.",
            },
            {
              heading: "Localisation Expert",
              description:
                "Supported the company's growth and expansion into five new countries and four languages using tools like Phrase and i18n.",
            },
          ],
        },
      ],
      backgroundColour: "#ffe180",
      textColour: "#174f78",
    },
    {
      companyName: "JustPark",
      summary:
        "I joined JustPark as a Customer Love Agent and transitioned into a Junior Frontend Engineer role.",
      roles: [
        {
          date: "Jan 2020",
          role: "Associate Frontend Engineer",
          responsibilities: [
            {
              heading: "Application Development and Maintenance",
              description:
                "Developed, enhanced, and maintained the codebase for the company's five core web applications. Contributions included creating UI components, reducers, and full-page flows using React 16 and Redux Toolkit, as well as updating automated test suites with Jest, Enzyme, Mocha, and Cypress.",
            },
            {
              heading: "Cross-Functional Collaboration",
              description:
                "Collaborated with Backend, QA, and Product teams to ensure the timely delivery of high-quality features and product improvements.",
            },
            {
              heading: "Development Tools",
              description:
                "Employed various software and tools, including PhpStorm, Jenkins, JIRA, GitHub, Percy, Zeplin, and Paw, for development and self-testing purposes, ensuring code changes aligned with intended product designs.",
            },
          ],
        },
        {
          date: "Jan 2019",
          role: "Associate QA Engineer",
          responsibilities: [
            {
              heading: "Comprehensive Testing and Debugging",
              description:
                "Executed thorough testing and debugging of product changes across four development teams - Frontend, Backend, Mobile (Apps), and Infrastructure - with a primary focus on Backend code.",
            },
            {
              heading: "Behaviour Driven Development (BDD) Implementation",
              description:
                "Applied the Behaviour Driven Development framework to systematically test and ensure code changes met relevant business or stakeholder requirements.",
            },
            {
              heading: "Automated Testing and Efficiency Enhancement",
              description:
                "Developed automated tests using Cypress and TestCafe, and created Laravel Seeders to improve the efficiency of the QA and development processes.",
            },
            {
              heading: "Development Tools",
              description:
                "Employed a range of software tools, including Paw, Jenkins, JIRA, GitHub, Percy, Sequel Pro, and TablePlus, to ensure code changes were tested thoroughly and effectively.",
            },
            {
              heading: "Product Demos",
              description:
                "Regularly presented product changes to the wider company during fortnightly Product Demo sessions, facilitating transparency and cross-team collaboration.",
            },
            {
              heading: "Service Desk Management",
              description:
                "Managed the company Service Desk by handling enquiries and issues reported by internal teams, investigating root causes, and collaborating with the Engineering team to develop effective solutions.",
            },
          ],
        },
        {
          date: "Jan 2018",
          role: "Senior Customer Happiness Associate",
          responsibilities: [
            {
              heading: "Handling escalations",
              description:
                "Handling escalated customer complaints as well as assisting regular customer enquiries during busy periods.",
            },
            {
              heading: "Training and Mentoring",
              description:
                "Training and managing new starters to ensure a smooth onboarding process.",
            },
            {
              heading: "Monitoring",
              description:
                "Monitoring the customer database for suspicious user activity and handling fraudulent cases, such as chargebacks.",
            },
            {
              heading: "Collaboration",
              description:
                "Engaging in regular meetings with other departments, including product design and marketing, to formulate wider business goals and to feedback information to the customer support team.",
            },
            {
              heading: "Reporting",
              description:
                "Compiling reports and presentations for weekly team meetings.",
            },
          ],
        },
        {
          date: "Apr 2017",
          role: "Customer Happiness Associate",
          responsibilities: [
            {
              heading: "Helping customers",
              description:
                "Providing top quality, professional customer service and resolving customer enquiries and complaints via phone, email (Zendesk) and social media platforms.",
            },
            {
              heading: "Hitting targets",
              description:
                "Consistently exceeded KPIs including customer satisfaction, call duration and cases handled.",
            },
            {
              heading: "Collaboration",
              description:
                "Working together with various departments, including finance and account management, to resolve customer issues.",
            },
          ],
        },
      ],
      textColour: "justpark",
      backgroundColour: "justpark",
    },
  ]

  return (
    <div>
      {workSections.map((section) => (
        <TimelineSection
          key={section.companyName}
          companyName={section.companyName}
          summary={section.summary}
          roles={section.roles}
          backgroundColour={section.backgroundColour}
          textColour={section.textColour}
        />
      ))}
    </div>
  )
}
