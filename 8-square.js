const arg = process.argv[2];
const size = Number(arg);

if (isNaN(size)){
console.log("Missing size");
}
else if(size>0){
    const row = "X".repeat(size);
    for(let i = 0; i<size; i++){
        console.log(row)

    };

};



