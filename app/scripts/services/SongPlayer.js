(function(){
    function SongPlayer() {
        var SongPlayer = {};
        
        SongPlayer.play = function(song) {
            // error says that 'audioUrl'is undefined. Also javascript thinks that SongPlayer is being used twice. it shows Object.SongPlayer.SongPlayer.play instead of Object SongPlayer.play
            var currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.play();
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();