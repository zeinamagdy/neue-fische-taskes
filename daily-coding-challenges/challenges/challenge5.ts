/*You probably know the “like” system from Facebook and other pages. People can “like” blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this
*/

import { test } from "@/test.ts";

function displayLikes(users:string[]) {

     switch(users.length) {
        case 0:
            return "no one likes this";

        case 1:
             return users[0]+ " likes this";

        case 2:
            return users[0]+' '+ users[1] + 'and '+ users[2]+ " like this "
        
        default :
            return  users[0]+', '+ users[1] + ' and ' +  String(users.length -2) +" others like this"

     }
    }

test(displayLikes(["Peter"]), "Peter likes this")
test(displayLikes(["Jacob", "Alex"]), "Jacob and Alex like this")
test(displayLikes([]), "no one likes this")
test(displayLikes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this")

