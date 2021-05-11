const days=["Mon","Tues","Wed","Thus","Fri"];

// const addSmile=(day)=>`${day}`
// const addSmile=(day,index)=>{`#${index +1}${day}`};

const smaildays=days.map((props,index)=>`#${index + 1}${props}`);

console.log(smaildays);

const number=[15,2,65,87,54,87,996,54,21,2,0]

const biggerThan15=number.filter(number => number > 15);

console.log(biggerThan15);

let posts=["Hi","Hello","Bye"];

posts=posts.filter(post=>post !=="Bye")
console.log(posts)


let title=["Hi","Hello","Bye"];
if(!title.includes("Howdy")){
    title.push("Howdy")
}
console.log(title,title.reverse());
title.push("new");
title.forEach(a=>console.log(a));