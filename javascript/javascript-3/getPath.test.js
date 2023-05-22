const getPath = require('./getPath')

test('getPath returns correct path for non-element node', () => {
    const textNode = document.createTextNode('test');
    const path = getPath(textNode);
    expect(path).toBe('');
});

test('getPath returns correct path for element with id', () => {
    const element = document.createElement('div');
    element.id = 'test';
    document.body.appendChild(element);
    const path = getPath(element);
    expect(path).toBe('body --> div#test');
});

test('getPath returns correct path for element with class', () => {
    const element = document.createElement('div');
    element.className = 'test';
    document.body.appendChild(element);
    const path = getPath(element);
    expect(path).toBe('body --> div.test');
});

test('getPath returns correct path for nested element', () => {
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    const child = document.createElement('span');
    parent.appendChild(child);
    const path = getPath(child);
    expect(path).toBe('body --> div --> span');
});

test('getPath returns the correct long path for the element', () => {
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    const element1 = document.createElement('span');
    parent.appendChild(element1);
    const element2 = document.createElement('div');
    parent.appendChild(element2);
    const element3 = document.createElement('div');
    parent.appendChild(element3);
    const element23 = document.createElement('nav');
    element2.appendChild(element23);
    const element234 = document.createElement('ul');
    element23.appendChild(element234);
    const element2347 = document.createElement('li');
    element234.appendChild(element2347);
    const element23476 = document.createElement('a');
    element2347.appendChild(element23476);
    const path = getPath(element23476);
    expect(path).toBe('body --> div --> div --> nav --> ul --> li --> a');
});
