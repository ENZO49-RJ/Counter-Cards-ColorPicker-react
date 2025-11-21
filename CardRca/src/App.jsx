import Card from "./Card.jsx";
import Adam from "./assets/adam.png"


function App() {
 
  return (
    <>
      <Card
        img="https://picsum.photos/150/150 "
        name="El Mehdi Al Harrar "
        position="Goalkeeper"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Mohamed Boulacsoute"
        position="Right Outside Back"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Abdellah Khafifi"
        position="Right Center Back"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Ismael Mokadem"
        position="Left Center Back"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Youssef Belammari"
        position="Left Outside Back"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Othmane Chraibi"
        position="Devensive Center Mid"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Mohamed Al-Makahasi"
        position="Center Midfielder"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Sabir Bougrine"
        position="Attacking Center Mid"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Ayoub Maamouri"
        position="Right Winger"
      />
      <Card
        img={Adam}
        name="Adam Ennafati"
        position="Left Winger"
      />
      <Card
        img="https://picsum.photos/150/150 "
        name="Ismail Khafi"
        position="Center Forward"
      /> 
      
    </>
  );
}

export default App;
