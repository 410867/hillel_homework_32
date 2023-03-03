const arrayNumber1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayNumber2 = [1, 2, [1.1, [1.11, 1.12, 1.13, 1.14, 1.15, 1.16], 1.2, 1.3], 3, 4, 5, [1.1, 1.2, 1.3, 1.4, 1.5, 1.6]];
const main = document.querySelector('.main');

function generateList1(array) {
    const ul = document.createElement('ul');

    array.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = `${item}`;
        ul.append(li);
    });

    return ul;
}

function generateList2(array) {
    const ul = document.createElement('ul');

    array.forEach((item) => {
        const li = document.createElement('li');
        if(Array.isArray(item)) {
            li.append(generateList2(item));
        } else {
            li.innerText = `${item}`;
        }
        ul.append(li);
    });

    return ul;
}

main.append(generateList1(arrayNumber1));
main.append(generateList2(arrayNumber2));