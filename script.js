alert("مرحباً بك في موقعي الذي سيحسب درجتك!!")

let grade = prompt("اكتب درجتك بالأرقام")


console.log(grade)

if(grade>=90) {
       console.log('%cلقد حصلت على امتياز','color:green')  
}
else if (grade>=80) {
    console.log( '%c لقد حصلت على جيد جدا','color:blue')
}
else if (grade>=70) {
    console.log('%c لقد حصلت على جيد','color:pink')
}
else if(grade>=60){
    console.log('%c لقد حصلت على مقبول','color:orange')
}
else if(grade>=50){
    console.log('%c لقد حصلت على ضعيف','color:purple')
}    
else if(grade<50){
    console.log('%c راسب','color:brown')
}
// جافا سكريبت ليست جافا


