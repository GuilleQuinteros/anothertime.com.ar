const audio = document.getElementById('audio');
        const playButton = document.getElementById('playButton');
        const progressBar = document.getElementById('progressBar');
        const currentTime = document.getElementById('currentTime');
        const duration = document.getElementById('duration');

        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';
            } else {
                audio.pause();
                playButton.textContent = 'Play';
            }
        });

        audio.addEventListener('timeupdate', () => {
            const current = audio.currentTime;
            const total = audio.duration;
            progressBar.value = (current / total) * 100;
            currentTime.textContent = formatTime(current);
            duration.textContent = formatTime(total);
        });

        progressBar.addEventListener('input', () => {
            const value = progressBar.value;
            audio.currentTime = (value / 100) * audio.duration;
        });

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }