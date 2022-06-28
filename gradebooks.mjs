//</3
export class Gradebooks {
    #validateGradebook (book) {
        if (Object.getOwnPropertyNames(book).length !== 2) throw new Error('invalid property');
        if (!book.hasOwnProperty('name') || !book.hasOwnProperty('records')) throw new Error('missing property');
        if (book.name && typeof book.name !== 'string') throw new Error('invalid name');
        if (!Array.isArray(book.records)) throw new Error('invalid record');
        else {
            for (let i=0; i<book.records.length; i++) {
                let rec = book.records[i];
                if (typeof rec !== 'object' || Array.isArray(rec) || Object.getOwnPropertyNames(rec).length !== 4)
                    throw new Error;
                else {
                    for (let j=0; j<Object.getOwnPropertyNames(rec).length; j++) {
                        let par = rec[j];
                        if (par.teacher && typeof par.teacher !== 'string'
                            || par.subject && typeof par.subject !== 'string')
                            throw new Error('not string');
                        if (par.lesson = undefined && typeof par.lesson !== 'number' || (par.mark = undefined && typeof par.mark !== 'number'))
                            throw new Error('should be number')
                    }
                }
            }
        }
    }   
    #gradebooks = new Map();
    constructor (groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add (groupId) {
        const groupVal = this.groups
        .find(({id}) => id === groupId);
        const newGradebook = {
            gradebookId: groupId,
            groupId: groupId,
            pupils: groupVal.pupils,
            records: []
        }
        this.#gradebooks.set(groupId, newGradebook);
    }
    clear () {
        this.#gradebooks.clear();
    }
    addRecord (gradebookId, record) {
        this.#gradebooks.get(gradebookId).record = this.#gradebooks.get(gradebookId).record.concat(record);
    }
    read (gradebookId, pupilId) {
        const findPupile = this.#gradebooks.get(gradebookId).pupils.find(({id}) => id === pupilId);
        const name = findPupile.name.first + " " + findPupile.last;
        const findRecord = this.#gradebooks.get(gradebookId).records;
        const pupilRecord = {
            name: name,
            records: [findRecord]
        };
        this.#validateGradebook(pupilRecord);
        return pupilRecord;
    }
    readAll (gradebookId) {
        return this.#gradebooks.get(gradebookId);
    }
}