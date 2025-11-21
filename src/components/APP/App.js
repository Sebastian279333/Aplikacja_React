function App() {
  const name = "Sebastian";
  const names =['Adrian', 'Maciek', 'Pawel', 'Bartek'];
  return (
    <>
      <div className="App">
          <p>
            {name.length > 4 ? name : 'Hello firends'} 
          </p>
          <p> {names.map((name) => <li key={name}>{name}</li>) }</p>
      </div>
    </>
  );
}

export default App;
