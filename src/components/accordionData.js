// here we will define all the data for the accoudions
import React from 'react';
import Skills from './accordions';





const AllSkills1 = function () {
    const data = {
        Python: `Python is the first language I have learned.
        It's a language I quite explored and am quite good with.`,
        JavaScript: `When I first learnet JavaScript I hated it. It felt very
        wierd. But now it's one of my favirote languages. It has huge area 
        to explore and vast depths. The functional side of JS is whats most
        exciting to me and am eager to see what it has to offer. Altough I probably
        alredy use it.`,
        C: `I learned C after I finished Python.I have recived a good grade
        in the C programing language test. I was trained and certified in C
        in Datapro Visakhapatnam. C being a procedural programming language
        can be quite chalanging but offoers grater control atr the expense 
        of more line of code.`,
        AJAX: `Stands for Asynchronous JavaScript And XML is a technique
        of rendering data in frontend while reciving data from remote backends.
        It make a day and night diffrence when it comes to speed. But not
        very secure.`,
        jQuery: `I have only practiced basics. Since the popularty of JQuery is
        falling and the support being cut off for it's development it didn't
        fell worthy enough to get good ant JQuery.`,
        Django: `One of my favioret backends to work with. It can be quite 
        difficult at the biginning. But once you get solid understanding of it
        it's very pleasent to work with.`,
        SQL: 'SQL is my prefferd DataBase and especially Postgress and SQLite3',
    }
    const skills = Object.keys(data);
    return(
        skills.map(key => <Skills title={key} body={data[key] }/>)
    )
    
}


const AllSkills2 = function () {
    const data = {
        DjangoRestFramework: 'This framework is built for rest APIs in Django.',
        Bootstrap: ` Always saves my day. Pleasent framework to work with.`,
        React: `Learned it reletively later and I am building this page with react.`,
        Node: ` I was pleasently surprised how easy node was. It's amazing
        how Asynchronous JavaScrip was a great fit for backend, especially
        those callbacks and async/await.`,
        GO: `Only familiar with basics but as someone who has already learnt
        quite few thechnologies I find it relativily easy t learn any new language.
        Some of Go features like having to mention return types fro functions
        can come in very handy. Go is a great language to read.`,
        Docker: ` I first learned Docker in my backend course. It still is a very 
        complex topic but I would like to really get a good working exp on this.`,
        Selenium: 'I am very comfotable and have working experience with selenium testing.'
    
    }
    const skills = Object.keys(data);
    return(
        skills.map(key => <Skills title={key} body={data[key]} />)
    )
    
}

export {
    AllSkills1,
    AllSkills2
}
