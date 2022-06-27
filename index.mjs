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
            "primary": "boolean"
        }
    ],
    "phones": [
        {
            "phone": "string",
            "primary": "boolean"
        }
    ],
    "sex": "string", // male or female
    "subjects": [
        {
            "subject": "string" // just name property of subject.
        }
    ],
    "description": "string",
};
const teacherId = teachers.add(data);
// console.log(teacherId);
console.log(teachers.read(teacherId));