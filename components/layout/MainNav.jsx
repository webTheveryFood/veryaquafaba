export default function MainNav({ items, active = false, onNavigate }) {
  return (
    <nav className={`vf-nav${active ? ' vf-active' : ''}`}>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onNavigate}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
