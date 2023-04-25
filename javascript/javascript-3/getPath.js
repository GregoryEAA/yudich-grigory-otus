function getPath(element) {
    const path = [];
    while (element.nodeType === 1) {
        let selector = element.nodeName.toLowerCase();
        if(selector === 'html') {
            break;
        }
        if (element.id) {
            selector += `#${element.id}`;
        } else if(element.className) {
            selector += `.${element.className}`;
        } else {
            let sib = element, nth = 1;
            while (sib === sib.previousElementSibling) {
                if (sib.nodeName.toLowerCase() === selector)
                    nth++;
            }
            if (nth !== 1)
                selector += ":nth-of-type("+nth+")";
        }
        path.unshift(selector);
        element = element.parentNode;
    }
    return path.join(" --> ");
}

module.exports = getPath;

// Проверка использую HTML документ с шаблоном
// console.log(`${getPath(document.querySelector('.features-text'))}`);
// Результат: 'body --> main --> div.features --> div.container --> div.row --> div.col-3 --> p.features-text'

// console.log(`${getPath(document.querySelector('#promo_link'))}`);
// Результат: 'body --> main --> div.promo --> div.container --> h1#promo_link'
