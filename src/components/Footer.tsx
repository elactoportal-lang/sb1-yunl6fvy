export default function Footer() {
  return (
    <footer>
      {/* Info strip */}
      <div className="bg-[#f0f4f8] border-t border-gray-200 py-4 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
          <div>
            <p className="font-semibold text-gray-700 mb-1">Радно време / Office Hours</p>
            <p>Понедељак – Петак: 08:00 – 16:00</p>
            <p>Monday – Friday: 08:00 – 16:00</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">Подршка / Support</p>
            <p>evisa@mfa.gov.rs</p>
            <p>+381 11 3061 100</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-1">Корисни линкови / Useful Links</p>
            <p><a href="#" className="text-[#003893] hover:underline">mfa.gov.rs</a></p>
            <p><a href="#" className="text-[#003893] hover:underline">eid.gov.rs</a></p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#1a2744] text-white">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/Sarbianlogo.png" alt="Serbia Coat of Arms" className="h-10 w-auto opacity-80" />
            <div>
              <p className="font-bold text-sm">evisa.mfa.gov.rs</p>
              <p className="text-blue-300 text-xs">Портал за електронске визе Републике Србије</p>
              <p className="text-blue-300 text-xs">Electronic Visa Portal of the Republic of Serbia</p>
            </div>
          </div>
          <div className="md:ml-auto text-center md:text-right text-xs text-blue-300 space-y-1">
            <p>© 2026 Министарство спољних послова Републике Србије</p>
            <p>© 2026 Ministry of Foreign Affairs of the Republic of Serbia</p>
            <div className="flex items-center gap-3 justify-center md:justify-end mt-1">
              <a href="#" className="hover:text-white transition-colors">Политика приватности</a>
              <span className="text-blue-500">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-blue-500">|</span>
              <a href="#" className="hover:text-white transition-colors">Услови коришћења</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#0d1a33] py-1.5 px-4 text-center text-xs text-blue-400/60">
        Веб презентација је лиценцирана под условима лиценце Creative Commons Ауторство-Некомерцијално-Без прерада 3.0 Србија &nbsp;|&nbsp; ite.gov.rs
      </div>
    </footer>
  );
}
