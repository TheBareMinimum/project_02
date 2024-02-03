function showMessage(response) {
  const responseDiv = document.getElementById('response');
  if (response === 'No') {
    responseDiv.innerHTML = 'Aw, really? Please reconsider!';
  } else if (response === 'Yes') {
    responseDiv.innerHTML = 'Great! Looking forward to it!';
  } else {
    responseDiv.innerHTML = 'Invalid response. Please click Yes or No.';
  }
}
