window.onload = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // start
    let keyboard = document.getElementById('keyboard');
    console.log(keyboard);
    // end

    alphabet.forEach(letter => {
        // start
        let keyButton = document.createElement('input');
        keyButton.type = 'button';
        keyButton.value = letter;
        keyButton.classList.add('key');
        keyButton.classList.add('selected');
        keyButton.id = letter;
        keyButton.addEventListener('click', event => {
            console.log(event);
            highlightLetter(event.target.id);
        })
        console.log(keyButton);
        keyboard.appendChild(keyButton);
        // end
    });
}

// start
document.addEventListener('keydown', event => {
    highlightLetter(event.key);
})
// end


function highlightLetter(letter){
    // start
    console.log(letter);
    let output = document.getElementById('output-text');
    output.innerText = output.innerText + letter;
    let key = document.getElementById(letter);
    key.classList.toggle('selected');
    setTimeout(function() {
        key.classList.toggle('selected');
    }, 150)
    // end
}
