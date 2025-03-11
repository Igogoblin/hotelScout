import roomsData from "../../../data/rooms.json";

export async function changeFinishCardRoom(idCard) {
  const cardNumberRoom = document.querySelector(".card-number__room");
  const cardNumberRoomLux = document.querySelector(".card-number__room-lux");
  const cardCash = document.querySelector(".card-cash");
  if (!cardNumberRoom || !cardNumberRoomLux) {
    console.error("Элементы для отображения номера комнаты не найдены.");
    return;
  }

  const room = roomsData.find((room) => room.number === idCard);

  if (!room) {
    console.error(`Комната с номером ${idCard} не найдена.`);
    return;
  }

  cardNumberRoom.textContent = `№ ${room.number}`;
  cardNumberRoomLux.textContent = room.lux ? "Люкс" : "";
  cardCash.innerHTML = `${room.price}₽ <span>в сутки</span>`;

  console.log(room);
}
