let noClicks = 0;
let yesClicks = 0;

function showMessage(response) {
  const responseDiv = document.getElementById('response');
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');

  if (response === 'No') {
    noClicks++;

    if (noClicks === 1) {
      responseDiv.innerHTML = 'Ay loud';
      noButton.style.fontSize = '14px';
      yesButton.style.fontSize = '16px';
    } else if (noClicks === 2) {
      responseDiv.innerHTML = 'Bhai masti nai pls, am I not enough for you';
      noButton.style.fontSize = '12px';
    } else if (noClicks === 3) {
      responseDiv.innerHTML = ':&#40; fine';
      noButton.style.display = 'none';
    }
  } else if (response === 'Yes') {
    yesClicks++;

    if (yesClicks === 1) {
      responseDiv.innerHTML = 'Someone\'s smashing tonite, lol sorry';
      yesButton.style.fontSize = '18px';
      noButton.style.fontSize = '16px';
    } else if (yesClicks === 2) {
      responseDiv.innerHTML = '<3 Looking forward to sphaget shroom bals and fondle balls bye-bye';
      yesButton.style.fontSize = '24px';
      noButton.style.fontSize = '12px';
    }

    // Hide the "Yes" button after the second click
    if (yesClicks === 2) {
      yesButton.style.display = 'none';
    }
  }
}

