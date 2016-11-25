(function(){
    function CollectionCtrl(Fixtures){
        this.albums = [];
        for(var i = 0; i < 12; i++){
            this.albums.push(Fixtures.getAlbum());
        }
    }

    angular
        .module('blocJams')
        .controller('Fixtures', CollectionCtrl);
})();

/* Old code

(function(){
    function CollectionCtrl(){
        this.albums = [];
        for(var i = 0; i < 12; i++){
            this.albums.push(angular.copy(albumPicasso));
        }
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();

*/