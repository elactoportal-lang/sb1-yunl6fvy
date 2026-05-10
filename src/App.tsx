import { useState } from 'react';
import VerificationPage from './components/VerificationPage';
import ResultPage from './components/ResultPage';

export type AppState = 'verification' | 'loading' | 'result';

function App() {
  const [appState, setAppState] = useState<AppState>('verification');

  const handleVerify = () => {
    setAppState('loading');
    setTimeout(() => setAppState('result'), 2000);
  };

  const handleBack = () => setAppState('verification');

  return (
    <div className="min-h-screen bg-gray-50">
      {appState === 'verification' && <VerificationPage onVerify={handleVerify} />}
      {appState === 'loading' && <LoadingScreen />}
      {appState === 'result' && <ResultPage onBack={handleBack} />}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-5">
        <img src="/Sarbianlogo.png" alt="Serbia Coat of Arms" className="w-20 h-auto opacity-80" />
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#003893] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#003893] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-[#003893] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-[#003893] font-semibold text-base tracking-wide">Верификација у току / Verifying...</p>
        <p className="text-gray-500 text-sm">Молимо сачекајте / Please wait</p>
      </div>
    </div>
  );
}

export default App;
