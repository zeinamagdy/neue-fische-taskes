/*[
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]
The corresponding output should look as follows:

{
  online: [
    'David'
  ],
  offline: [
    'Lucy'
  ],
  away: [
    'Bob'
  ]
}
If for example, no users are online the output should look as follows:

{
offline: ['Lucy'],
away: ['Bob']
}
username will always be a string, status will always be either ‘online’ or ‘offline’ (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

*/

import { test } from "@/test.ts";

interface User {
  username: string;
  lastActivity: number;
  status: "online" | "offline" | "away";
}

const users1 = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
const result1 = {
  online: ["David"],
  offline: ["Lucy"],
  away: ["Bob"],
};
const users2 = [
  
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
const result2 = {
  offline: ["Lucy"],
  away: ["Bob"],
};
function whoIsOnline(users: any) {
  if (users.length === 0) return {};
  const output = {
    online : [] as string[],
    offline: [] as string[],
    away: [] as string[],
  };
  
  for (const user of users) {
    if (user.status === "online" && user.lastActivity <= 10) {
      output.online.push(user.username);
    } else if (user.status === "offline") output.offline.push(user.username);
    else if (user.lastActivity > 10)
      output.away = [...output.away, user.username];
  }
 
  return output;
}
console.log("chanllange1", whoIsOnline([]));

test(whoIsOnline(users1), result1);
test(whoIsOnline([]), {});
test(whoIsOnline(users2), result2);
