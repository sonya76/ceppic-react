export default function UserCard({ user }) {
  return (
    <li>
      <div>Nom: {user.nom}</div>
      <div>Prenom: {user.prenom}</div>
      <div>Telephone: {user.telephone}</div>
      <div>Email: {user.email}</div>
      <div>Profession: {user.profession}</div>
    </li>
  );
}
