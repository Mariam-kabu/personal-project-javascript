export class Gradebooks {
    #gradebooks = new Map();
     // ?!
    constructor (groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add (groupId) {
        // ?!
        const groupVal = this.groups.groups.get(groupId);
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
        // const pupilRecord = this.groups.get(gradebookId).pupils.find(({id}) => id === pupilId);

    }
}