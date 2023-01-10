import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route
          path="*"
          element={
            <h1 className="wrong-address">There's nothing here: 404!</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
