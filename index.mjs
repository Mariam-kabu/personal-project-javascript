import { Subject } from "./subject.mjs";
import { LMS } from "./LMS.mjs";
import { Teachers } from "./teachers.mjs";


//subject 

const history = new Subject({
    title: 'History',
    lessons: 24,
    description: 'bla bla bla'
});
const math = new Subject({
    title: 'Math',
    lessons: 73
});

// console.log(history.id, math.id);
const chess = new Subject({
    id: 'jb74-gyt6',
    title: 'Chess',
    lessons: 14,
    description: 'queen & king'
});
// lms
const lms = new LMS();
lms.add(history);
lms.add(math);
lms.add(chess);
// console.log(history);
// console.log(math);
// lms.remove(history);
// console.log(lms.verify(history));
// lms.readAll();

// teachers 
const teachers = new Teachers();

const data = {
    "name": {
        "first": "string",
        "last": "string"
    },
    "dateOfBirth": "string", // format date
    "emails": [
        {
            "email": "string",
            "primary": true            
        }
    ],
    "phones": [
        {
            "phone": "string",
            "primary": true
        }
    ],
    "sex": "male", // male or female
    "subjects": [
        {
            "subject": "string" // just name property of subject.
        }
    ],
    "description": "string",
};

const updatedProfile = {
    "name": {
        "first": "maka",
        "last": "abuladze"
    },
    "dateOfBirth": '20/12/1985', // format date
    "emails": [
        {
            "email": "string",
            "primary": true            
        }
    ],
    "phones": [
        {
            "phone": "string",
            "primary": true
        }
    ],
    "sex": "female", // male or female
    "subjects": [
        {
            "subject": "music" // just name property of subject.
        }
    ]
};
let teacherId = teachers.add(data);
let otherteacherId = teachers.add(updatedProfile);
// console.log(Object.getOwnPropertyNames(data).length)
// console.log(teachers.read(otherteacherId));
// teacherId = teachers.update(teacherId, updatedProfile);
