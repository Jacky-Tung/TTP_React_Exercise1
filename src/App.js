import { useState } from 'react';
import './App.css';
import ContactCard from './components/contactCard';

function App() {
  const [info, setInfo] = useState([
    {
      contactName: "Jacky",
      mobileNumber: "123-456-7890",
      workPhone: "000-000-0000",
      email: "Jacky@ttp.com",
      id: 1
    },
    {
      contactName: "Hesham",
      mobileNumber: "123-456-7890",
      workPhone: "000-000-0000",
      email: "Jacky@ttp.com",
      id: 2
    },
    {
      contactName: "Jiamin",
      mobileNumber: "123-456-7890",
      workPhone: "000-000-0000",
      email: "Jacky@ttp.com",
      id: 3
    },
  ]);


  function clear(){
    setInfo([]);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "15px",
        alignItems: "center",
      }}
    >
      {info.map((ele) => (
        <ContactCard
          key={ele.id}
          contactName={ele.contactName}
          mobileNumber={ele.mobileNumber}
          workPhone={ele.workPhone}
          email={ele.email}
        />
      ))}
      <button onClick={clear}>clear</button>
    </div>
  ); 
}

export default App;
