window.addEventListener("load", () => {
    function sound(soundButton, audioPath) {
        this.soundButton = soundButton;
        this.audio = new Audio(audioPath);
    }
    var audioOne = new sound("w", "https://github.com/XakerCool/web_tech_final/raw/main/sounds/sound_1.mp3");
    var audioTwo = new sound("a", "https://github.com/XakerCool/web_tech_final/raw/main/sounds/sound_2.mp3");
    var audioThree = new sound("s", "https://github.com/XakerCool/web_tech_final/raw/main/sounds/sound_3.mp3");
    var audioFour = new sound("d", "https://github.com/XakerCool/web_tech_final/raw/main/sounds/sound_4.mp3");
    let isCombinationPressed = [false, false, false, false];
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "w": {
                audioOne.audio.play();
                isCombinationPressed[0] = true;
                break;
            }
            case "a": {
                audioTwo.audio.play();
                isCombinationPressed[1] = true;
                break;
            }
            case "s": {
                audioThree.audio.play();
                isCombinationPressed[2] = true;
                break;
            }
            case "d": {
                audioFour.audio.play();
                isCombinationPressed[3] = true;
                break;
            }
        }
        if (isCombinationPressed.every((item) => {
            return item == true;
        })) {
            window.location.href = "make_burger.html";
        }
    })
})