

const projects = [{
    id: 1,
    name: "EllipseApp Web Application",
    desc: "Application to host and organize college events and hackathons",
    url: "https://ellipseapp.com",
    languages: ["React.js", "Node.js", "MongoDB"]
  }, {
    id: 2,
    name: "SnippetBook Web Application",
    desc: "Application to store and share code snippets",
    url: "https://github.com/nanipunepalle/snippet_book_server",
    languages: ["React.js", "flask", "MongoDB"]
  }, {
    id: 3,
    name: "COVID19 iOS Application",
    desc: "Application to view COVID19 world statistics and Indian states data",
    url: "https://github.com/nanipunepalle/COVID-19-iOS-App",
    languages: ["Swift", "SwiftUI"]
  }]

  const skills = ["JavaScript", 
  "Python", "Java", "Swift", "HTML", "CSS", "React.js", "Node.js", 
  "MongoDB", "SwiftUI", "Flask", "Web Development", "iOS App Development"]

  module.exports={
      projects: projects,
      skills: skills
  }