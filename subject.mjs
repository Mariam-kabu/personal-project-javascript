class Subject {
    constructor ({title, lessons, description} = {}) {
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        if (title === undefined || lessons === undefined || typeof title !== 'string' || typeof lessons !== 'number') 
            throw new Error ('Invalid input');
        else if (description === undefined) delete this.description;
    }
};

// test code

const history = new Subject({
    title: 'History',
    lessons: 24,
    description: 'bla bla bla'
});

const math = new Subject({
    title: 'Math',
    lessons: 73
});

console.log(math);