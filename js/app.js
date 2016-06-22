var app= angular.module('myApp',['daterangepicker']);

app.controller('myCtrl',function($scope){
$scope.data={};
$scope.users=[];
$scope.datePicker={};
$scope.datePicker.date = {
	startDate: moment().subtract(5, "days"),
    endDate: moment()
};

$scope.adduser= function(){
	var datePicker=$scope.datePicker.date ;
	console.log(datePicker);

	var user={
		'name' : $scope.data.name,
		'surname' : $scope.data.surname
	};
	$scope.users.push(user);
	console.log($scope.users);
}

});