import { Outlet } from 'react-router-dom';
// Futuramente importaremos Header e Footer aqui

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet /> {/* Onde o conteúdo da página atual será renderizado */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;