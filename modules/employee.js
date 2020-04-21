var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost 27017/employees',{useNewUrlParser: true,useUnifiedTopology: true  });
var conn=mongoose.connection;
var employeeschema= new mongoose.Schema({
	name:String,
	email:String,
	etype:String,
	hoursworked:Number,
	total:Number,
})
var employeemodel= mongoose.model('employee',employeeschema);
console.log(employeemodel);
module.exports=employeemodel;