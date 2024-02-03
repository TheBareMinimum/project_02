function showMessage(response) {
  document.getElementById('response').innerHTML = response;

  if (response === 'No') {
    // Add 'shake' and 'increaseSize' classes to the Yes button
    document.getElementById('yesButton').classList.add('shake', 'increaseSize');
    // Remove the classes after the animation completes
    setTimeout(() => {
      document.getElementById('yesButton').classList.remove('shake', 'increaseSize');
    }, 500);
  }
}
