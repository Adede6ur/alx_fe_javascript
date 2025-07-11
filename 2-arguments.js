
    console.log(process.argv);
    
    // if (process.argv.length == 2) { console.log("No args"); }
    // if (process.argv.length == 3) { console.log("One arg passed"); }
    // if (process.argv.length >= 4) { console.log("More than one arg was passed"); }  

    if (process.argv.length == 2) { 
        console.log("No args");
     } else if (process.argv.length == 3) {
        console.log("One arg passed");
     } else if (process.argv.length >= 4) {
        console.log("More than one arg was passed");
     }