import { useState } from 'react';
import { NavigationProvider } from './context/navigation';
import NotFound from './pages/NotFound';
import { Link } from './components/navigation/Link';
import Route from './components/navigation/Route';
import { Dropdown } from './components/ui/Dropdown/Dropdown';
import DropdownPage from './pages/DropdownPage';

export const AppTest = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    // console.log(option);
    setSelection((_prev) => option);
  };

  const colors = [
    { value: '#FF5733', label: 'Bright Red' },
    { value: '#33FF57', label: 'Neon Green' },
    { value: '#3357FF', label: 'Electric Blue' },
  ];
  return (
    <NavigationProvider>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dropdown">Dropdown</Link>
      </div>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </NavigationProvider>
  );
};
