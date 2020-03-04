const faker = require("faker/locale/en_GB");

faker.seed(123);

let users = [];
for (let i = 0; i < 10; i++) {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();

  users.push({
    id: i + 1,
    name: `${firstname} ${lastname}`,
    avatar: faker.image.avatar(),
    email: `${firstname.toLowerCase()}.${lastname.toLowerCase()}@${faker.internet.domainName()}`,
    joined: faker.date.past(),
    bio: faker.lorem.sentence(),
    location: faker.address.city()
  });
}

module.exports = {
  find: async name => {
    //simulate delay so we can see loading states
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!name) return users;
    else
      return users.filter(user => {
        const regexp = new RegExp(name, "i");
        return regexp.test(user.name);
      });
  }
};
