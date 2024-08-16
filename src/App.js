import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode has Been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has Been Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
     <Navbar title="TextUtils" mod={mode} toggle={toggleMode} />
     <Alert alert={alert} />
     <div className="container">
     <TextForm textarea="Enter Text To Analyze" mod={mode} />
     </div>

      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm textarea="Enter Text To Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
