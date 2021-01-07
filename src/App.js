import './App.css';
// import Entry from './pages/entry/Entry.page';
import DefaultLayout from './components/layout/DefaultLayout';
import TicketList from './pages/ticket-listing/TicketList.page';
// import Dashboard from './pages/dashboard/Dashboard.page';
// import NewTicket from './pages/new-ticket/NewTicket.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <NewTicket /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;