import TableAggregateComponent from './components/TableAggregateComponent';
import TableFindComponent from './components/TableFindComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route index path="/aggregate" element={<TableAggregateComponent />} />
          <Route index path="/find" element={<TableFindComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
