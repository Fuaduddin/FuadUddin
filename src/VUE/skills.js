// added value from top
const Skillslist= Vue.createApp({
    data(){
        return{
            capculetitle:"SKILLS",
            ShortDesc:"Here is a quick summary of my most recent experiences:",
            technotitle:"Technology Skills:",
            technoList:[
                {
                    title:"Back-End",
                    skills:[
                        "src/Images/Back-end/ajax-removebg-preview.png",
                        "src/Images/Back-end/apiu-removebg-preview.png","src/Images/Back-end/—Pngtree—sql file document icon_4166149 (1).png","src/Images/Back-end/asp.net_mvc-removebg-preview.png","src/Images/Back-end/asp.netcore-removebg-preview.png",
                        "src/Images/Back-end/json-removebg-preview.png"
                    ]
                },
                {
                    title:"Front-End",
                    skills:[
                        "src/Images/skills/pngwing.com (1).png","src/Images/skills/pngwing.com.png",
                        "src/Images/fornt-end/html-removebg-preview.png","src/Images/fornt-end/vue-removebg-preview.png",
                        "src/Images/fornt-end/js.png","src/Images/fornt-end/jquery2-removebg-preview.png",
                    ]
                },
                {
                    title:"Programming Language",
                    skills:[
                        "src/Images/programming/c-removebg-preview.png","src/Images/programming/c++.png","src/Images/programming/csharp.png"
                    ]
                },
                {
                    title:"CMS",
                    skills:[
                        "src/Images/CMS/1520167048694-removebg-preview.png","src/Images/CMS/wordpress.png"
                    ]
                }
            ],
            Technicaltitle:"Technical Skills:",
            technicalList:[
                {
                    title:"Design and Development",
                    skills:[
                        "src/Images/Technical Skills/visual-removebg-preview.png", "src/Images/Technical Skills/channels4_profile-removebg-preview.png","src/Images/Technical Skills/images-removebg-preview.png", "src/Images/Technical Skills/brackets-removebg-preview.png","src/Images/Technical Skills/github-removebg-preview.png",
                    ]
                },
                {
                    title:"Spreadsheet",
                    skills:[
                        "src/Images/Technical Skills/excel-removebg-preview.png", "src/Images/Technical Skills/docs-removebg-preview.png",
                    ]
                },
                {
                    title:"Data Analysis",
                    skills:[
                        "src/Images/Technical Skills/Jupiter_notebook-removebg-preview.png"
                    ]
                },
                {
                    title:"Data Base",
                    skills:[
                        "src/Images/Technical Skills/mysql-removebg-preview.png", "src/Images/Technical Skills/sql-removebg-preview (1).png","src/Images/Technical Skills/Oracle.jpg"
                    ]
                },
                {
                    title:"Presentation",
                    skills:[
                        "src/Images/Technical Skills/ms-removebg-preview.png"
                    ]
                },
                {
                    title:"Desktop Publishing",
                    skills:[
                        "src/Images/Technical Skills/ps.jpg"
                    ]
                },
                {
                    title:"Motion Graphics",
                    skills:[
                        "src/Images/Technical Skills/pr-removebg-preview.png"
                    ]
                },
                {
                    title:"Operating Systems",
                    skills:[
                        "src/Images/Technical Skills/windows-removebg-preview.png", "src/Images/Technical Skills/ubuntu-removebg-preview.png",
                    ]
                }
            ]

        }
    }
});

// ALL MOUNT
Skillslist.mount('#technocontainer');