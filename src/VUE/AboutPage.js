// Education Snap Shoot
const aboutdetails=Vue.createApp({
    data(){
        return{
            aboutitle:"ABOUT",
            aboutshortdesc:"About Me",
            aboutimage:"src/Images/about.jpg",
            aboutdetailstitle:"Hi there, I am Fuad Uddin",
            avoutdescription:[
                "I am a web developer with 3 years of experience and a degree in Computer Science and Engineering from East West University.At present I am working as Trainee Engineer .NET Developer at PRAN-RFL Group. I have worked as a WordPress Developer (Intern) and as a Software Engineer at Byte Heart, and contractual software engineer in Garbage man for 7 months . where I was consistently recognized for developing innovative solutions for complex software and systems. My responsibilities encompass the full lifecycle development of next-generation software, including requirement gathering, design, coding, testing, documentation, and implementation.",
                "I focus on developing websites that are both visually appealing and highly functional. My technical expertise includes cross-platform proficiency (Windows and Linux), ASP.NET Core/MVC, Vue.js, JavaScript, HTML, ASP.NET MVC (Version 5.2.9), CSS, jQuery, Ajax, C, Restful API (Basic), Postman, and LINQ. I am also experienced in various scripting and programming languages, including C, C++, SQL, WordPress, Python, and PHP.I enjoy collaborating with other web developers and designers to create websites that align with clients' brand identities and business objectives. I am committed to staying current with industry trends and best practices by attending professional web development courses to continuously improve my skills.",
                "I have completed my B.Sc. in Computer Science and Engineering (Software and Information Systems) from East West University. I also have done different hands-on projects focusing on Data Analysis, Data Visualization, Data Science, and Graphics Designing. I also have real-life experience using popular programming languages to create and implement software applications. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me."
            ],
            // aboutbutton:[
            //     {title:"Experince",link:"experience.html"},
            //     {title:"Recent Work",link:"RecentWork.html"},
            //     {title:"Portfolios",link:"Protfolios.html"},
            // ]
        }
    }
});
aboutdetails.mount('#aboutme');