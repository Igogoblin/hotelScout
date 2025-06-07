export function roomWithNumber(roomId) {
  checkRoomImages(roomId);
}

function checkRoomImages(roomId) {
  const roomImage1 = document.querySelector(".roomImage1");
  const roomImage2 = document.querySelector(".roomImage2");
  const roomImage3 = document.querySelector(".roomImage3");

  roomImage1.src = `/hotelScout/assets/room-${roomId}-1.jpg`;
  roomImage2.src = `/hotelScout/assets/room-${roomId}-2.jpg`;
  roomImage3.src = `/hotelScout/assets/room-${roomId}-3.jpg`;
}
