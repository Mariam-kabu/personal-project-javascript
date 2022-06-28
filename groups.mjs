export class Groups {
    #id = 0;
    #groups = new Map();
    add (room) {
        const id = String(this.#id++);
        const val = {id: id, room: room};
        this.#groups.set(id, val)
        return id;
    }
    addPupil (groupId, pupil) {
        if (!this.#groups.get(groupId).hasOwnProperty('pupils'))
            this.#groups.get(groupId).pupils = [pupil];
        else this.#groups.get(groupId).pupils = this.#groups.get(groupId).pupils.concat(pupil);
    }
    removePupil (groupId, pupilId) {
        const findPupil = this.#groups.get(groupId).pupils
        .find(({id}) => id === pupilId);
        const index = this.#groups.get(groupId).pupils.indexOf(findPupil);
        if (index > -1) this.#groups.get(groupId).pupils.splice(index, 1);
    }
    update (groupId, room) {
        this.#groups.get(groupId).room = room;
    }
    read (groupId) {
        return this.#groups.get(groupId);
    }
    readAll () {
        return this.#groups;
    }
}