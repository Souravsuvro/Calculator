document.addEventListener('DOMContentLoaded', function() {
    const resultInput = document.querySelector('.result');
    const buttons = document.querySelectorAll('.buttons button');
  
    // Add click event listeners to all buttons
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = button.textContent;
        
        // Clear the result if the button is 'C'
        if (buttonText === 'C') {
          resultInput.value = '';
        }
        // Calculate the result if the button is '='
        else if (buttonText === '=') {
          try {
            const result = eval(resultInput.value);
            resultInput.value = result;
          } catch (error) {
            resultInput.value = 'Error';
          }
        }
        // Append the button value to the input field
        else {
          resultInput.value += buttonText;
        }
      });
    });
  });
  