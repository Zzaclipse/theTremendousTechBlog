const newCommentButton = document.querySelector("#new-comment-button");
const addCommentBox = document.querySelector("#input-comment-box");

const addComment = async (event) => {
  event.preventDefault();

  const postNum = document
    .querySelector("#get-post-num")
    .getAttribute("postnum");
  console.log(postNum);
  const text = document.querySelector("#comment-content").value.trim();
  const response = await fetch(`/${postNum}`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to post comment");
  }
};

const newCommentHandler = async () => {
  newCommentButton.style.visibility = "hidden";
  let header = document.createElement("h2");
  header.textContent = "New Comment";
  header.classList.add("text-center");
  addCommentBox.append(header);
  let commentContentLabel = document.createElement("label");
  commentContentLabel.textContent = "Enter Text:";
  commentContentLabel.setAttribute("for", "comment-content");
  let commentContentInput = document.createElement("input");
  commentContentInput.setAttribute("type", "text");
  commentContentInput.setAttribute("id", "comment-content");
  let htmlbreak = document.createElement("br");
  addCommentBox.append(commentContentLabel);
  addCommentBox.append(htmlbreak);
  addCommentBox.append(commentContentInput);
  let submitNewCommentButton = document.createElement("button");
  submitNewCommentButton.textContent = "Submit";
  submitNewCommentButton.setAttribute("id", "submit-new-comment-button");
  addCommentBox.append(submitNewCommentButton);
  submitNewCommentButton.addEventListener("click", addComment);
};

newCommentButton.addEventListener("click", newCommentHandler);
