// Cloudinary upload and URL sharing
const btnUpload = document.getElementById("btn-upload");
const btnCopy = document.getElementById("btn-copy");
const cloudinaryUrl = document.getElementById("cloudinary-url");
const urlDisplay = document.querySelector(".url-display");

btnUpload.addEventListener("click", async function () {
  btnUpload.disabled = true;
  btnUpload.textContent = "Uploading...";

  try {
    const canvas = await html2canvas(
      document.getElementById("poster-preview"),
      {
        backgroundColor: "#D9D9D9",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      },
    );

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );

    const formData = new FormData();
    formData.append("file", blob);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await res.json();

    if (data.secure_url) {
      cloudinaryUrl.value = data.secure_url;
      urlDisplay.classList.remove("hidden");
    } else {
      alert("Upload failed: " + (data.error?.message || "Unknown error"));
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed. Check console for details.");
  } finally {
    btnUpload.disabled = false;
    btnUpload.textContent = "Upload";
  }
});

// copy Cloudinary URL to clipboard
btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(cloudinaryUrl.value);
  btnCopy.textContent = "Copied!";
  setTimeout(() => {
    btnCopy.textContent = "Copy";
  }, 2000);
});
