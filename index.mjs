import { Subject } from "./subject.mjs";
import { LMS } from "./LMS.mjs";
import { Teachers } from "./teachers.mjs";
import { Pupils } from "./pupils.mjs";


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
    "dateOfBirth": "18/3/2002", // format date
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
// let validDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// console.log(validDate.test(data.dateOfBirth));
// // console.log(isNaN(Date.parse(data.dateOfBirth)));

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

// pupil
const pupil = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male OR female
    "description": "string"
  }

// Create new Pupil from Pupil's data
const pupils = new Pupils();
pupils.add(pupil);
// console.log(pupil.id);
console.log(pupils.read(pupil.id));
// pupils.update(pupil.id, updatedPupil);
