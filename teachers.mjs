export class Teachers {
    #id = 0;
    #teachersDATA = new Map();
    #dataValidation ( data) {
        if (typeof data !== 'object' || Array.isArray(data) || data === null)
            throw new  TypeError('Invalid param was passed, should be an object');
        if (Object.getOwnPropertyNames(data).length !== 7 && Object.getOwnPropertyNames(data).length !== 6)
            throw new Error('incorrect amount of properties were passed');
        if (!data.hasOwnProperty('name') 
            || !data.hasOwnProperty('dateOfBirth') 
            || !data.hasOwnProperty('emails') 
            || !data.hasOwnProperty('phones') 
            || !data.hasOwnProperty('sex') 
            || !data.hasOwnProperty('subjects'))
            throw new Error('required property is missing');
        if (typeof data.name !== 'object' || Array.isArray(data.name) || data.name === null)
            throw new Error('invalid tachers name');
        else if (!data.name.hasOwnProperty('first') 
                || !data.name.hasOwnProperty('last') 
                || Object.getOwnPropertyNames(data.name).length !== 2)
            throw new Error('invalid name properties');
        else if (data.name.first && typeof data.name.first !== 'string')
            throw new TypeError('first name should be a string');
        else if (data.name.last && typeof data.name.last !== 'string')
            throw new TypeError('last name should be a string');
        if (data.dateOfBirth && typeof data.dateOfBirth !== 'string')
            throw new TypeError('date of birth should be a string');
        if (!Array.isArray(data.emails)) throw new TypeError ('emails should be an array');
        else {
            for (let i=0; i<data.emails.length; i++){
                let param = data.emails[i];
                if (typeof param !== 'object' || Array.isArray(param) || param === null)
                    throw new TypeError('email array doesnt contain an object');
                else if (!param.hasOwnProperty('email') || !param.hasOwnProperty('primary') || Object.getOwnPropertyNames(param).length !== 2)
                    throw new Error ('invalid email properties');
                else if (param.email && typeof param.email !== 'string')
                    throw new Error('email should be a string');
                else if (typeof param.primary !== 'boolean')
                    throw new Error('primary should be boolean');
            }
        }
        if (!Array.isArray(data.phones)) throw new TypeError ('phones should be an array');
        else {
            for (let i=0; i<data.phones.length; i++){
                let param = data.phones[i];
                if (typeof param !== 'object' || Array.isArray(param) || param === null)
                    throw new TypeError('phone array doesnt contain an object');
                else if (!param.hasOwnProperty('phone') || !param.hasOwnProperty('primary') || Object.getOwnPropertyNames(param).length !== 2)
                    throw new Error ('invalid phone properties');
                else if (param.email && typeof param.email !== 'string')
                    throw new Error('phone should be a string');
                else if (typeof param.primary !== 'boolean')
                    throw new Error('primary should be boolean');
            }
        }
        if (data.sex && typeof data.sex !== 'string') throw new TypeError('sex should be a string');
        else if (data.sex !== 'male' && data.sex !== 'female') throw new Error('invalid sex');
        if (!Array.isArray(data.subjects)) throw new TypeError ('subjects should be an array');
        else {
            for (let i=0; i<data.subjects.length; i++){
                let param = data.subjects[i];
                if (typeof param !== 'object' || Array.isArray(param) || param === null)
                    throw new TypeError('subjects array doesnt contain an object');
                else if (!param.hasOwnProperty('subject') || Object.getOwnPropertyNames(param).length !== 1)
                    throw new Error ('invalid subject property');
                else if (param.subject && typeof param.subject !== 'string')
                    throw new Error('subject should be a string');
            }
        }
        if (data.hasOwnProperty('description') && (typeof data.description !== 'string' || Object.getOwnPropertyNames(data).length !== 7))
            throw new Error('invalid description');
    }

    #IDvalidation (id) {
        if (typeof id !== 'string' || !this.#teachersDATA.has(id)) 
            throw new TypeError('invalid teacher id');
    }

    add (teacherData) {
        this.#dataValidation(teacherData);
        const id = String(this.#id++);
        teacherData.id = id;
        this.#teachersDATA.set(id, teacherData);
        return id;
    }
    read (teacherId) {
        this.#IDvalidation(teacherId);
        return this.#teachersDATA;
    }
    update (teacherId, updatedProfile) {
        this.#IDvalidation(teacherId);
        this.#dataValidation(updatedProfile);
        this.#teachersDATA.set(teacherId, updatedProfile);
        updatedProfile.id = teacherId;
        return teacherId;
    }
    remove (teacherId) {
        this.#IDvalidation(teacherId);
        this.#teachersDATA.delete(teacherId);
    }
}