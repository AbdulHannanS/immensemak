const unsubscribeForm = document.getElementById("unsubForm");

unsubscribeForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("person_name").value;  // Optional
  const email = document.getElementById("unsub_email").value;

  // Ensure the email is entered
  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  // Check if email already exists (optional)
  const snapshot = await db.collection("unsublist")
                            .where("email", "==", email)
                            .get();

  if (!snapshot.empty) {
    alert("You are already unsubscribed.");
    return;
  }

  // Add to Firestore - Create a document with the email and name (if provided)
  try {
    await db.collection("unsublist").add({
      email: email,
      name: name || "",  // Store empty string if no name is provided
      unsubscribedAt: firebase.firestore.FieldValue.serverTimestamp(),  // Record unsubscribe time
    });

    alert("You have been unsubscribed successfully.");
    unsubscribeForm.reset();  // Reset form after successful submission
  } catch (error) {
    console.error("Error unsubscribing: ", error);
    alert("There was an error. Please try again later.");
  }
});
