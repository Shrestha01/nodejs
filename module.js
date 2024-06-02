// fs,buffer,console,
//core module are the module that are already created inside the programming for some basic function. in node js, fs, console,HTTP, buffer and so on.
// global module are module which are not needed to import.
//    like console

// no global module are module, in which we need to import like fs.

const fs = require("fs"); // this will import all the function that are on file system fs.

fs.writeFileSync("file.txt", "Writen from fs module and updated");

// we can import the only needed function to run fast for example, we are now importing only writeFileSync instead of all the fucntion.

const newFS = require("fs").writeFileSync;
newFS(
  "newFile.txt",
  "Written from fs with importing only one function rather than importing all the function in the module"
);
