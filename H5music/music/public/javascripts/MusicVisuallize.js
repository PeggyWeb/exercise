function MusicVisualizer(obj){
	this.source = null;
	this.count  = 0;
	this.analyser = MusicVisualizer.ac.createAnalyser();

	this.size=obj.size;
	this.analyser.fftSize=this.size*2;
	this.gainNode=MusicVisualizer.ac[MusicVisualizer.ac.createGain?"createGain":"creaateGain"]();
	this.gainNode.connect(MusicVisualizer.ac.destination);

	this.annalyser.connect(this.gainNode);
	this.xhr=new XMLHttpRequest();
}
MusicVisualizer.ac=new (window.AudioContext||window.webkitAudioContext);
MusicVisualizer.prototype.load=function(url){

}
MusicVisualizer.prototype.play=function(url){


}





