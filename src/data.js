export default {
    about : [
    "Hi! my name is Samvel and I'm a computer science student at KTH, currently working on finishing my Master's degree. I'm a software engineer hopeful, I love working with software, understanding technical systems as well as possible and problem solving. I think software engineering is more than just coding, a strength of mine is to think about a problem and a solution before jumping into coding.", 
    
    "I'm mainly Python programming, familiar with many libraries e.g. Numpy, Pytorch, Pandas, but also with Backend Engineering libraries such as FastAPI. Other than Python I also love front end engineering and have compentencies in React, HTML, CSS. Lastly I also hold an affinity for Go, it's simplistic syntax combined with the performance benefits makes it a real joy to work with in my opinion."
    
    ,"When not programming I enjoy many other hobbies, playing games with friends, baking or cooking a recipe that caught my interest while during the week, reading or just slouching on the couch while watching a movie or anime."],
    projects : [
        {
            name : "Date Translator",
            description : "Trained a transformer based encoder-decoder model which translate temporal expressions, i.e. sentence describing a date to date format YYYY-MM-DD,HH:MM",
            tags : ["Python", "Pytorch", "AI/ML"],
            link : "https://gits-15.sys.kth.se/vt26/dd2417-project"
        },
        {
            name : "WordleGrade",
            description : "Built a Web extension for the popular daily game of Wordle which graded the game instance based on Information theory.",
            tags : ["JS", "HTML", "CSS"],
            link : "https://github.com/SamvelHov02/WordleGrade"
        },
        {
            name : "HomeCloud",
            description : "Implemented a HTTP/1.1 with Go and used it implement a home server for file synchronization between devices on a local network.",
            tags : ["GO", "Network", "Hardware"],
            link : "https://github.com/SamvelHov02/HomeCloudHTTP"
        },
        {
            name : "SpamFilter",
            description : "Trained several classifiers for detecting Spam, models were trained with, Naive Bayes, Support Vector Machines, Logistic Regression.",
            tags : ["Python", "Numpy", "AI/ML"],
            link : "https://github.com/SamvelHov02/SpamFilter"
        }
    ],

    skills : ["Python", "React", "FastAPI", "GO", "Git"],
    links : {
        github : "https://github.com/SamvelHov02",
        linkedin : "https://google.com",
    }
}