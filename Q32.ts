// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
// everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
// in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has,
// print a message that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is availa


const currentUsers: string[] = ["Muneeb", "Khalil", "Zain", "Sidra", "Marvi"];

const newUsers: string[] = ["Khalil", "Najeeb", "Shahbaz", "Ghouse", "Muneeb"];

function isUsernameTaken(username: string): boolean {
  return currentUsers.some((user) => user.toLowerCase() === username.toLowerCase());
}

for (const newUser of newUsers) {
  if (isUsernameTaken(newUser)) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}