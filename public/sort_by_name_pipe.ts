import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'namePipe'
})
export class namePipe {

    transform(value, args?) {
        if(!args) {
            return value;
        }else{
            return value.filter(user => {
                for (let key in user) {
                    if ((typeof user[key] === 'string' || user[key] instanceof String)
                        && (user[key].toLowerCase().indexOf(args.toLowerCase()) !== -1)) {
                        return true;
                    }
                }

            });
        }
    }
}