function markTried() {
    document.querySelectorAll('.bento-item').forEach(item => {
        for (let child of item.children) {
                if (child.classList.contains('click-me')) {
                    child.classList.add('disappear');
                }
        }
    })
}

document.querySelectorAll('.bento-item').forEach(item => {
    item.addEventListener('touchstart', () => {
        item.classList.toggle('flipped');
    
        markTried()
    });

    item.addEventListener('mouseover', () => {
        item.classList.add('flipped');


        markTried()
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('flipped');


        markTried();
    });
});