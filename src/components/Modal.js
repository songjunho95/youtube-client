const formData = new FormData();
const response = await addVideo(formData);
console.log(response.data); // 새 비디오 정보
