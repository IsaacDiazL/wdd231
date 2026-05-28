const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
const displayCourse = document.querySelector('#courses');
const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');
const nCourses = document.querySelector('#nCourses');
const butContenetor = document.querySelector('.buttonCert')

const courseDetails = document.querySelector('#course-details');

let index = 0;
// this automatized function create span courses and display them on page
// it also filters array to only display the selected info by course buttons

function getCourses(courses, subject) {
    displayCourse.replaceChildren();
    let index = 0;
    courses.forEach(course => {
        const card = document.createElement('span');

        card.textContent = `${course.subject}  ${course.number}`;
        
        
        if (subject == course.subject) {
            if (course.completed) {
                card.classList.add('check');
            }
            card.addEventListener('click', () => {
                displayCourseDetails(course);
            })
            displayCourse.appendChild(card);
             index++;
        }
        else if (subject == "") {
            if (course.completed) {
                card.classList.add('check');
            }
            card.addEventListener('click', () => {
                displayCourseDetails(course);
            })
            displayCourse.appendChild(card);
             index++;
        }

    }
    );
    nCourses.textContent = index;
}

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();
    
    closeModal.addEventListener('click', () => {
        courseDetails.close();
    })
}
//display full list of clases by default
getCourses(courses, all.value.toUpperCase());

// function to store the value of button, no matter which button clicks,
// it stores the value on same variable to then. using it as a paremeter
// on the getCourses() function
butContenetor.addEventListener('click', (event) => {
    if (event.target.tagName == "BUTTON") {
        const getVal = event.target.dataset.val;
        console.log(getVal);
        getCourses(courses, getVal.toUpperCase());
    }

})


    /* This is my first proof of code, although is functionable, it was not
        optimized as it depends of how many statamentes we declare, therefore, if
        it would have more buttons to filter, then needs to create more statementes */

// let index = 0;
//     for (let i in courses) {
//         displayCourse.innerHTML += `
//         <span id="${index}">${courses[i].subject} ${courses[i].number}</span>
//         `;
//         if (courses[i].completed == true) {
//             document.getElementById(index).classList.add('check');
//         }
//         index ++;
//         }
// nCourses.innerHTML = index;
    
// all.addEventListener('click', () => {
//     displayCourse.replaceChildren();
//     index = 0;
//     for (let i in courses) {
//         displayCourse.innerHTML += `
//         <span id="${index}">${courses[i].subject} ${courses[i].number}</span>
//         `;
//         if (courses[i].completed == true) {
//             document.getElementById(index).classList.add('check');
//         }
//         index ++;
//     }
//     nCourses.innerHTML = index;
// })

// cse.addEventListener('click', () => {
//     displayCourse.replaceChildren();
//     index = 0;
//     const cseList = courses.filter(course => course.subject == 'CSE');
//     for (let i in cseList) {
//             displayCourse.innerHTML += `
//         <span id="${index}">${cseList[i].subject} ${cseList[i].number}</span>
//         `;
//         if (cseList[i].completed == true) {
//             document.getElementById(index).classList.add('check');
//         }
//         index++;
//     }
//     nCourses.innerHTML = index;

// })

// wdd.addEventListener('click', () => {
//     displayCourse.replaceChildren();
//     index = 0;
//     const wddList = courses.filter(course => course.subject == 'WDD');
//     for (let i in wddList) {
//         displayCourse.innerHTML += `
//         <span id="${index}">${wddList[i].subject} ${wddList[i].number}</span>
//         `;
//         if (wddList[i].completed == true) {
//             document.getElementById(index).classList.add('check');
//         }
//         index++;
//     }
//     nCourses.innerHTML = index;
// })

