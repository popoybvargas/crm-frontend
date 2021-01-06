import './App.css';
// import Entry from './pages/entry/Entry.page';
import DefaultLayout from './components/layout/DefaultLayout';
// import Dashboard from './pages/dashboard/Dashboard.page';
import NewTicket from './pages/new-ticket/NewTicket.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <NewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;