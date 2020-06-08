const paragaphs = document.querySelectorAll('p');

paragaphs.forEach(p => {
    if (p.innerText.includes('error')) {
        p.classList.add('error');
    } else if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
});