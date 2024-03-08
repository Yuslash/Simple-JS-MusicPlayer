# 🎵 Music Player README 🎶

Welcome to the Music Player repository! This project allows you to create a simple music player interface in your web application.

## ℹ️ Introduction
The Music Player provides functionality to create a basic music player interface with play, pause, next, and previous buttons. It also supports listing songs and displaying song information.

## ✨ Features
- **Play/Pause Control:** Control playback of songs with the play and pause buttons.
- **Next/Previous Buttons:** Navigate between songs using the next and previous buttons.
- **Song Listing:** Display a list of available songs with their titles and artists.
- **Song Information:** Show information about the currently playing song, including its title and artist.

## 🚀 Usage
To use the Music Player in your web application, follow these steps:

1. **Copy the HTML code snippet** below and paste it into your HTML file.
2. **Save the icons** (obtained from Font Awesome and Phosphor Icons) in the appropriate directory or use CDN links.
3. **Customize** the player interface and functionality as needed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎵 Music Player 🎶</title>
    <!-- Include the necessary CSS and JavaScript files -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fontawasome">
    <script src="@phosphor/icons"></script>
</head>
<body> 
    
<div class="box4">
    <!-- Song information and image -->
    <h2 class="playing">
        <span class="song-name"></span>
        <span class="song-nam"></span>
        <img class="song-image" src="/images/enfriend.webp" alt="">
    </h2>

    <!-- Player controls -->
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
