'use strict';

pokemonApp.controller('BerriesListCtrl', function($scope, BerriesService) {

    $scope.berriesLoaded = false;
    $scope.berries = BerriesService.query();
    $scope.berriesLoaded = true;

});
