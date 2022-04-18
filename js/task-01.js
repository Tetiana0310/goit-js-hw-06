const liLength = document.querySelectorAll('.item')
console.log("Number of categories:",liLength.length)

const categories = liLength.forEach(item =>{
    console.log("Category:", document.querySelector("h2").textContent);
console.log("Elements:", item.querySelectorAll("li").length)})