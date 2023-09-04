const FNAME = document.getElementById("fname");
const LNAME = document.getElementById("lname");
const DOB = document.getElementById("DOB");
const SUBMIT_BUTTON = document.getElementById("submit");
const APIENDPOINT = "https://jsonplaceholder.typicode.com/users"



SUBMIT_BUTTON.addEventListener("click", () =>{
let objectUser = {}
	objectUser.first_name = FNAME.value
	objectUser.last_name = LNAME.value
	objectUser.DOB = DOB.value
	
	postJSON (objectUser, APIENDPOINT)
});

async function postJSON(data, URL) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("solicitud fetch ok:", result);
  } catch (error) {
    console.error("oops! Ocurrió un error en la solicitud fetch:", error);
  }
}