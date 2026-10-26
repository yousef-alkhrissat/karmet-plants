export default function Nav() {
  return (
    <header className="nav">
      <a className="wordmark" href="#top">Karmet <span lang="ar">كرمة</span></a>
      <nav aria-label="Main">
        <ul>
          <li><a className="link" href="#plants">Plants</a></li>
          <li><a className="link" href="#find">Find yours</a></li>
          <li><a className="link" href="#order">Order</a></li>
        </ul>
      </nav>
    </header>
  );
}
