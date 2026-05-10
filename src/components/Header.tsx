export default function Header() {
  return (
    <header>
      {/* Top utility bar */}
      <div className="bg-[#1a1a2e] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-medium tracking-wide">РЕПУБЛИКА СРБИЈА / REPUBLIC OF SERBIA</span>
        </div>
        <div className="flex items-center gap-5 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Српски</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-white transition-colors font-medium text-white">English</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-white transition-colors">Ћирилица</a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#003893] shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="/Sarbianlogo.png"
              alt="Coat of Arms of Serbia"
              className="h-16 w-auto drop-shadow-md"
            />
          </div>
          <div className="border-l border-blue-400/40 pl-4">
            <p className="text-white font-bold text-lg leading-tight tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              РЕПУБЛИКА СРБИЈА
            </p>
            <p className="text-blue-200 text-xs font-medium tracking-widest uppercase leading-tight">
              Министарство спољних послова
            </p>
            <p className="text-white font-semibold text-sm leading-tight mt-0.5" style={{ fontFamily: 'Georgia, serif' }}>
              REPUBLIC OF SERBIA
            </p>
            <p className="text-blue-200 text-xs font-medium tracking-widest uppercase leading-tight">
              Ministry of Foreign Affairs
            </p>
          </div>
          <div className="ml-auto text-right hidden md:block">
            <p className="text-blue-100 text-xs font-medium tracking-wider">E-VISA PORTAL</p>
            <p className="text-white text-sm font-bold tracking-widest">evisa.mfa.gov.rs</p>
            <p className="text-blue-200 text-xs mt-0.5">Портал за електронске визе</p>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-[#002570] border-b border-blue-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex items-center gap-0 text-sm">
            {['Почетна / Home', 'Апликација / Apply', 'Статус / Status', 'Помоћ / Help', 'Контакт / Contact'].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`px-4 py-2.5 text-xs font-medium tracking-wide transition-colors hover:bg-[#003893] ${
                  item.includes('Статус') ? 'bg-[#003893] text-white border-b-2 border-yellow-400' : 'text-blue-200 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
