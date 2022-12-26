export default function ContactItem({ name, number }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
}
