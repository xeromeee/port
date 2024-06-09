import { IProjectItem, ProjectType, RepoType } from "@/types";


const projects: IProjectItem[] = [
  {
    id: "music-streaming-web-app",
    title: "Music Streaming Web App",
    description:
      "Developed a Music Streaming Application integrating music genre classification using CNN algorithms, enhancing user experience with personalized playlists.",
    icon: "/skills/anugya/tensorflow.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Anugyak/Music-genre-classification-web-application",
    // url: "https://musicstreaming.com",
    tags: ["Python", "CNN", "Music Genre Classification"],
    // screenshots: ["/screenshots/music-streaming-app.png"]
  },
  {
    id: "ethnic-wear-e-commerce",
    title: "Ethnic Wear E-commerce Website",
    description:
      "Crafted an e-commerce platform for ethnic wear using Django, enabling streamlined shopping experiences with secure payment integrations.",
    icon: "/skills/anugya/django.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Anugyak/django-website-project",
    // url: "https://ethnicwear.com",
    tags: ["Django", "E-commerce", "Web Development"],
  },
  {
    id: "email-spam-classification",
    title: "Email Spam Classification",
    description:
      "Utilized logistic regression to develop an email classification system, accurately filtering spam and enhancing email security.",
    icon: "/skills/anugya/cnn.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Anugyak/Breadth-First-Search",
    tags: ["Python", "Logistic Regression", "Email Security"],
  },
  {
    id: "image-cartoonify",
    title: "Image Cartoonify",
    description:
      "Created an application that transforms normal images into cartoons using OpenCV and Tkinter, providing users with fun and creative photo editing tools.",
    icon: "/skills/anugya/opencv.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Anugyak/Cartoonify-image",
    // url: "https://cartoonify.com",
    tags: ["OpenCV", "Tkinter", "Image Processing"],
  },
];


export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
