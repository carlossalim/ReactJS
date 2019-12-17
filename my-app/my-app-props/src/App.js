import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContent from './AppContent'
import CardItem from './CardItem'
import CardItembyObj from './CardItembyObj';

function App() {
  return (
    <div className="App">
      <CardItem
        imgurl="https://media.licdn.com/dms/image/C5603AQGtO-nir6Ubgw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=5AbyCzLjdjyWsXgMKQPwiT-r3FVWqzM3wihUXVa02xc"
        title="My Title"
        email="Name"
        phone="604-354-6316" />
      <AppContent />
      <CardItembyObj contact    ={{
        imgurl: "https://media.licdn.com/dms/image/C5603AQGtO-nir6Ubgw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=5AbyCzLjdjyWsXgMKQPwiT-r3FVWqzM3wihUXVa02xc",
        title: "My Title",
        email: "Name",
        phone: "604-354-6316"
      }} />
    </div>
  );
}

export default App;
