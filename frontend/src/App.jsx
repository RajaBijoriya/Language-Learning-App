import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookScreen from "./components/App_Screen/BookScreen";
import StartScreen from "./components/App_Screen/StartScreen";
import AboutUser from "./components/create_accound_flow/AboutUser";
import ChooseLanguage from "./components/create_accound_flow/ChooseLanguage";
import CreatePassword from "./components/create_accound_flow/CreatePassword";
import CreateUsername from "./components/create_accound_flow/CreateUsername";
import LanguageLearnOption from "./components/create_accound_flow/LanguageLearnOption";
import LanguageLevel from "./components/create_accound_flow/LanguageLevel";
import LearningTime from "./components/create_accound_flow/LearningTime";
import PasswordScreen from "./components/create_accound_flow/PasswordScreen";
import PurposeLang from "./components/create_accound_flow/PurposeLang";
import ResetPassword from "./components/create_accound_flow/ResetPassword";
import SignUp from "./components/create_accound_flow/SignUp";
import WelcomeScreen from "./components/create_accound_flow/WelcomeScreen";
import LoadingScreen from "./components/Loading/LoadingScreen";
import PremiumScreen from "./components/Premium Screen/PremiumScreen";
import LearningOptions from "./components/create_accound_flow/LearningOptions";
import VocabularyScreen from "./components/App_Screen/VocabularyScreen";
import ChatScreen from "./components/App_Screen/ChatScreen";
import ProfileScreen from "./components/App_Screen/ProfileScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Routes>
          {/* Main App Screens */}
          <Route path="/" element={<Navigate to="/start" />} />
          <Route path="/start" element={<StartScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<PasswordScreen />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Account Creation Flow */}
          <Route path="/create-username" element={<CreateUsername />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/choose-language" element={<ChooseLanguage />} />
          <Route path="/about-user" element={<AboutUser />} />
          <Route path="/purpose" element={<PurposeLang />} />
          <Route path="/language-level" element={<LanguageLevel />} />
          <Route path="/learning-options" element={<LanguageLearnOption />} />
          <Route path="/learning-method" element={<LearningOptions />} />
          <Route path="/learning-time" element={<LearningTime />} />

          {/* Main App Screens */}
          <Route path="/books" element={<BookScreen />} />
          <Route path="/premium" element={<PremiumScreen />} />
          <Route path="/loading" element={<LoadingScreen />} />

          {/* Additional App Screens */}
          <Route path="/vocabulary" element={<VocabularyScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
