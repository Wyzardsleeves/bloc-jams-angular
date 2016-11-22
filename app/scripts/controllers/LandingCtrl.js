(function(){
    function LandingCtrl(){
        this.heroTitle = "Turn th Music Up!";
    }
    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();
