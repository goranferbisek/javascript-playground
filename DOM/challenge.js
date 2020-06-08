const paragaphs = document.querySelectorAll('p');

paragaphs.forEach(p => {
    p.innerText.split(' ').forEach(word => {
        if (word === 'error') {
            p.classList.add('error');
        } else if (word === 'success') {
            p.classList.add('success');
        }
    });
});