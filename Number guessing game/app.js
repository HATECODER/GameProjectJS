const min = 1;
        const max = 100;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min; // Ensure rand is between min and max
        const guessNumber = document.querySelector("#btn");
        const msg = document.querySelector("#msg");
        const numberInput = document.querySelector("#number");

        guessNumber.addEventListener('click', function() {
            const guess = Number(numberInput.value); // Convert input value to a number

            if (guess === rand) {
                msg.innerText = "Matched";
            } else {
                msg.innerText = "Mismatched";
            }
        });