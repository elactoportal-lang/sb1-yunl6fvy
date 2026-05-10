import { useState } from 'react';
import { Search, ShieldCheck, AlertCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  onVerify: () => void;
}

const VALID_APP_ID = '60915-43001-44313';
const VALID_PASSPORT = 'EP1837411';

export default function VerificationPage({ onVerify }: Props) {
  const [appId, setAppId] = useState('');
  const [passport, setPassport] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedAppId = appId.trim().replace(/\s/g, '');
    const normalizedPassport = passport.trim().toUpperCase();
    if (normalizedAppId === VALID_APP_ID && normalizedPassport === VALID_PASSPORT) {
      setError('');
      onVerify();
    } else {
      setError('Неисправан ИД апликације или број пасоша. / Invalid Application ID or Passport Number. Please check and try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f7fa] border-b border-gray-200 py-2 px-4">
        <div className="max-w-5xl mx-auto text-xs text-gray-500 flex items-center gap-2">
          <a href="#" className="text-[#003893] hover:underline">Почетна / Home</a>
          <span>›</span>
          <a href="#" className="text-[#003893] hover:underline">Статус визе / Visa Status</a>
          <span>›</span>
          <span className="text-gray-700 font-medium">Верификација / Verification</span>
        </div>
      </div>

      <main className="flex-1 py-8 px-4 relative overflow-hidden">
        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <img
            src="/Sarbianlogo.png"
            alt=""
            className="w-96 h-auto opacity-[0.04] select-none"
            style={{ userSelect: 'none' }}
          />
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Page title */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#003893]/10 rounded-full px-4 py-1 mb-3">
              <ShieldCheck size={14} className="text-[#003893]" />
              <span className="text-[#003893] text-xs font-semibold tracking-wider uppercase">Secure Portal</span>
            </div>
            <h1 className="text-2xl font-bold text-[#1a2744]" style={{ fontFamily: 'Georgia, serif' }}>
              Верификација Е-Визе
            </h1>
            <h2 className="text-lg font-semibold text-gray-600">E-Visa Verification</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
              Унесите ИД апликације и број путне исправе да бисте верификовали статус ваше е-визе.<br />
              <span className="text-xs">Enter your Application ID and Travel Document Number to verify your e-visa status.</span>
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            {/* Card header */}
            <div className="bg-[#003893] py-3 px-5 flex items-center gap-3">
              <Search size={16} className="text-white" />
              <span className="text-white text-sm font-semibold tracking-wide">Провера статуса / Status Check</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#1a2744] mb-1 tracking-wide uppercase">
                  ИД апликације / Application ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={appId}
                  onChange={e => setAppId(e.target.value)}
                  placeholder="нпр. / e.g. 60915-43001-44313"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003893]/50 focus:border-[#003893] transition-all bg-gray-50 font-mono"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">Формат: XXXXX-XXXXX-XXXXX / Format: XXXXX-XXXXX-XXXXX</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] mb-1 tracking-wide uppercase">
                  Број путне исправе / Travel Document Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={passport}
                  onChange={e => setPassport(e.target.value)}
                  placeholder="нпр. / e.g. EP1837411"
                  className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003893]/50 focus:border-[#003893] transition-all bg-gray-50 font-mono uppercase"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">Број пасоша / Passport number as printed on travel document</p>
              </div>

              {error && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded px-3 py-2.5">
                  <AlertCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-red-700 text-xs leading-relaxed">{error}</p>
                </div>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full bg-[#0a7c3e] hover:bg-[#085f30] active:bg-[#064d27] text-white font-bold py-3 px-6 rounded transition-all duration-200 flex items-center justify-center gap-2 text-sm tracking-wide shadow-sm"
                >
                  <ShieldCheck size={16} />
                  Верификуј / Verify Status
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  Овај портал је заштићен у складу са важећим прописима Републике Србије.<br />
                  This portal is secured in accordance with the regulations of the Republic of Serbia.
                </p>
              </div>
            </form>
          </div>

          {/* Info boxes */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="text-xs font-bold text-[#003893] mb-1 uppercase tracking-wide">Напомена / Note</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                ИД апликације се налази у потврди о подношењу апликације за е-визу.<br />
                Application ID can be found in your e-visa application confirmation.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <h3 className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">Важно / Important</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Е-виза је важећа само уз важећу путну исправу.<br />
                E-visa is valid only together with a valid travel document.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
