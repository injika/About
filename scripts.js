const emojis = ["🧚‍♀","🧚‍♀","🦄","🦄","🐧","🐧","🐨","🐨","🐼","🐼","🐳","🐳","🦋","🦋","🙉","🙉"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);
for (var i = 0; i<emojis.length; i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]
    document.querySelector('.game').appendChild(box);

    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if (document.querySelectorAll('.boxOpen')[0].innerHTML ==
                    document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if(document.querySelectorAll('.boxMatch').length == emojis.length){
                        alert('You win!');
                    }

                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        },500);
    }
}
document.querySelector('.reset').addEventListener('click', function() {
document.querySelectorAll('.item').forEach(function(box) {
    box.innerHTML = '';
    box.classList.remove('boxOpen', 'boxMatch');
});

shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

document.querySelectorAll('.item').forEach(function(box, index) {
    box.innerHTML = shuf_emojis[index];
});
});
document.addEventListener('DOMContentLoaded', function() {
const bgMusic = document.getElementById('bgMusic');

bgMusic.play();
});

const toggleButton = document.getElementById('toggleMusic');

const bgMusic = document.getElementById('bgMusic');

toggleButton.addEventListener('click', function() {
if (bgMusic.paused) {
bgMusic.play();
toggleButton.textContent = "Pause Music";
} else {
bgMusic.pause();
toggleButton.textContent = "Play Music";
}
});
