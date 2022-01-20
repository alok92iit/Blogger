const mongoose =require("mongoose")
const Blog =require("./model/error")
const dummyData =[
    {
        title :"Biodiversity faces its make-or-break year, and research will be key",
        desc :"The Aichi targets are part of an international agreement called the UN Convention on Biological Diversity, and member states are now finalizing replacements for them. Currently referred to as the post-2020 global biodiversity framework (GBF), the new targets are expected to be agreed this summer at the second part of the convention’s Conference of the Parties (COP15) in Kunming, China. The meeting was due to be held in May, but is likely to be delayed by a few months. Finalizing the framework will be down to government representatives working with the world’s leading biodiversity specialists. But input from social-science researchers, especially those who study how organizations and governments work, would improve its chances of success.A draft of the GBF was published last July. It aims to slow down the rate of biodiversity loss by 2030. And by 2050, biodiversity will be “valued, conserved, restored and wisely used, maintaining ecosystem services, sustaining a healthy planet and delivering benefits essential for all people”. The plan comprises 4 broad goals and 21 associated targets. The headline targets include conserving 30% of land and sea areas by 2030, and reducing government subsidies that harm biodiversity by US$500 billion per year. Overall, the goals and targets are designed to tackle each of the main contributors to biodiversity loss, which include agriculture and food systems, climate change, invasive species, pollution and unsustainable production and consumption."
        ,img :"https://images.unsplash.com/photo-1471127432458-65206be149c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title :"What Is the Metaverse, Exactly?",
        desc :"TO HEAR TECH CEOs like Mark Zuckerberg or Satya Nadella talk about it, the metaverse is the future of the internet. Or it's a video game. Or maybe it's a deeply uncomfortable, worse version of Zoom? It's hard to say.To a certain extent, talking about what “the metaverse” means is a bit like having a discussion about what “the internet” means in the 1970s. The building blocks of a new form of communication were in the process of being built, but no one could really know what the reality would look like. So while it was true, at the time, that “the internet” was coming, not every idea of what that would look like is true.On the other hand, there's also a lot of marketing hype wrapped up in this idea of the metaverse. Facebook, in particular, is in an especially vulnerable place after Apple's move to limit ad tracking hit the company's bottom line. It's impossible to separate Facebook's vision of a future where everyone has a digital wardrobe to swipe through from the fact that Facebook really wants to make money selling virtual clothes.",
        img :"https://media.istockphoto.com/photos/woman-wearing-vr-glasses-s-picture-id1351141161?b=1&k=20&m=1351141161&s=170667a&w=0&h=OWMtLk2J6uhdQAMODXPoTFoZ7rphx0XSQcJUGsREAno="
    },
    {
        title :"Cryptocurrency",
        desc :"A cryptocurrency (or “crypto”) is a form of payment that can circulate without the need for a central monetary authority such as a government or bank. Instead, cryptocurrencies are created using cryptographic techniques that enable people to buy, sell or trade them securely. Cryptocurrencies can be exchanged for goods and services, though they often are used as investment vehicles. Cryptocurrency is also a key part of the operation of some decentralized financial networks, where digital tokens are an important tool for carrying out transactions.The most popular cryptocurrency, Bitcoin, has had a historically volatile price. In 2021, it hit an all-time high above $65,000 before falling back",
        img :"https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Yml0Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title :" React.js",
        desc :"React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.",
        img:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title :"The Group of Frogs",
        desc :"As a group of frogs was traveling through the woods, two of them fell into a deep pit. When the other frogs crowded around the pit and saw how deep it was, they told the two frogs that there was no hope left for them.However, the two frogs decided to ignore what the others were saying and they proceeded to try and jump out of the pit. Despite their efforts, the group of frogs at the top of the pit were still saying that they should just give up. That they would never make it out.Eventually, one of the frogs took heed to what the others were saying and he gave up, falling down to his death. The other frog continued to jump as hard as he could. Again, the crowd of frogs yelled at him to stop the pain and just die.He jumped even harder and finally made it out. When he got out, the other frogs said, “Did you not hear us?”The frog explained to them that he was deaf. He thought they were encouraging him the entire time.",
        img :"https://images.unsplash.com/photo-1598537179958-687e6cc625fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
]

async function seedData(){
    await Blog.insertMany(dummyData)
    console.log("data seeded")
}

module.exports =seedData