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

const updateFakeUser = (id, updatedUserData) => {
  const userIndex = fakeData.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    const updatedUser = { ...fakeData[userIndex], ...updatedUserData };
    fakeData[userIndex] = updatedUser;
    return updatedUser;
  }

  return undefined;
};

const deleteUser = (userId) => {
  fakeData = fakeData.filter((user) => user.id !== userId);
};

const setFakeData = (arrayOfData) => {
  if (Array.isArray(arrayOfData)) fakeData = arrayOfData;
};

module.exports = {
  getFakeData,
  findUserByName,
  updateFakeUser,
  deleteUser,
  setFakeData,
};
