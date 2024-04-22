const createUser = (firstname, lastname) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  firstname,
  lastname,
  fullName: `${firstName} ${lastName}`,
});

createUser('John', 'Doe');
createUser('Sarah', 'Doe');
createUser('Lydia', 'Doe');
