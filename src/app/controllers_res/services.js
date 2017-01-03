angular.module('starter.services', [])

.factory('postReq', function ($http, $location, DEBUG) {

    return {
        send: function($url, $data, $callbackPath, $callbackFunction) {
            $http({
                url: $url,
                data: $data,
                method: "POST",
                crossDomain: true
            }).then(function (response) {
                if(DEBUG.isEnabled){
                    console.log($url + ' -> Returned:');
                    console.log(response);
                }

                if($callbackPath)
                    $location.path($callbackPath);

                if($callbackFunction)
                    $callbackFunction(response.data);

            },function (response) {
                if(DEBUG.isEnabled){
                    console.log('Error: ');
                    console.log($url + ' -> Returned:');
                    console.log(response);
                }

                if($callbackFunction)
                    $callbackFunction(response);

                });
        }
    }
})
    .factory('putReq', function ($http, $location, DEBUG) {

        return {
            send: function($url, $data, $callbackPath, $callbackFunction) {
                $http({
                    url: $url,
                    data: $data,
                    method: "PUT",
                    crossDomain: true
                }).then(function (response) {
                    if(DEBUG.isEnabled){
                        console.log($url + ' -> Returned:');
                        console.log(response);
                    }

                    if($callbackPath)
                        $location.path($callbackPath);

                    if($callbackFunction)
                        $callbackFunction(response.data);

                },function (response,status) {
                        if(DEBUG.isEnabled){
                            console.log('Error: ');
                            console.log($url + ' -> Returned:');
                            console.log(response);
                        }
                        if(status == 403){
                            if(DEBUG.isEnabled) {
                                console.log('Emptying the token and redirecting to login')
                            }
                            AuthService.logout();
                            $location.path('/sign-in');
                        }
                    });
            }
        }
    })

    .factory('getReq', function ($http, $location, DEBUG) {

        return {
            send: function($url, $callbackPath, $callbackFunction) {
                $http({
                    method: "GET",
                    url: $url,
                    crossDomain: true
                }).then(function (response) {
                    if(DEBUG.isEnabled){
                        console.log($url + ' -> Returned:');
                        console.log(response);
                    }

                    if($callbackPath)
                        $location.path($callbackPath);

                    if($callbackFunction)
                        $callbackFunction(response.data);

                },function (response) {
                        if(DEBUG.isEnabled){
                            console.log('Error: ');
                            console.log($url + ' -> Returned:');
                            console.log(response);
                        }
                    });
            }
        }
    })

    .factory('delReq', function ($http, $location, DEBUG) {

        return {
            send: function($url, $callbackPath, $callbackFunction) {
                $http({
                    url: $url,
                    method: "DELETE",
                    crossDomain: true
                }).then(function (response) {
                    if(DEBUG.isEnabled){
                        console.log($url + ' -> Returned:');
                        console.log(response);
                    }

                    if($callbackPath)
                        $location.path($callbackPath);

                    if($callbackFunction)
                        $callbackFunction(response.data);

                },function (response, status) {
                        if(DEBUG.isEnabled){
                            console.log('Error: ');
                            console.log($url + ' -> Returned:');
                            console.log(response);
                        }

                        if(status == 403){
                            if(DEBUG.isEnabled) {
                                console.log('Emptying the token and redirecting to login')
                            }
                            AuthService.logout();
                            $location.path('/sign-in');
                        }
                    });
            }
        }
    })
