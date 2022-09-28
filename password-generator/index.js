const generatepassword =require('generate-password')
var passwords = generatepassword.generate( {
	length: 10,
	uppercase: false
});
console.log(passwords);