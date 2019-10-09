const users = [];

const addUser = (username, room, ID) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const user = { username, room, ID };
  users.push(user);
  console.log(users);
  return;
};

const removeUser = ID => {
  const index = users.findIndex(user => user.ID === ID);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUsersInRoom = room => {
  room = room.trim().toLowerCase();
  return users.filter(user => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUsersInRoom
};
