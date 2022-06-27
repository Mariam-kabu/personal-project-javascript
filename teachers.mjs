export class Teachers {
    #id = 0;
    #teachersDATA = new Map();
    add (teacherData) {
        const id = String(this.#id++);
        teacherData.id = id;
        this.#teachersDATA.set(id, teacherData);
        return id;
    }
    read (teacherId) {
        return this.#teachersDATA.get(teacherId)
    }
    update (teacherId, updatedProfile) {
        this.#teachersDATA.get(teacherId) = updatedProfile;
        updatedProfile.id = teacherId;
        return teacherId;
    }
    remove (teacherId) {
        this.#teachersDATA.delete(teacherId);
    }
}