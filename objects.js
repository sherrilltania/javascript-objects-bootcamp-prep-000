var playlist = {artist: 'song'}
console.log(playlist)

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  playlist
}
 function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;

 }
