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
  fakeData.find((user, index) => {
    if (user) {
        user = { ...user, ...updatedUserData };
        fakeData[index] = user;
        return user;
      }
  });
  return undefined;
};

const deleteUser = (userId) => {
  fakeData = fakeData.filter((user) => user.id !== userId);
};

const setFakeData = (arrayOfData) => {
    console.log(Array.isArray(arrayOfData));
  if (Array.isArray(arrayOfData)) fakeData = arrayOfData;
};

module.exports = {
  getFakeData,
  findUserByName,
  updateFakeUser,
  deleteUser,
  setFakeData,
};
