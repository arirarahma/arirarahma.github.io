let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/LVLZ2.jpg') {
      myImage.setAttribute ('src','images/LVLZ1.jpg');
    } else {
      myImage.setAttribute ('src','images/LVLZ2.jpg');
    }
}
