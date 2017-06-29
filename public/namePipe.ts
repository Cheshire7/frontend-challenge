//import { Pipe, PipeTransform, Injectable} from '@angular/core';
//
//@Pipe({
//    name: 'search',
//    pure: false
//})
//@Injectable()
//export class SearchPipe implements PipeTransform {
//    transform(value: any[], name: any, caseInsensitive: boolean): any {
//        if (name !== undefined) {
//            // filter users, users which match and return true will be kept, false will be filtered out
//            return users.filter((user) => {
//                if (caseInsensitive) {
//                    return (user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
//                } else {
//                    return (user.name.indexOf(name) !== -1);
//                }
//            });
//        }
//        return users;
//    }
//}