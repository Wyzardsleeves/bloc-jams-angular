
(function(){
    function AlbumCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
    }

    angular
        .module('blocJams')
        .controller('Fixtures', AlbumCtrl);
})();

/* Old prototype code
(function(){
    function AlbumCtrl(){
        this.albums = [];
        for(var i = 0; i < 12; i++){
            this.albumData.angular.copy(albumPicasso));
        }
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
*/