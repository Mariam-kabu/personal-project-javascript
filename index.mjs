import { Subject } from "./subject.mjs";
import { LMS } from "./LMS.mjs";
import { Teachers } from "./teachers.mjs";
import { Pupils } from "./pupils.mjs";
import { Groups } from "./groups.mjs";
import { Gradebooks } from "./gradebooks.mjs";

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
// console.log(isNaN(Date.parse(data.dateOfBirth)));

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
    "dateOfBirth": "05/12/2003", // format date
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "male", // male OR female
    "description": "string"
  };

  const pupil1 = {
    "name": {
      "first": "lana",
      "last": "string"
    },
    "dateOfBirth": "08/04/2003", // format date
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": "female", // male OR female
    "description": "string"
  };


  

// Create new Pupil from Pupil's data
const pupils = new Pupils();
pupils.add(pupil);
pupils.add(pupil1);
// console.log(pupil.id);
pupils.read(pupil.id);
pupils.read(pupil1.id);
// pupils.update(pupil.id, updatedPupil);


// groups 
const room = 236;
const room1 = 17;
const groups = new Groups();

// returns groupId
const groupId = groups.add(room);
const groupId1 = groups.add(room1);
// console.log(groupId);
// console.log(groupId1);

// Add this pupil to this group
groups.addPupil(groupId, pupil);
// console.log(groupId1);
// groups.addPupil(groupId, pupil1);

// Remove this pupil from this group
// groups.removePupil(groupId, pupil1.id);

// Read information about group
const group = groups.read(groupId);

// It will return array of groups
groups.readAll()


// gradebooks
const pupilId = pupil.id;
// const teacherId = teacherId;
const gradebooks = new Gradebooks(groups, teachers, lms);

// Create a new gradebook.
const gradebook = gradebooks.add(group.id);
console.log(gradebook);

const record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };

  
gradebooks.addRecord(groupId, record);