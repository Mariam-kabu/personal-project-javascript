export class Groups {
    #id = 0;
    #groups = new Map();
    #newPupils = new Map();
    add (room) {
        const id = String(this.#id++);
        const val = {id: id, room: room};
        this.#groups.set(id, val)
        return id;
    }
    addPupil (groupId, pupil) {
        if (!this.#groups.get(groupId).hasOwnProperty('pupils')) {
            const newPupiles = new Map();
            newPupiles.set(pupil.id, pupil);
            // const pupilArr = Array.from(this.#newPupils.values());
            this.#groups.get(groupId).pupils = newPupiles.values();
        } else {
            // newPupiles.set(pupil.id, pupil);
            // newPupiles.set(pupil.id, pupil);
            // this.#groups.get(groupId).pupils = [...newPupiles.values()];
            return this.#groups.get(groupId).pupils = [pupil];
        }
        
        // this.#newPupils.set(pupil.id, pupil);
        // const pupilArr = Array.from(this.#newPupils.values());
        // this.#groups.get(groupId).pupils = [...pupilArr];
        return this.#groups.get(groupId);
    }
    removePupil (groupId, pupilId) {
        this.#groups.get(groupId).pupils
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