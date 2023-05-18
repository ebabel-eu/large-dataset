const data = require('./data/users.json');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>100.000 Users</h1>
        <ol>
        {
          data.objects.map(user => <li key={user.id}>{user.id} {user.firstName} {user.lastName} {user.email} {user.tel} {user.iban}</li>)
        }
        </ol>
      </header>
    </div>
  );
}

export default App;
