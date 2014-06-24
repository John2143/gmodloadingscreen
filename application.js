function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {}
function DownloadingFile( fileName ) {}
function SetStatusChanged( status ) {}
const content = $("#total")
const left = $("#left")
function SetFilesTotal( total ) {
	content.html(total + " files left")
}
function SetFilesNeeded( needed ) {
	left.html(needed + " files left")
}