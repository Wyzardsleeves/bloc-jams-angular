(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {};
        
        var currentAlbum = Fixtures.getAlbum();
        
        var getSongIndex = function(data){
            return currentAlbum.songs.indexOf(data);
        };
        
        /**
        *@desc Buzz object ausio file
        *@type {Object}
        */
        SongPlayer.currentSong = null;
        var currentBuzzObject = null;
        
        /**
        *@function setSong
        *@desc Stops currently playing song and Loads new audio file as currentBuzzObject
        *@param {Object} data
        */
        var setSong = function(data){
            if(currentBuzzObject){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(data.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = data;
        };
        
        //assignment-7
        var playSong = function(data){
            currentBuzzObject.play();
            data.playing = true;
        };
        
        /**
        *@SongPlayer method
        *@desc Pulls a song to play from albums.html
        *@param {Object} data
        */        
        SongPlayer.play = function(data) {
            data = data || SongPlayer.currentSong;
            if(SongPlayer.currentSong !== data){
                setSong(data);
                playSong(data);     //assignment-7
            
            }else if(SongPlayer.currentSong === data){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
        /**
        *@function SongPlayer.pause
        *@desc Stops currently playing song and Loads new audio file as currentBuzzObject
        *@param {Object} data
        */
        SongPlayer.pause = function(data){
            data = data || SongPlayer.currentSong;
            currentBuzzObject.pause();
            data.playing = false;
        };
        
        /**
        *@function SongPlayer.previous
        *@desc Stops currently playing song and Loads next audio file as currentBuzzObject
        *@param {Object} data
        */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if(currentSongIndex < 0){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }else{
                var data = currentAlbum.songs[currentSongIndex];
                setSong(data);
                playSong(data);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();

