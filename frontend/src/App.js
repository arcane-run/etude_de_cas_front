import React from 'react';
import Settings from './UsersRights'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const clients = ['test']
  return (
    <Router>
      <Route
        path='/:id?' exact render={() => {
          return <Settings clients={clients} />
        }}
      />

    </Router>
  )
}

export default App;
