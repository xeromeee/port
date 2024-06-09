import {
  faMobileButton,
  faLaptopCode,
  faServer,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    title: "Data Analysis and Visualization",
    icon: faMobileButton,
    shortDescription:
      "Transform complex data into actionable insights with customized analytics and dynamic visualizations.",
    description:
      " Utilizing powerful tools like Python, Tableau, and Power BI, I provide deep insights through data manipulation, exploratory analysis, and the creation of interactive dashboards that help stakeholders make informed decisions.  ",
  },
  {
    title: "Machine Learning",
    icon: faBrain,
    shortDescription:
      " Implement cutting-edge machine learning models to automate processes and enhance decision-making.",
    description:
      " I develop and implement machine learning models using TensorFlow and Python, focusing on predictive analytics and automated systems to enhance operational efficiency and business outcomes.",
  },
  {
    title: "Backend Development",
    icon: faServer,
    shortDescription:
      "Build scalable and efficient backend solutions tailored for seamless functionality and user experience.",
    description:
      "Specializing in Python and Django, I design and develop robust backend systems that ensure scalability, maintainability, and high performance to meet the dynamic needs of modern web applications.",
  },
  {
    title: "System Monitoring and Optimization",
    icon: faBrain,
    shortDescription:
      "Leverage tools like Grafana and Prometheus to monitor and optimize system performance, ensuring reliability and uptime for critical applications.",
    description:
      "Implement advanced monitoring with Grafana and Prometheus to ensure system reliability and performance, optimizing uptime and preventing disruptions.",
  },
];

export default services;
