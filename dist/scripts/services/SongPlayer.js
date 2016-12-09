(function(){
    function SongPlayer($rootScope, Fixtures){
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
        
        /**
        *@desc Current playback time (in seconds) of currently playing song
        *@type {Number}
        */
        SongPlayer.currentTime = null;
        
        //assignment-10
        SongPlayer.volume = null;
        
        var currentBuzzObject = null;
        
        /**
        *@function setSong
        *@desc Stops currently playing song and Loads new audio file as currentBuzzObject
        *@param {Object} data
        */
        var setSong = function(data){
            if(currentBuzzObject){
                stopSong();
            }

            currentBuzzObject = new buzz.sound(data.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.bind('timeupdate', function(){
                $rootScope.$apply(function(){
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            SongPlayer.currentSong = data;
        };
        
        //assignment-10
        var setVolume = function(volume){
            if(currentBuzzObject){
                currentBuzzObject.setVolume(volume);
            }
            
            currentBuzzObject.bind('timeupdate', function(){
                $rootScope.$apply(function(){
                    SongPlayer.volume = currentBuzzObject.getVolume();
                });
            });

            SongPlayer.currentSong = data;
        };
        
        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time){
            if(currentBuzzObject){
                currentBuzzObject.setTime(time);
            }
        };
        
        //assignment-10
        SongPlayer.volume = function(volume){
            if(currentBuzzObject){
                currentBuzzObject.setVolume(volume);
            }
        };
        
        //assignment-7
        var playSong = function(data){
            currentBuzzObject.play();
            data.playing = true;
        };
        
        //assignment-8
        var stopSong = function(){
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
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
        *@desc Stops currently playing song and Loads last audio file as currentBuzzObject
        *@param {Object} data
        */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if(currentSongIndex < 0){
                stopSong();
            }else{
                var data = currentAlbum.songs[currentSongIndex];
                setSong(data);
                playSong(data);
            }
        };
        
        /**
        *@function SongPlayer.next
        *@desc Stops currently playing song and Loads next audio file as currentBuzzObject
        *@param {Object} data
        */
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if(currentSongIndex < 0){
                stopSong();
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
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();

