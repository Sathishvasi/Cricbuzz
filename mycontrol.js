var app=angular.module("root",["ngRoute"]);

app.config(function($routeProvider) 
		{
			$routeProvider
				.when('/admin', {
					templateUrl: 'admin.html',
					controller: 'control'
				})
				.when('/view', {
					templateUrl: 'view.html',
					controller: 'control'
				})
				.when('/right', {
					templateUrl: 'right.html'
				})
				.otherwise({
					redirectTo: '/right'
				});
		});

app.run(function($rootScope) {

	$rootScope.print1=[{overs:'1.3',highlights:'SIX',defines:'Wonderful start of the match'}];
    
    $rootScope.update = function(over,highlight,define) 
    {        
	   $rootScope.print1.push({overs:over,highlights:highlight,defines:define});		 
	   alert("over updated successfully");  
    };
});


app.controller("control",function($scope){
	
	$scope.call=function(){
		if($scope.pass=="sathish")
		{
			alert("Successfully logged in");
			 $scope.val=['1'];
		}
		else
		{
			alert("Incorrect password");
		}
	}

	var range = ['Select here for over'];	
									//Drop down creations
	for(var i=1;i<50;i++){
	 for(var j=1;j<6;j++){
	   range.push(i+"."+j);
	 }
	}
	
	$scope.range = range;
	$scope.news = ['Select here for highlight','SIX','FOUR','WICKET'];
});
	

