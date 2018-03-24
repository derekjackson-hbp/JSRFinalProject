
var player, player2;

var onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'B8BD9txkGL4',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    player2 = new YT.Player('player2', {
      height: '1',
      width: '1',
      videoId: 'J7FLWXxxjsw',
      events: {
        'onReady': onPlayerReady2,
        'onStateChange': onPlayerStateChange
      }
    });
  }

      // 4. The API will call this function when the video player is ready.
var onPlayerReady = function(event) {
  {debugger}
  event.target.pauseVideo();
  event.target.unMute();
  // move the callback to when video is ready
  setPage();
};
var onPlayerReady2 = function(event) {
  event.target.pauseVideo();
  event.target.mute();
};

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
var done = false;
var  onPlayerStateChange = function(event){
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 60000);
    done = true;
    replay();
  }
};

function stopVideo() {
  player.stopVideo();
  player2.stopVideo();
};
function playVideo(){
  player.playVideo();
  player2.playVideo();
};
var pauseVideo = function(){
  player.pauseVideo();
  player2.pauseVideo();
};
function mute(){
  player.mute();
  player2.unMute();
};
function unMute(){
  player.unMute();
  player2.mute();
};
function seekTo(){
  player.seekTo(0, true);
  player2.seekTo(0,true);
};

function init (){
  onYouTubeIframeAPIReady();
  onPlayerReady();
  onPlayerReady2();
  onPlayerStateChange();  
};


function change(){
  var x = this.getAttribute('aria-pressed');
  var x1 = this.getAttribute('data-feat');
  var f1;
  var f2;
  switch (x1){
    case ('mute'):
      f1 = mute;
      f2 = unMute;
      break;
    case ('play'):
      f1 = playVideo;
      f2 = pauseVideo;
      break;
  }
  if (x == "false"){
    f1();
    this.setAttribute('aria-pressed','true');
    this.setAttribute('class','active');
  } else {
    f2();
    this.setAttribute('aria-pressed','false');
    this.setAttribute('class','inactive')
  }
};
 var setPage = function() {
document.getElementById('skiplink').focus(); 
document.getElementById('ol').className='overlay'; 
document.getElementById('read').className='button on';
document.getElementById('dys').className='button off';
 };


  document.getElementById('mute').setAttribute('class','');
  document.getElementById('play').setAttribute('class','');
  document.getElementById('reload').setAttribute('class','');
  document.getElementById('mute').addEventListener('click',change);
  document.getElementById('play').addEventListener('click',change);
  document.getElementById('reload').addEventListener('click',seekTo);
  
  window.onload = init();
    
