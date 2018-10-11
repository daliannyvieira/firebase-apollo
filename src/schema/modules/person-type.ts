export const typeDef = `
type PersonType {
    name: String
    id: String
    sex: String
    matches: [PersonType]
}

type UsersType {
    name: String
}

type Query {
    getPerson(id: String!): PersonType
    persons: [PersonType]
    users: [UsersType]
}

# Mutations
type Mutation {
    addPerson(name: String!, sex: String!): PersonType
}
`;

/*users.then(snapshot => {
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
})

*/
export const resolver = {
  PersonType: {
    matches(root, args, ctx) {
      return ctx.persons.filter(person => person.sex !== root.sex);
    }
  },
  Query: {
    getPerson(root, args, ctx) {
      return ctx.findPerson(ctx.persons, args.id);
    },
    persons(root, args, ctx) {
      return ctx.persons;
    },
    users(root, args, ctx) {
      return ctx.users;
    },
  },
  Mutation: {
    addPerson(root, args, ctx) {
      return ctx.addPerson(ctx.persons, {id: Math.random().toString(16).substr(2), name: args.name, sex: args.sex});
    },
  },
};
