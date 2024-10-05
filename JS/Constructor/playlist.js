function Playlist() {
    this.songs = [];
    this.currentIndex = 0;
    
    this.add = function (song) {
        this.songs.push(song);
    }

    this.play = function () {
        const currentSong = this.songs[this.currentIndex];
        currentSong.play();
    }

    this.stop = function () {
        const currentSong = this.songs[this.currentIndex];
        currentSong.stop();
    }

    this.next = function () {
        this.stop();  
        this.currentIndex = (this.currentIndex + 1) % this.songs.length; 
        this.play();  
    }
}

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;

    this.play = function () {
        this.isPlaying = true;
        return `${this.title} by ${this.artist} started to play`;   
    }

    this.stop = function () {
        this.isPlaying = false;
        return `${this.title} by ${this.artist} stopped`    
}
}


const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

playlist.play();  
playlist.next();  
playlist.next(); 
playlist.stop();  
playlist.play();  
