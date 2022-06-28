export class Groups {
    #id = 0;
    #groups = new Map();
    #IDvalidation (id) {
        if (typeof id !== 'string' || !this.#groups.has(id)) 
            throw new TypeError('invalid pupil id');
    }
    add (room) {
        const id = String(this.#id++);
        const val = {id: id, room: room};
        this.#groups.set(id, val)
        return id;
    }
    addPupil (groupId, pupil) {
        this.#IDvalidation(groupId);
        if (!this.#groups.get(groupId).hasOwnProperty('pupils'))
            this.#groups.get(groupId).pupils = [pupil];
        else this.#groups.get(groupId).pupils = this.#groups.get(groupId).pupils.concat(pupil);
    }
    removePupil (groupId, pupilId) {
        this.#IDvalidation(groupId);
        const findPupil = this.#groups.get(groupId).pupils
        .find(({id}) => id === pupilId);
        if (findPupil === undefined) throw new Error('no such kind record');
        const index = this.#groups.get(groupId).pupils.indexOf(findPupil);
        if (index > -1) this.#groups.get(groupId).pupils.splice(index, 1);
    }
    update (groupId, room) {
        this.#IDvalidation(groupId);
        if (typeof room !== 'number' || isNaN(room)) throw new TypeError('invalid room param');
        this.#groups.get(groupId).room = room;
    }
    read (groupId) {
        this.#IDvalidation(groupId);
        return this.#groups.get(groupId);
    }
    readAll () {
        return this.#groups;
    }
}