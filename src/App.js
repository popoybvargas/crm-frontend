import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Entry from './pages/entry/Entry.page';
import TicketList from './pages/ticket-listing/TicketList.page';
import Dashboard from './pages/dashboard/Dashboard.page';
import NewTicket from './pages/new-ticket/NewTicket.page';
import Ticket from './pages/ticket/Ticket.page';
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ Entry } />
          <PrivateRoute path="/dashboard" exact>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/tickets/new" exact>
            <NewTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets" exact>
            <TicketList />
          </PrivateRoute>
          <PrivateRoute path="/tickets/:id" exact>
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;