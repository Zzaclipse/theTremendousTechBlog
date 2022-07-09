const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#new-post-title").value.trim();
  const body = document.querySelector("#new-post-body").value.trim();

  const response = await fetch("/newpost", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to post.");
  }
};

document
  .querySelector("#submit-new-post-button")
  .addEventListener("click", newPostHandler);
