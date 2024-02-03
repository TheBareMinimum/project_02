function showMessage(response) {
  const responseDiv = document.getElementById('response');
  if (response === 'No') {
    responseDiv.innerHTML = 'Aw, really? Please reconsider!';
  } else {
    responseDiv.innerHTML = 'Great! Looking forward to it!';
  }
}
