export class Subject {
    constructor ({title, lessons, description}) {
        this.id = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        if (this.title === undefined || this.lessons === undefined || typeof this.title !== 'string' || typeof this.lessons !== 'number' || typeof this.description !== 'string' && this.description !== undefined) 
            throw new Error ('Invalid input');
        else if(this.description === undefined) delete this.description;
    }
};