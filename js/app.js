var app= angular.module('myApp',['daterangepicker']);

app.controller('myCtrl',function($scope){
$scope.data={};
$scope.users=[{
	'name' : "rohit",
	'surname' : "kawale"
},
{
	'name' : "rohit2",
	'surname' : "kawale2"
}
];
$scope.datePicker={};
$scope.datePicker.date = {
	startDate: moment().subtract(5, "days"),
    endDate: moment()
};

$scope.edit= function(u){
	$scope.data=u;

};
$scope.save= function(){
	$scope.data={};
};
$scope.delete=function(index){
	$scope.users.splice(index,1);

}

$scope.adduser= function(){
	var datePicker=$scope.datePicker.date ;
	console.log(datePicker);

	var user={
		'name' : $scope.data.name,
		'surname' : $scope.data.surname
	};
	$scope.users.push(user);
	$scope.data={};
	console.log($scope.users);
}

});