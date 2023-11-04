/* 
Filename: ComplexCode.js
Content: Complex code for a social media application
*/

// Class for User
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.profile = new Profile();
  }

  // Method to add a friend
  addFriend(user) {
    this.profile.friends.push(user);
  }

  // Method to post a new status
  postStatus(status) {
    this.profile.statuses.push(status);
  }

  // Method to get user details
  getUserDetails() {
    return `${this.name} | Age: ${this.age} | Email: ${this.email}`;
  }
}

// Class for Profile
class Profile {
  constructor() {
    this.statuses = [];
    this.friends = [];
  }

  // Method to add a status like
  addLike(status, user) {
    status.likes.push(user);
  }
}

// Creating users
const user1 = new User("John Doe", 25, "john.doe@example.com");
const user2 = new User("Jane Smith", 30, "jane.smith@example.com");

// Adding friends
user1.addFriend(user2);
user2.addFriend(user1);

// Posting new statuses
user1.postStatus("Hello, world!");
user2.postStatus("Excited for the weekend!");

// Adding likes
user1.profile.addLike(user2.profile.statuses[0], user1);
user2.profile.addLike(user1.profile.statuses[0], user2);

// Printing user details
console.log(user1.getUserDetails());
console.log(user2.getUserDetails());

// Printing friends' details
console.log(user1.profile.friends[0].getUserDetails());
console.log(user2.profile.friends[0].getUserDetails());

// Printing statuses and their likes
console.log(user1.profile.statuses[0]);
console.log(`${user1.profile.statuses[0].likes.length} likes`);
console.log(user2.profile.statuses[0]);
console.log(`${user2.profile.statuses[0].likes.length} likes`);