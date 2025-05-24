const args = process.argv.slice(2);

if (args[1] === undefined) {
  console.log(" is ");
} else {
  console.log(`${args[0]} is ${args[1]}`);
}
