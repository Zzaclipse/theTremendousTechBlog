async function deleteHandler() {
  const postToDeleteID = document
    .querySelector("#get-post-num")
    .getAttribute("postnum");

  const response = await fetch("/delete", {
    method: "DELETE",
    body: JSON.stringify({ id: postToDeleteID }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete.");
  }
}

document.querySelector("#trash").addEventListener("click", deleteHandler);
