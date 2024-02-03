let noClickCount = 0;

function showMessage(response) {
  const responseDiv = document.getElementById('response');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  if (response === 'No') {
    // Increment click count
    noClickCount++;

    // Update text based on click count
    switch (noClickCount) {
      case 1:
        responseDiv.innerHTML = 'Ay lodu';
        break;
      case 2:
        responseDiv.innerHTML = 'Bhai masti nai pls, am I not enough for you';
        break;
      case 3:
        responseDiv.innerHTML = ':(';
        noButton.style.display = 'none'; // Hide the No button after the third click
        break;
    }

    // Add animations to buttons
    yesButton.classList.add('increaseSize');
    noButton.classList.add('decreaseSize');

    // Remove the 'increaseSize' and 'decreaseSize' classes after the animation completes
    setTimeout(() => {
      yesButton.classList.remove('increaseSize');
      noButton.classList.remove('decreaseSize');
    }, 500);
  } else if (response === 'Yes') {
    // Add animations to buttons
    yesButton.classList.add('increaseSize');
    noButton.classList.add('decreaseSize');

    // Update text based on previous click count for 'Yes' button
    if (noClickCount === 0) {
      responseDiv.innerHTML = 'Someones smashing tonite, lol sorry';
    } else if (noClickCount >= 1) {
      responseDiv.innerHTML = '<3 Looking forward to sphaget shroom bals and fondle balls bye-bye';
    }

    // Remove the 'increaseSize' and 'decreaseSize' classes after the animation completes
    setTimeout(() => {
      yesButton.classList.remove('increaseSize');
      noButton.classList.remove('decreaseSize');
    }, 500);
  }
}
