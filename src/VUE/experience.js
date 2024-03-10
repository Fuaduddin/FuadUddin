// Carrer Snapshot
// added value from top
const CarrerSnapshot= Vue.createApp({
    data(){
        return{
            capculetitle:"CARRER",
            ShortDesc:"Here is a quick summary of my Carrer:",
            carrers:[
                {title:"Software Engineer",expernc:"2 years", class:"containertimeline left"},
                {title:"PHP Developer",expernc:"2 years", class:"containertimeline right"},
                {title:"WordPress Developer (Intern)",expernc:"4 months",class:"containertimeline left"}
            ]
        }
    }
});

// All Experence
const  Experiencedetails= Vue.createApp({
    data(){
        return{
            EXPcapculetitle:"EXPERIENCE",
            EXPShortDesc:"Here is a quick summary of my most recent experiences:",
            EXPcarrers:[
                {companyname:"Byte Heart",companylogo:"/src/Images/byteherar.png", title:"Software Engineer",Session:"March 2022 - December 2023", 
                KeyResposibility:[
                    "Collaborate with the developer team with code reviews and sharing expertise with other developers.",
                    "Have used .NET and SQL server to developed dynamic Web Application.",
                    "Worked with Front-End Team to build responsive Web features.",
                    "Manage and ensure resolution for all internal bugs, troubleshoot, and resolve problems of existing or current projects.",
                    "Collaborate with the QA team to create and execute system test plans & UAT",
                    "Worked with Git & GitHub",
                    "Collaborate with the developer team to ensure project structure and provide ideas for best practices and project approaches.",
                    "Developed software solutions and  logic by studying information needs, systems flow, data usage, and work processes.",
                    "Familiar with Software Development Life Cycle , OPP & 3-layer  Architecture.",
                    "Integrate with  deployment teams for configuration changes and generated report."
                ]},
                {companyname:"Garbage Man",companylogo:"/src/Images/garbageman.png", title:"PHP Developer",Session:"March 2022 - December 2023", 
                KeyResposibility:[
                    "Work with the product and design teams to develop user interfaces and other client-side logic.",
                    "Collaborate with other developers to create solutions that meet the business and technical requirements.",
                    "Developed and document technical specifications for projects.",
                    "Troubleshoot and debug existing applications and identify areas for improvement.",
                    "Develop and maintain applications using PHP and related technologies.",
                    "Worked with the product and design teams to develop user interfaces and other client-side logic",
                    "Stayed informed about industry best practices and incorporate them into my daily work.",
                    "Contributed to the overall improvement of the development process and team efficiency.",
                    "Write clean and maintainable code with proper documentation."
            ]},
                {companyname:"Wephic",companylogo:"/src/Images/wephic.png", title:"WordPress Developer (Intern)",Session:"May 2020 – August 2020", 
                KeyResposibility:[
                    "Monitor and maintain system health and performance.",
                    "Developed and document technical specifications for projects.",
                    "Troubleshoot and debug existing applications and identify areas for improvement.",
                    "Worked with the product and design teams to develop user interfaces and other client-side logic",
                    "Designing and building the website front-end.",
                    "Creating the website architecture.",
                    "Contributed to the overall improvement of the development process and team efficiency.",
                    "Write clean and maintainable code with proper documentation."
                ]},
            ]
        }
    }
});

// All mounted 
CarrerSnapshot.mount('#carrer');
Experiencedetails.mount('#experiencedetails');