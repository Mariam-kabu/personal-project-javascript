import { Subject } from "./subject.mjs";
import { LMS } from "./LMS.mjs";


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

// lms
const lms = new LMS();
lms.add(history);
lms.add(math);
// console.log(history);
// console.log(math);
// lms.remove(history);
// console.log(lms.verify(history));
lms.readAll();