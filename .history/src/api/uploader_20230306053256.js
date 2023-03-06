export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
}
