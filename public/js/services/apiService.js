angular.module('voteApp').service('apiService', ['$http', '$routeParams',
function($http, $routeParams) {

    this.user = {
        loggedIn: false,
        username: '',
        admin: false
    };

    this.setUser = function(data) {
        this.user.loggedIn = true;
        this.username = data.username;
        this.admin = data.admin;
    };

    this.getElections = function() {
        return $http({ method: 'GET', url: '/api/election' });
    };

    this.createElection = function(election) {
        return $http({ method: 'POST', data: election, url: '/api/election/' });
    };

    this.getElection = function() {
        return $http({ method: 'GET', url: '/api/election/' + $routeParams.param });
    };

    this.addAlternative = function(title) {
        return $http({ method: 'POST', data: {title: title, description: title}, url: '/api/election/' + $routeParams.param + '/alternatives' });
    };

    this.activateElection = function() {
        return $http({ method: 'POST', url: '/api/election/' + $routeParams.param + '/activate' });
    };

    this.deactivateElection = function() {
        return $http({ method: 'POST', url: '/api/election/' + $routeParams.param + '/deactivate' });
    };

    this.activateUser = function(cardKey) {
        return $http({ method: 'POST', url: '/api/user/' + cardKey + '/toggle_active' });
    };

    this.createUser = function(cardKey, username, password) {
        return $http({ method: 'POST', data: {cardKey: cardKey, username: username, password: password}, url: '/api/user/' });
    };

}]);
