import './FullPageLoader.scss';

function FullPageLoader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default FullPageLoader;