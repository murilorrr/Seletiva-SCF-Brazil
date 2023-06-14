let fakeData = [
  {
    id: 1,
    name: "João Oliveira",
    job: "Desenvolvedor",
  },
];

const getFakeData = () => [...fakeData];

const findUserByName = (name) => {
  return fakeData.find((user) => user.name === name);
};

const updateUser = (name, updatedUserData) => {
  const user = fakeData.find((user) => user.name === name);
  if (user) {
    fakeData[user.id] = { ...fakeData[user.id], ...updatedUserData };
    return fakeData[user.id];
  }
  return undefined;
};

const deleteUser = (userId) => {
  fakeData = fakeData.filter((user) => user.id !== userId);
};

const setFateData = (arrayOfData) => {
  if (Array.isArray(arrayOfData)) fakeData = arrayOfData;
};

module.exports = {
  getFakeData,
  findUserByName,
  updateUser,
  deleteUser,
  setFateData,
};
