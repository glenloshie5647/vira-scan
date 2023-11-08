/* sophisticated_code.js */

// This code is a complex implementation of a messaging application

// Define a class representing a User
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.messages = [];
  }

  sendMessage(message, recipient) {
    const newMessage = new Message(this, recipient, message);
    this.messages.push(newMessage);
    recipient.receiveMessage(newMessage);
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

// Define a class representing a Message
class Message {
  constructor(sender, recipient, content) {
    this.sender = sender;
    this.recipient = recipient;
    this.content = content;
    this.timestamp = new Date();
  }
}

// Create two user instances
const user1 = new User("John", 30);
const user2 = new User("Emily", 28);

// Send messages between the users
user1.sendMessage("Hello, Emily!", user2);
user2.sendMessage("Hi, John! How are you?", user1);
user1.sendMessage("I'm good, thanks! What about you?", user2);

// Print the messages
console.log("Messages exchanged:");

// Iterate over user1's messages
user1.messages.forEach((message) => {
  console.log(
    `${message.sender.name} -> ${message.recipient.name}: ${message.content} (${message.timestamp})`
  );
});

// Iterate over user2's messages
user2.messages.forEach((message) => {
  console.log(
    `${message.sender.name} -> ${message.recipient.name}: ${message.content} (${message.timestamp})`
  );
})

// Print the total number of messages
console.log(`Total messages exchanged: ${user1.messages.length + user2.messages.length}`);