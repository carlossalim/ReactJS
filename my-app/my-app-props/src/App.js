import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import AppContent from './AppContent'
import CardItem from './CardItem'
import CardItembyObj from './CardItembyObj';
import ContactData from './ContactData';

//console.log(ContactData);

const MyCardItens = ContactData.map(item => <
  CardItem
  key={item.id}
  imgurl={item.imgurl}
  name={item.name}
  email={item.email}
  phone={item.phone}
/>);
//console.log(MyCardItembyObj);

const cardComponents = ContactData.map(item => <CardItembyObj key={item.id} contact={item} />);



function App() {
  return (
    <div className="App">
      <h1>FROM STRING</h1>
      <CardItem
        imgurl="https://media.licdn.com/dms/image/C5603AQGtO-nir6Ubgw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=5AbyCzLjdjyWsXgMKQPwiT-r3FVWqzM3wihUXVa02xc"
        name="My name"
        email="Name"
        phone="604-354-6316" />

      <h1>FROM OBJECT</h1>
      <CardItembyObj contact={{
        imgurl: "https://media.licdn.com/dms/image/C5603AQGtO-nir6Ubgw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=5AbyCzLjdjyWsXgMKQPwiT-r3FVWqzM3wihUXVa02xc",
        name: "My name",
        email: "Name",
        phone: "604-354-6316"
      }} />

      <h1>FROM DATA ARRAY</h1>
      {MyCardItens}
      <h1>FROM  DATA ARRAY DIRECT TO OBJECT</h1>
      {cardComponents}
    </div >
  );
}

export default App;
