/*
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application
form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range
from -2 to +26; the better the player the lower the handicap.
Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

import { test } from "@/test.ts";

function openOrSenior(data: number[][]): string[] {
  // your code here
  const result: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i]?.[0] ?? 0) >= 55 && (data[i]?.[1] ?? 0) > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

test(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]), ["Open", "Open", "Senior", "Open", "Open", "Senior"]);
test(openOrSenior([[55, 8]]), ["Senior"]);
test(openOrSenior([[54, 8]]), ["Open"]);
test(openOrSenior([[55, 7]]), ["Open"]);
test(openOrSenior([[60, 15], [30, 5]]), ["Senior", "Open"]);