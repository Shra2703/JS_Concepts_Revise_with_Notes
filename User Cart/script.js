let divEle = document.getElementById("card-container");
function getRequest(id) {
  // Card 1 request
  // This kind of structure where one callback fucntion is inside the another callback function then this structure is called pyramid of doom or call back hell
  const request = new XMLHttpRequest();
  request.open("GET", `https://dummyjson.com/users/${id}`);
  // send the text when it is loaded
  request.send();
  request.addEventListener("load", function () {
    // console.log(request.responseText);
    const data = JSON.parse(request.responseText);
    console.log(data);
    displayUser(data, "beforeend");

    // Card 2 request
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();
    request2.addEventListener("load", function () {
      if (request2.status == 404) return;
      const data = JSON.parse(request2.responseText);
      displayUser(data, "afterbegin", "other");

      // CArd 3 request
      const request3 = new XMLHttpRequest();
      request3.open("GET", `https://dummyjson.com/users/${id + 2}`);
      request3.send();
      request3.addEventListener("load", function () {
        const data = JSON.parse(request3.responseText);
        console.log(data);

        displayUser(data, "beforeend");
      });
    });
  });
}

// Function to display card
function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
    <img src=${data.image} alt="Profile Image" />
    <h3>${data.firstName} ${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
  </div>`;
  //   console.log(card)

  divEle.insertAdjacentHTML(pos, card);
}

// by this the order of the card may vary because some of the request may take time
// getRequest(2);
// getRequest(3);

getRequest(2);
