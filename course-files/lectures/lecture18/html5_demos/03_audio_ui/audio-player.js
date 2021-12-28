const AudioPlayer = (selector, audioFile) => {
    let audio;
    let playButton;
    let rwdButton;
    let ffwdButton;
    let sliderInput;
    let containerElement = document;
    if (selector) {
        containerElement = document.querySelector(selector);
    }

    this.isPaused = () => {
        return audio.paused;
    };

    this.togglePlay = () => {
        if (audio.paused) {
            this.play();
        } else {
            this.pause();
        }
    };

    this.play = () => {
        console.log('play');
        playButton.classList.remove('fa-play-circle', 'fa-pause-circle');
        jumpToTime();
        audio.play();
        playButton.classList.add('fa-pause-circle');
        
    };

    this.pause = () => {
        playButton.classList.remove('fa-play-circle', 'fa-pause-circle');
        jumpToTime();
        audio.pause();
        playButton.classList.add('fa-play-circle');
    };

    const jumpToTime = () => {
        const progressController = containerElement.querySelector('#player-time');
        const timeElapsed = containerElement.querySelector('#time-elapsed');
        const timeTotal = containerElement.querySelector('#time-total');
        //console.log(getSliderPosition(), getCurrentTime(), getDuration());
        if (getDuration() === "0NaN:0NaN") {
            console.log('returning...');
            return;
        }
        
        progressController.value = getSliderPosition();
        timeElapsed.innerHTML = getCurrentTime();
        timeTotal.innerHTML = getDuration();
    };

    const skipForward = () => {
        if (audio.currentTime < audio.duration) {
            audio.currentTime += audio.duration / 10;
        } else {
            audio.currentTime = audio.duration;
        }
    };

    const skipBackward = () => {
        if (audio.currentTime > 0) {
            audio.currentTime -= audio.duration / 10;
        } else {
            audio.currentTime = 0;
        }
    };

    const customTime = (ev) => {
        const newTime = audio.duration * parseInt(ev.target.value) / 100;
        audio.currentTime = parseInt(newTime) + 1;
        jumpToTime();
    };

    const getSliderPosition = () => {
        return parseInt(audio.currentTime / audio.duration * 100);
    };

    const getDuration = () => {
        return formatTime(audio.duration);
    };

    const getCurrentTime = () => {
        return formatTime(audio.currentTime);
    };

    const resetTime = () => {
        audio.currentTime = 0;
        playButton.classList.remove('fa-pause-circle')
        playButton.classList.add('fa-play-circle');
        jumpToTime();
    };

    const formatTime = (timeCount) => {
        var seconds = timeCount,
            minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    };

    this.setAudioFile = (audio_url) => {
        audio.src = audio_url;
    };

    this.getAudioFile = (audio_url) => {
        return audio.src;
    };


    this.initialize = () => {
        // init DOM hooks:
        audio = containerElement.querySelector('#track');
        playButton = containerElement.querySelector('#play_pause');
        rwdButton = containerElement.querySelector('#rwd');
        ffwdButton = containerElement.querySelector('#ffwd');
        sliderInput = containerElement.querySelector('#player-time');

        console.log(audio, playButton);
        // attach events to event handlers (i.e. functions)
        audio.ontimeupdate = jumpToTime;
        audio.onended = resetTime;
        audio.onloadeddata = function() {
            console.log("preview loaded");
            //resetTime();
            //this.pause();
        };
        playButton.onclick = this.togglePlay;
        rwdButton.onclick = skipBackward;
        ffwdButton.onclick = skipForward;
        sliderInput.oninput = customTime;
        sliderInput.onchange = customTime;
    };
    this.initialize();
    if (audioFile) {
        this.setAudioFile(audioFile);
    }
    return this;
};

