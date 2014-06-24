const content = $("#total")
const left = $("#left")
const status = $("#status")
const fl = $("#file")
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {}
function DownloadingFile( fileName ) {
	fl.html("Currently downloading" + fileName + "...")
}
function SetStatusChanged( status ) {
	status.html(status + "...")
}
function SetFilesTotal( total ) {
	content.html(total + " files to download.")
}
function SetFilesNeeded( needed ) {
	left.html(needed + " files left")
}