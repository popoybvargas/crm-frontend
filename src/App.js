import './App.css';
import Entry from './pages/entry/Entry.page';
import DefaultLayout from './components/layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        main content
      </DefaultLayout>
    </div>
  );
}

export default App;