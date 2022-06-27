export class LMS {
    #lms = new Map();
    #index = 0;
    #validateSubject (subject) {
        if (typeof subject !== 'object' || Array.isArray(subject) || subject === null)
            throw new  TypeError('Invalid param was passed, should be an object');
        if (Object.getOwnPropertyNames(subject).length !== 4 && Object.getOwnPropertyNames(subject).length !== 3)
            throw new Error('incorrect amount of properties were passed');
        if (!subject.hasOwnProperty('id') || !subject.hasOwnProperty('title') || !subject.hasOwnProperty('lessons'))
            throw new Error('required property is missing');
        if (subject.id && typeof subject.id !== 'string')
            throw new TypeError('ID should be a string');
        if (subject.title && typeof subject.title !== 'string')
            throw new TypeError('title should be a string');
        if (subject.lessons !== undefined && typeof subject.lessons !== 'number')
            throw new TypeError('lessons should be a number');
        if (subject.hasOwnProperty('description') && typeof subject.description !== 'string')
            throw new TypeError('description should be a string');

    }       
    add (subject) {
        this.#validateSubject(subject);
        const index = String(this.#index++);
        this.#lms.set(index, subject);
        return this.#lms;
    }
    remove (subject) {
        this.#validateSubject(subject);
        this.#lms.forEach((value, key) => {
            if (JSON.stringify(value) === JSON.stringify(subject))
                this.#lms.delete(key);
        });
    }
    verify (subject) {
        this.#validateSubject(subject);
        for (const value of this.#lms.values())
            return (JSON.stringify(value) === JSON.stringify(subject)); 
    }
    readAll() {
        const values = Array.from(this.#lms.values());
        console.log(values);
    }
}