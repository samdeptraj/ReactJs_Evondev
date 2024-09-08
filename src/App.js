import './App.css';
import MovieSearchApp from './form/MovieApp/MovieSearchApp';
import SignUp from './form/signup/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <SignUp />
      <MovieSearchApp />
    </div>
  );
}

export default App;
