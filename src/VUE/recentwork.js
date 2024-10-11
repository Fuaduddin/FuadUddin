
const Recentwork=Vue.createApp({
    data(){
        return{
            Recentworktitle:"RECENT WORK",
            RecentworkShortDesc:"Some of the recent work projects I have work on:",
            works:[
                {
                    Projectimage:"src/Images/pran.jpg",
                    title:"PRAN-RFL Group Farmers",
                    ShortDescrption:"On Progress",
                    technology:[],
                    WebsiteLink:""
                }
            ]
        }
    }
});
// All Mounted
Recentwork.mount('#recentworksection');


/// Other Projects

