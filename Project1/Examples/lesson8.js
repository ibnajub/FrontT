
let lastMessageId;

let sentmessage = async (nick, message) => {
  let response = await fetch("http://students.a-level.com.ua:10012", {
    method: "POST",
    body: JSON.stringify({ func: "addMessage", nick, message }),
  });

  let data = await response.json();
  lastMessageId = data.nextMessageId;
  console.log(data);
};

let getMessage = async (id, author = "chat") => {
  let response = await fetch("http://students.a-level.com.ua:10012", {
    method: "POST",
    body: JSON.stringify({ func: "getMessages", messageId: id, author }),
  });

  let data = await response.json();
  console.log(data);
  let array = await data.data;
  return array;
};
console.log(getMessage());

async function createMessages() {
  const arrayOfMessages = await getMessage(lastMessageId - 15);
  arrayOfMessages.forEach((element) => {
    let div = document.createElement("div");
    let time = new Date(element.timestamp);
    div.innerText = `${element.nick}: ${
      element.message
    }: ${time.toDateString()}`;
    document.body.append(div);
    div.className = "message";
    debugger;
  });
  console.log(arrayOfMessages);
}

const nickValue = document.getElementById("nick");
const messageValue = document.getElementById("message");
console.log(document.getElementById("message"))

let button = document.getElementById("button");
let button1 = document.getElementById("getbutton");
getbutton.addEventListener("click", createMessages);
button.addEventListener("click", () => {
  sentmessage(nickValue.value, messageValue.value);

  console.log(nickValue.value, messageValue.value);
});
