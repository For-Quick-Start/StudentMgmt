function FooterBar({ remaining, completedCount, onClearDone }) {
  function handleClear() {
    if (window.confirm(`Remove ${completedCount} completed student${completedCount !== 1 ? 's' : ''}?`)) {
      onClearDone();
    }
  }

  return (
    <footer className="footer-bar">
      <span className="footer-bar__count">
        {remaining} student{remaining !== 1 ? 's' : ''} still enrolled
      </span>

      {completedCount > 0 && (
        <button className="footer-bar__clear" onClick={handleClear}>
          Clear graduated [{completedCount}]
        </button>
      )}
    </footer>
  );
}

export default FooterBar
