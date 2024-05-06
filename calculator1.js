document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#calculator button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'c') {
                display.value = '';
            } else if (button.textContent === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (button.textContent === 'del') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += button.textContent;
            }
        });
    });
});
