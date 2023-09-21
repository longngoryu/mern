import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://i.pinimg.com/736x/46/83/75/468375d67631da3a41d7427d7ee898a7.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Max Schwarz",
      image:
        "https://i.pinimg.com/736x/46/83/75/468375d67631da3a41d7427d7ee898a7.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
