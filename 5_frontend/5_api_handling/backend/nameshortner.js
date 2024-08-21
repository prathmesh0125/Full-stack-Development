function nameshortner(name){
    const ans=name.length>5?name.slice(0,5)+"...":name;
    return ans;
}
console.log(nameshortner("aafafasfas"))