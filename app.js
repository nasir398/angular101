(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchController', function ($scope) {
    $scope.id1 = "";
    $scope.messageValue = "";

    $scope.displayNumeric = function () {
        var totalNameValue = 
        calculateNumericForString($scope.id1) ;
        $scope.messageValue = totalNameValue;
    };

function calculateNumericForString(string) {
    var totalStringValue = 0;
    var food = "";
    var foodlength = 0;
    console.log(string);
    if (string == "" ) {
        totalStringValue = "Please enter data first";
        return totalStringValue;
    } 
    food = string.split(',');
    foodlength = food.length;
    console.log(foodlength);

     if (foodlength < 4 ) {
        totalStringValue = "Enjoy!";
        
    }
    else if (foodlength > 3){
        totalStringValue = "Too much!";
    }else {
        totalStringValue = "Invalid data entered";
    }

   
    return totalStringValue;
}    
    
})


})();
