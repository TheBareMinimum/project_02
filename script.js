let noClickCount = 0;
let yesClickCount = 0;

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
        // Hide the No button after the third click
        noButton.style.display = 'none';
        break;
    }

    // Increase size of Yes button significantly
    yesButton.style.transform = `scale(${1 + yesClickCount * 0.5})`;
  } else if (response === 'Yes') {
    // Increment click count
    yesClickCount++;

    // Update text based on click count
    switch (yesClickCount) {
      case 1:
        responseDiv.innerHTML = 'Someones smashing tonite, lol sorry';
        break;
      default:
        responseDiv.innerHTML = '<3 Looking forward to sphaget shroom bals and fondle balls bye-bye';

        // Hide the Yes button after the last prompt
        yesButton.style.display = 'none';

        // Optionally hide the No button too
        noButton.style.display = 'none';
        break;
    }

    // Decrease size of No button significantly
    noButton.style.transform = `scale(${1 - noClickCount * 0.5})`;
  }
}
