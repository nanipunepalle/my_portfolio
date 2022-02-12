

const projects = [
  {
    id: 1,
    name: "EllipseApp Web Application",
    desc: "Application to host and organize college events and hackathons",
    url: "https://ellipse-e2428.web.app",
    languages: ["React.js", "Node.js", "MongoDB","Redis"]
  }, 
  {
    id: 2,
    name: "SnippetBook Web Application",
    desc: "Application to store and share code snippets",
    url: "https://github.com/nanipunepalle/snippet_book_server",
    languages: ["React.js", "flask", "MongoDB"]
  }, 
  {
    id: 3,
    name: "Mic iOS Application",
    desc: "Application to use iPhone as mic which tramsmits audio to connected devices, record your audio and also transcripts your audio to text",
    url: "https://github.com/nanipunepalle/Mic-iOS",
    languages: ["Swift", "SwiftUI"]
  },
  {
    id: 4,
    name: "Speedo Meter iOS Application",
    desc: "iOS Application to know the speed of vehicle you are moving or your walking speed",
    url: "https://github.com/nanipunepalle/speedometer-iosapp",
    languages: ["Swift", "SwiftUI"]
  },
  {
    id: 5,
    name: "COVID19 iOS Application",
    desc: "Application to view COVID19 world statistics and Indian states data",
    url: "https://github.com/nanipunepalle/COVID-19-iOS-App",
    languages: ["Swift", "SwiftUI"]
  },
  {
    id: 6,
    name: "Butterfly Predection",
    desc: "Flask Application to predict butterfly species",
    url: "https://github.com/nanipunepalle/image-classification-using-CNN",
    languages: ["Python", "Tensorflow","Flask"]
  },
  {
    id: 7,
    name: "Easykart",
    desc: "Web application for restaurant or store management. I have developed backend of the application using Node.js and MongoDB",
    url: "https://easykart.centralindia.cloudapp.azure.com/navtabs/home",
    languages: ["Node.js", "MongoDB"]
  }]

  const skills = ["JavaScript", 
  "Python", "Java", "Swift", "HTML", "CSS", "React.js", "Node.js", 
  "MongoDB", "SwiftUI", "Flask", "Web Development", "iOS App Development"]

  module.exports={
      projects: projects,
      skills: skills
  }