(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {};
        
        /**
        *@desc Buzz object ausio file
        *@type {Object}
        */
        var currentSong = null;
        var currentBuzzObject = null;
        
        /**
        *@function setSong
        *@desc Stops currently playing song and Loads new audio file as currentBuzzObject
        *@param {Object} data
        */
        var setSong = function(data){
            if(currentBuzzObject){
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(data.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = data;
        };
        
        //assignment
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
            if(currentSong !== data){
                
                setSong(data);
                //assignment
                playSong(data);
            
            }else if(currentSong === data){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
        /**
        *@function setSong
        *@desc Stops currently playing song and Loads new audio file as currentBuzzObject
        *@param {Object} data
        */
        SongPlayer.pause = function(data){
            currentBuzzObject.pause();
            data.playing = false;
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();

