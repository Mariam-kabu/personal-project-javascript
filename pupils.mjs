export class Pupils {
    #id = 0;
    #pupilsDATA = new Map();
    #dataValidation ( data) {
        if (typeof data !== 'object' || Array.isArray(data) || data === null)
            throw new  TypeError('Invalid param was passed, should be an object');
        if (Object.getOwnPropertyNames(data).length !== 5 && Object.getOwnPropertyNames(data).length !== 4)
            throw new Error('incorrect amount of properties were passed');
        if (!data.hasOwnProperty('name') 
            || !data.hasOwnProperty('dateOfBirth') 
            || !data.hasOwnProperty('phones') 
            || !data.hasOwnProperty('sex'))
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
            throw new TypeError('date of birth should be a date string');
        // else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/g.test(data.dateOfBirth)) 
        //     throw new Error('string should have a date format');
        if (!Array.isArray(data.phones)) throw new TypeError ('phones should be an array');
        else {
            for (let i=0; i<data.phones.length; i++){
                let param = data.phones[i];
                if (typeof param !== 'object' || Array.isArray(param) || param === null)
                    throw new TypeError('phone array doesnt contain an object');
                else if (!param.hasOwnProperty('phone') || !param.hasOwnProperty('primary') || Object.getOwnPropertyNames(param).length !== 2)
                    throw new Error ('invalid phone properties');
                else if (param.phone && typeof param.phone !== 'string')
                    throw new Error('phone should be a string');
                else if (typeof param.primary !== 'boolean')
                    throw new Error('primary should be boolean');
            }
        }
        if (data.sex && typeof data.sex !== 'string') throw new TypeError('sex should be a string');
        else if (data.sex !== 'male' && data.sex !== 'female') throw new Error('invalid sex');
        if (data.hasOwnProperty('description') && (typeof data.description !== 'string' || Object.getOwnPropertyNames(data).length !== 5))
            throw new Error('invalid description');
    }

    #IDvalidation (id) {
        if (typeof id !== 'string' || !this.#pupilsDATA.has(id)) 
            throw new TypeError('invalid teacher id');
    }

    add (pupilData) {
        this.#dataValidation(pupilData);
        const id = String(this.#id++);
        pupilData.id = id;
        this.#pupilsDATA.set(id, pupilData);
        return id;
    }
    read (pupilId) {
        this.#IDvalidation(pupilId);
        return this.#pupilsDATA.get(pupilId);
    }
    update (pupilId, updatedProfile) {
        this.#IDvalidation(pupilId);
        this.#dataValidation(updatedProfile);
        this.#pupilsDATA.set(pupilId, updatedProfile);
        updatedProfile.id = pupilId;
        return pupilId;
    }
    remove (pupilId) { 
        this.#pupilsDATA.delete(pupilId);
    }
}