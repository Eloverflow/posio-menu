'use strict';
angular.module('starter.controllers')
.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.useSanitizeValueStrategy(null);
    /*$translateProvider.usePostCompiling(true);*/

    // configures staticFilesLoader
    $translateProvider.useStaticFilesLoader({
        prefix: '/controllers_res/lang-',
        suffix: '.json',
        $http: { cache: true }
});


    var language = localStorage.getItem("language");
    if(language){
        $translateProvider.preferredLanguage(language);
    }
    else {
        language = window.navigator.language || window.navigator.userLanguage;
        if (language === 'fr-FR') {
            $translateProvider.preferredLanguage('FR');
        }
        else {
            $translateProvider.preferredLanguage('EN');
        }
    }



    $translateProvider.forceAsyncReload(true);
}]);