
import './App.css'
import BookScreen from './components/App_Screen/BookScreen'
import StartScreen from './components/App_Screen/StartScreen'
import AboutUser from './components/create_accound_flow/AboutUser'
import ChooseLanguage from './components/create_accound_flow/ChooseLanguage'
import CreatePassword from './components/create_accound_flow/CreatePassword'
import CreateUsername from './components/create_accound_flow/CreateUsername'
import LanguageLearnOption from './components/create_accound_flow/LanguageLearnOption'
import LanguageLevel from './components/create_accound_flow/LanguageLevel'
import LearningTime from './components/create_accound_flow/LearningTime'
import PasswordScreen from './components/create_accound_flow/PasswordScreen'
import PurposeLang from './components/create_accound_flow/PurposeLang'
import ResetPassword from './components/create_accound_flow/ResetPassword'
import SignUp from './components/create_accound_flow/SignUp'
import WelcomeScreen from './components/create_accound_flow/WelcomeScreen'
import LoadingScreen from './components/Loading/LoadingScreen'
import PremiumScreen from './components/Premium Screen/PremiumScreen'

function App() {
  

  return (
    <div>
      {/* <WelcomeScreen/>
     <SignUp/>
     <PasswordScreen/>
     <ResetPassword/> 
      <PremiumScreen/>
      <StartScreen/>
      <LoadingScreen/>
      <BookScreen/>
      <CreateUsername />
       <CreatePassword/>     
      <ChooseLanguage/>
      <AboutUser/>
      <PurposeLang/> 
      <LanguageLevel/>
      <LanguageLearnOption/> */}
      {/* <LearningTime/> */}
      <BookScreen />
    </div>
  );
}

export default App
