import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]

function App() {
  
  return (
    <div className="App">
      
      {/* <div>{users[0].name}</div>
      <div>{users[1].name}</div>
      <div>{users[2].name}</div> */}
      
      <div>
        {users.map((user, index) => (
          <div>
            {user.name},{user.age},{user.address}, index {index}
          </div> 
      ))}
      {/*Ambos retornam o mesmo resultado */}
      </div>
    </div>
  )
}

export default App
