import './App.css';
import Profile from './Profile/Profile';
import photo from './masse.jpg';
function App() {
  const handleName = (nom) => {
    alert(nom)
  }
  let nom = "DIOUKHANE Masse";
  let profession = 'Etudiant';
  let bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis inventore fugiat hic praesentium ad enim dicta aspernatur, quam tempore repellat accusamus maxime ipsum nobis optio provident laborum beatae explicabo?'
  return (
    <div className="App">
      <Profile nom ={nom} bio = {bio} profession = {profession} handleName = {handleName}>
        {photo}
      </Profile>
    </div>
  );
}

export default App;
