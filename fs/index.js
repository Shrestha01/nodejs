// we will create a file and write text on it using node js and its module filesystem.
// then, we will do operation according to inline command. like add file, remove file and we will give text from inline.

// importing fs module.
const fs = require("fs");
// using writefilesync() to create a file and add some data on it.
//fs.writeFileSync("apple.txt", "text from nodejs without inline");

// prcess in nodes has a lot of information from which we will extract the argv with contain the node url, current file url and inline command.
//console.log(process.argv);

// extracting only the inline command using process.argv[]
//console.log(process.argv[2]);
//fs.unlinkSync('apple.txt')

// create a small program which to the operation 1. create file and add some information. 2. delete the file

const code = process.argv[2];
const fileName = process.argv[3];

if (code == "add") {
  try {
    fs.writeFileSync(fileName, process.argv[4]);
  } catch (err) {
    console.error("the error is ", err.message);
  }
} else if (code == "remove") {
  fs.unlinkSync(fileName);
} else {
  console.log("Invalid file name");
}
