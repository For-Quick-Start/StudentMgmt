function Header({ total, remaining }) {
  return (
    <header className="header">
      <h1 className="header__title">Students</h1>
      <div className="header__subtitle">
        <span>
          {total === 0
            ? 'no students yet — add one below'
            : `${total} student${total !== 1 ? 's' : ''}`}
        </span>
        {total > 0 && (
          <span className="header__subtitle_enrolled">{remaining} enrolled</span>
        )}
      </div>
    </header>
  );
}

export default Header
