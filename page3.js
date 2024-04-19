document.getElementById('show-photos').addEventListener('click', function() {
    var additionalPhotosDiv = document.getElementById('additional-photos');
    additionalPhotosDiv.style.display = 'block';

    // Krijimi i 10 fotove të tjera
    var photosContainer = document.querySelector('.photos');
    for (var i = 1; i <= 10; i++) {
        var img = document.createElement('img');
        img.src = 'additional-photo' + i + '.jpg';
        img.alt = 'Foto e shtesë ' + i;
        photosContainer.appendChild(img);
    }
});
