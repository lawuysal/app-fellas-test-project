function handleCreateArticle() {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("date", dbDate);
  formData.append("content", JSON.stringify(markdown));
  formData.append("articleImageFile", imageFile as Blob);
  formData.append("imageDesc", imageDesc);
  formData.append("tags", JSON.stringify(tags));
  formData.append("categoryId", categoryId);

  if (formData.get("title") === "") {
    setDialogMessage("Title is Empty!");
    return setDialogOpen(true);
  }
  if (formData.get("image") === "null") {
    setDialogMessage("Image is not Selected!");
    return setDialogOpen(true);
  }
  if (formData.get("imageDesc") === "") {
    setDialogMessage("Image Description is Empty!");
    return setDialogOpen(true);
  }
  if (formData.get("categoryId") === "") {
    setDialogMessage("Category is not Selected!");
    return setDialogOpen(true);
  }
  if (formData.get("tags") === "[]" || formData.get("tags") === '[""]') {
    setDialogMessage("Tags are Empty!");
    return setDialogOpen(true);
  }
  if (formData.get("content") === "") {
    setDialogMessage("Markdown is Empty!");
    return setDialogOpen(true);
  }