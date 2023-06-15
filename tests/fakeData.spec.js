const {
  getFakeData,
  findUserByName,
  updateFakeUser,
  deleteUser,
  setFakeData,
} = require("../src/fakeData");

describe("Fake Data Functions", () => {
  beforeEach(() => {
    setFakeData([
      {
        id: 1,
        name: "João Oliveira",
        job: "Desenvolvedor",
      },
    ]);
  });

  test("getFakeData should return an array of fake data", () => {
    const result = getFakeData();

    expect(result).toEqual([
      {
        id: 1,
        name: "João Oliveira",
        job: "Desenvolvedor",
      },
    ]);
  });

  test("findUserByName should find a user by name", () => {
    const result = findUserByName("João Oliveira");

    expect(result).toEqual({
      id: 1,
      name: "João Oliveira",
      job: "Desenvolvedor",
    });
  });

  test("updateFakeUser should update a user's data", () => {
    const updatedUserData = {
      job: "Designer",
    };

    const result = updateFakeUser(1, updatedUserData);

    expect(result).toEqual({
      id: 1,
      name: "João Oliveira",
      job: "Designer",
    });

    const updatedFakeData = getFakeData();
    expect(updatedFakeData).toEqual([
      {
        id: 1,
        name: "João Oliveira",
        job: "Designer",
      },
    ]);
  });

  test("deleteUser should delete a user by ID", () => {
    deleteUser(1);

    const updatedFakeData = getFakeData();
    expect(updatedFakeData).toEqual([]);
  });

  test("setFakeData should set the fake data array", () => {
    const newData = [
      {
        id: 2,
        name: "Maria Silva",
        job: "Analista de Dados",
      },
      {
        id: 3,
        name: "Carlos Pereira",
        job: "Engenheiro de Software",
      },
    ];

    setFakeData(newData);

    const result = getFakeData();
    expect(result).toEqual(newData);
  });
});