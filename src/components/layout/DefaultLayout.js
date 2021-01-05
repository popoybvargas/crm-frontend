import Header from './partials/Header';
import Footer from './partials/Footer';

const DefaultLayout = props =>
{
  return (
    <div>
      <div className="default-layout">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          { props.children }
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;