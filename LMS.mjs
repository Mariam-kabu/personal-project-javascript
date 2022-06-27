export class LMS {
    #lms = new Map();
    #index = 0;
    add (subject) {
        const index = String(this.#index++);
        this.#lms.set(index, subject);
        return this.#lms;
    }
    remove (subject) {
        this.#lms.forEach((value, key) => {
            if (JSON.stringify(value) === JSON.stringify(subject))
                this.#lms.delete(key);
        });
    }
    verify (subject) {
        for (const value of this.#lms.values())
            return (JSON.stringify(value) === JSON.stringify(subject)) 
    }
    readAll() {
        const values = Array.from(this.#lms.values())
        console.log(values);
    }
}