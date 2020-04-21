var express = require('express');
var empModel=require('../modules/employee');
var router = express.Router();
var employee=empModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
	
	employee.exec(function(err,data){
		if(err) throw err;
	res.render('index', { title: "employee records", record: data });
	
	})
  
});
router.post('/', function(req, res,next) {
	var flrtname= req.body.flrtname;
	var flrtemail= req.body.flrtemail;
	var flrtetype= req.body.flrtemptype;
	if(flrtname!='' && flrtemail!='' && flrtetype!=''){
	
		var flrtparameter={ $and:[{name:flrtname},
		{$and: [{email:flrtemail},{etype:flrtemptype}]}
		]}

	 }
    
	else if(flrtname!='' && flrtemail=='' && flrtetype!=''){
     var flrtparameter={ $and:[{name:flrtname},{etype:flrtemptype}]}   		
	}
	else if(flrtname=='' && flrtemail!='' && flrtetype!=''){
     var flrtparameter={$and: [{email:flrtemail},{etype:flrtemptype}]}   		
	}
	else{
	        var flrtparameter={};	
	}
	var employeefilter=empModel.find({$and:[{name:flrtname},
		{$and: [{email:flrtemail},{etype:flrtemptype}]}]});
	employeefilter.exec(function(err,data){
		if(err) throw err;
	res.render('index', { title: "employee records", record: data });
	
	})
  
});


module.exports = router;
