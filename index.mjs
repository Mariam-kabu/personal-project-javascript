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
const chess = {
    id: 'jncb74',
    title: 'Chess',
    lessons: 24,
    description: 'queen & king'
};
// lms
const lms = new LMS();
lms.add(history);
lms.add(math);
lms.add(chess);
// console.log(history);
// console.log(math);
// lms.remove(history);
// console.log(lms.verify(history));
lms.readAll();
