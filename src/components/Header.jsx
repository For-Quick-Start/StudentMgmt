function Header({ total, remaining }) {
  return (
    <header className="header">
      <h1 className="header__title">Students</h1>
      <p className="header__subtitle">
        {total === 0
          ? 'no students yet — add one below'
          : `${total} student${total !== 1 ? 's' : ''} total`}
      </p>

      {total > 0 && (
        <div className="header__counter">
          <span className="header__counter-num">{remaining}</span>
          <span className="header__counter-label">actively enrolled</span>
        </div>
      )}
    </header>
  );
}

export default Header
