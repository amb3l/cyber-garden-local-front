import logo from './logo.svg';
import './App.css';
import { MainHeader } from './shared/headers/MainHeader';
import { MainPage } from './pages/main/MainPage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './mui_themes/MainTheme';
import { LogInPage } from './pages/auth/log_in/LogInPage';
import { RegisterPage } from './pages/auth/register/RegisterPage';
import { UserProfilePage } from './pages/user/profile/UserProfilePage';
import { AssistantPage } from './pages/user/assistant/AssistantPage';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AssistantPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;