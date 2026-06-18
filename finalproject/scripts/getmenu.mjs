export async function getMenu(getdata, container, b1, b2, b3, b4, b5, title) {
    try {
        const response = await fetch(getdata);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            menuCards(data.menu, container, b1, b2, b3, b4, b5, title);
        }
        else {
            throw Error(await response.text());
            
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function ourMenu(getdata, container) {
    try {
        const response = await fetch(getdata);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            mainCourses(data.menu, container);
        }
        else {
            throw Error(await response.text());
            
        }
    }
    catch (error) {
        console.log(error);
    }
}

function menuCards(data, container, b1, b2, b3, b4, b5, title) {
    container.replaceChildren();
    title.textContent = 'All';
    menufilter(data.appetizers, container);
    menufilter(data.main_courses, container);
    menufilter(data.desserts, container);
    menufilter(data.drinks, container);

    b1.addEventListener('click', () => {
        container.replaceChildren();
        title.textContent = 'All';
        menufilter(data.appetizers, container);
        menufilter(data.main_courses, container);
        menufilter(data.desserts, container);
        menufilter(data.drinks, container);
    })
    b2.addEventListener('click', () => {
        container.replaceChildren();
        title.textContent = 'Appetizers';
        menufilter(data.appetizers, container);
    })
    b3.addEventListener('click', () => {
        container.replaceChildren();
        title.textContent = 'Main Courses';
        menufilter(data.main_courses, container);
    })
    b4.addEventListener('click', () => {
        container.replaceChildren();
        title.textContent = 'Desserts';
        menufilter(data.desserts, container);
    })
    b5.addEventListener('click', () => {
        container.replaceChildren();
        title.textContent = 'Drinks';
        menufilter(data.drinks, container);
    })
}

function mainCourses(data, container) {
    container.replaceChildren();
    const menulist = ['appetizers', 'main_courses', 'desserts', 'drinks'];
    const max = menulist.length;
    const index = Math.floor(Math.random() * max);
    const i = menulist[index];
    console.log(i);
    menufilter(data[i], container);

}

function menufilter(dataA, containerA) {
    dataA.forEach(menu => {
        const section = document.createElement('section');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('span');

        image.src = `./images/${menu.image_reference}`;
        image.alt = menu.name;
        image.loading = 'lazy';
        name.textContent = menu.name;
        description.textContent = menu.description;
        price.textContent = `$${menu.price_usd} USD`

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(price);
        containerA.appendChild(section);
    });
}

function getrandommenu() {
    const menulist = ['appetizers', 'main_courses', 'Desserts', 'Drinks'];
    const max = menulist.length;
    const index = Math.floor(Math.random() * max);
    const result = menulist[index];
    return result;
}