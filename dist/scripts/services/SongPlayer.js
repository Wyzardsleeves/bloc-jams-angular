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
        *@param {Object} song
        */
        var playSong = function(){
            currentBuzzObject.play();
            
        };
        
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
        
        SongPlayer.play = function(data) {
            if(currentSong !== data){
                
                setSong(data);    
                currentBuzzObject.play();
                data.playing = true;
            
            }else if(currentSong === data){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
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

/* Buttons functioning but not re-usable
(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {};
        
        var currentSong = null;
        var currentBuzzObject = null;
        
        SongPlayer.play = function(data) {
            if(currentSong !== data){
                if(currentBuzzObject){
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
                
                currentBuzzObject = new buzz.sound(data.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                });
                
                currentSong = data;
    
                currentBuzzObject.play();
                data.playing = true;
            
            }else if(currentSong === data){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
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

*/

/*

(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {};
        
        SongPlayer.play = function(data) {
            var currentBuzzObject = new buzz.sound(data.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.play();
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();

*/