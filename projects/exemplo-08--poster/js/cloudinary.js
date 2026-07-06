// ---------------------------------------------------------------
// Cloudinary — Upload e compartilhamento do poster
// ---------------------------------------------------------------

const btnUpload = document.getElementById("btn-upload");
const btnCopy = document.getElementById("btn-copy");
const cloudinaryUrl = document.getElementById("cloudinary-url");
const urlDisplay = document.querySelector(".url-display");

// ---------------------------------------------------------------
// upload do poster para o Cloudinary ao clicar no botão
// captura a tela com html2canvas, envia como PNG e mostra a URL
// ---------------------------------------------------------------
btnUpload.addEventListener("click", async function () {
  // desabilita o botão e mostra feedback visual de carregamento
  btnUpload.disabled = true;
  btnUpload.textContent = "Uploading...";

  try {
    // converte o preview do poster em um canvas 2x maior
    const canvas = await html2canvas(
      document.getElementById("poster-preview"),
      {
        backgroundColor: "#D9D9D9",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      },
    );

    // converte o canvas em um arquivo PNG binário (Blob)
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );

    // monta os dados do formulário para enviar ao Cloudinary
    const formData = new FormData();
    formData.append("file", blob);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // faz a requisição POST para a API de upload do Cloudinary
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await res.json();

    // se o upload deu certo, mostra a URL na tela
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
    // volta o texto original
    btnUpload.disabled = false;
    btnUpload.textContent = "Upload";
  }
});

// ---------------------------------------------------------------
// copia a URL do Cloudinary para a área de transferência
btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(cloudinaryUrl.value);
  btnCopy.textContent = "Copied!";
  setTimeout(() => {
    btnCopy.textContent = "Copy";
  }, 2000);
});
