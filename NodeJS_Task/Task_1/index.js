// READ FILE RECURSIELY & Create Hash. Also store result to Output file
// node main.js dir result.txt

const fs = require('fs');
const arguments = process.argv.slice(2);
const path = require('path');
const crypto = require('crypto');


// crawls through directory recursively to give output of every file
function crawlAndOutput(dir, outputFile){
    fileWriter('[+]'+dir+'\n', outputFile);
    var files = fs.readdirSync(dir);
    for( file of files){
        let next = path.join(dir,file);
        if(fs.lstatSync(next).isDirectory()){
            crawlAndOutput(next, outputFile);
        }
        else{
            let output = next + "\t-[MD5]-> "+ hashGenerator(next, "md5") + "\t -[SHA1]-> "+ hashGenerator(next, "sha1") +"\n";
            fileWriter('\t -'+output, outputFile);
        }
    }
}

//generates hash from data and given algo
function hashGenerator(file,algo)
{
	let file_buffer = fs.readFileSync(file);
	let sum = crypto.createHash(algo);
	sum.update(file_buffer);
	return sum.digest('hex');
}


// Result is stored in outputFile 
const outputFile = process.argv.slice(2)[1];
function fileWriter(data){
	fs.appendFileSync(outputFile, data);
}


//Main Function run
try{
	if(arguments.length!==2)
		console.log("Please provide all parameters ");
	else if(fs.statSync(arguments[0]).isDirectory()===false)
		console.log("Provide directory Path as a param NOT File")
	else{
		let outputFilePath = arguments[1];
		fs.writeFileSync(outputFilePath , `Code Executed at ${Date()}\n`);
		let directoryPathInput = arguments[0];
		crawlAndOutput(directoryPathInput, outputFilePath);
		console.log("Output stored in the provided file path.....");
	 }
}
catch(err) {
	console.log(err);
   console.log("Error 404 File not found");
}