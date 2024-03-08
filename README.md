# Music Player 🎵

Welcome to the Music Player repository! This project allows you to create a simple music player interface in your web application.

## ℹ️ Introduction
The Music Player provides functionality to create a basic music player interface with play, pause, next, and previous buttons. It also supports listing songs and displaying song information.

## ✨ Features
- Play/Pause Control: Control playback of songs with the play and pause buttons.
- Next/Previous Buttons: Navigate between songs using the next and previous buttons.
- Song Listing: Display a list of available songs with their titles and artists.
- Song Information: Show information about the currently playing song, including its title and artist.

## 🚀 Usage
To use the Music Player, simply include it in your web application and follow the instructions provided in the documentation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-MJWE6LhV99g2jZxvf8wh/iWP2cZEeZ7rb9I1rQrIKFZv1iWX77kK+SwrDEBzZC0C" crossorigin="anonymous">
    <script src="https://unpkg.com/@phosphor/icons"></script>
</head>
<body> 
    
<div class="box4">
    <h2 class="playing">
        <span class="song-name"></span>
        <span class="song-nam"></span>
        <img class="song-image" src="/images/songimage.webp" alt="">
    </h2>

    <div class="ibuttons">
        <div class="prev"><i class="fas fa-backward-step fa-2x"></i></div>
        <div class="playbutton"><i class="fas fa-play-circle fa-3x" id="ctrIcon"></i></div>
        <div class="forw"><i class="fas fa-forward-step fa-2x"></i></div>
        <div class="shuffle"><i class="fas fa-random"></i></div>
        <div class="repeat"><i class="fas fa-redo"></i></div>
    </div>
    
</div>

<script src="script.js"></script>
</body>
</html>
