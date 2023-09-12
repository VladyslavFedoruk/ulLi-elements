function generateList(array, topElement) {
    if (!topElement) {
        topElement = document.createElement('ul');
    }

    for (const item of array) {
        const li = document.createElement('li');

        if (Array.isArray(item)) {
            const ul = document.createElement('ul');
            li.appendChild(ul);
            generateList(item, ul);
        } else {
            li.innerHTML = item;
        }

        topElement.appendChild(li);
    }

    return topElement;
}

const exampleList = [1, 2, [1.1, 1.2, [5.1, 5.2],
    [6.1, 6.2], 1.3
], 3];
const mainElement = generateList(exampleList);
document.body.appendChild(mainElement);