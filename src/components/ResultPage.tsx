import { CheckCircle, Printer, ArrowLeft, ShieldCheck } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  onBack: () => void;
}

function FieldRow({
  labelSr,
  labelEn,
  value,
  highlight,
}: {
  labelSr: string;
  labelEn: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex border-b border-gray-100 last:border-0 ${highlight ? 'bg-[#f7faff]' : 'bg-white'}`}>
      <div className="w-44 flex-shrink-0 px-3 py-2 border-r border-gray-100">
        <p className="text-[10px] text-[#5a7ab5] leading-tight">{labelSr}</p>
        <p className="text-[11px] font-semibold text-[#1a2744] leading-tight">{labelEn}</p>
      </div>
      <div className="flex-1 px-3 py-2">
        <p className="text-[12px] font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function SectionBand({ sr, en }: { sr: string; en: string }) {
  return (
    <div className="bg-[#e8eef7] border-y border-[#c5d4e8] px-3 py-1.5">
      <span className="text-[10px] text-[#003893] italic">{sr} </span>
      <span className="text-[10px] text-[#003893] font-semibold">{en}</span>
    </div>
  );
}

export default function ResultPage({ onBack }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f8]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-1.5 px-4">
        <div className="max-w-3xl mx-auto text-[11px] text-gray-400 flex items-center gap-1.5">
          <button onClick={onBack} className="text-[#003893] hover:underline flex items-center gap-1">
            <ArrowLeft size={11} />
            Назад / Back
          </button>
          <span>›</span>
          <span className="text-[#003893]">Провера / Verification</span>
          <span>›</span>
          <span className="text-gray-600">Штампај / Print</span>
        </div>
      </div>

      <main className="flex-1 py-5 px-3">
        <div className="max-w-3xl mx-auto space-y-3">

          {/* ── GREEN APPROVED BANNER ── */}
          <div className="bg-[#1e7e3e] rounded px-4 py-3 flex items-center gap-3 shadow-sm">
            <CheckCircle size={26} className="text-white flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white font-extrabold text-base leading-tight tracking-wide">
                ВИЗА ОДОБРЕНА / VISA APPROVED
              </p>
              <p className="text-green-200 text-[11px] mt-0.5">
                Електронска е-виза је верификована и важећа / The electronic e-visa has been verified and is valid.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-white/15 rounded px-3 py-1.5">
              <ShieldCheck size={14} className="text-green-200" />
              <span className="text-white text-xs font-bold tracking-widest">✓ VERIFIED</span>
            </div>
          </div>

          {/* ── DOCUMENT CARD ── */}
          <div className="bg-white rounded shadow border border-gray-200 overflow-hidden relative">

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
              <img src="/Sarbianlogo.png" alt="" className="w-72 h-auto select-none" style={{ opacity: 0.035 }} />
            </div>

            <div className="relative z-10">

              {/* ── Blue ministry header ── */}
              <div className="bg-[#003893] px-4 py-2.5 flex items-center gap-3">
                <img src="/Sarbianlogo.png" alt="Coat of Arms" className="h-11 w-auto flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-extrabold text-[13px] leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                    РЕПУБЛИКА СРБИЈА МИНИСТАРСТВО СПОЉНИХ ПОСЛОВА
                  </p>
                  <p className="text-blue-200 text-[11px] font-semibold leading-snug">
                    REPUBLIC OF SERBIA MINISTRY OF FOREIGN AFFAIRS
                  </p>
                  <p className="text-blue-300 text-[9px] tracking-widest mt-0.5 font-medium">
                    E-VISA VERIFICATION SYSTEM – EVISA.MFA.GOV.RS
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-[11px] font-semibold px-3 py-1.5 rounded transition-colors flex-shrink-0"
                >
                  <Printer size={12} />
                  Штампај / Print
                </button>
              </div>

              {/* ── Title row ── */}
              <div className="bg-[#f8f9fc] border-b border-gray-200 px-4 py-3 text-center">
                <p className="text-[#1a2744] font-extrabold text-sm tracking-wide">
                  ОБАВЕШТЕЊЕ О ДОДАВАЊУ Е-ВИЗЕ
                </p>
                <p className="text-gray-500 text-[11px] font-semibold tracking-widest">
                  NOTIFICATION OF GRANTING AN E-VISA
                </p>
                <div className="w-40 h-px bg-[#003893]/30 mx-auto mt-2" />
              </div>

              {/* ── Main content: left fields + right sidebar ── */}
              <div className="flex">

                {/* Left — all data fields */}
                <div className="flex-1 border-r border-gray-100">

                  {/* Application details band */}
                  <SectionBand sr="Детаљи апликације /" en="Application Details" />
                  <FieldRow labelSr="ИД апликације" labelEn="Application ID" value="60915-43001-44313" highlight />
                  <FieldRow labelSr="Датум регистрације" labelEn="Date of Registration" value="08/05/2026" />

                  {/* Personal details band */}
                  <SectionBand sr="Јединa електронска е-виза издата за /" en="The Only Electronic E-Visa issued To" />
                  <FieldRow labelSr="Презиме" labelEn="Surname," value="ALI" highlight />
                  <FieldRow labelSr="Дато Имe" labelEn="Given name," value="AMANAT" />
                  <FieldRow labelSr="Датум рођења" labelEn="Date of Birth," value="12/05/2003" highlight />
                  <FieldRow labelSr="Пол" labelEn="Gender," value="MALE" />
                  <FieldRow labelSr="Националност" labelEn="Nationality," value="PAKISTANI" highlight />
                  <FieldRow labelSr="Број путне исправе" labelEn="Travel Document Number," value="EP1837411" />

                  {/* Visa data band */}
                  <SectionBand sr="Подаци о издатој електронској визи /" en="Data on the issued Electronic E-visa" />
                  <FieldRow labelSr="Важење електронске е-визе" labelEn="Validity of Electronic E-Visa" value="09/05/2026 to 07/08/2026" highlight />
                  <FieldRow labelSr="Трајање боравка (дана)" labelEn="Duration of Stay (Days)" value="90 Days" />
                  <FieldRow labelSr="Број тражених улазака" labelEn="Number of Entries Requested" value="Један улазак / Single Entry" highlight />
                  <FieldRow labelSr="Датум одлуке о одобрењу е-визе" labelEn="E-Visa Approval Decision Date" value="09/05/2026" />
                  <FieldRow labelSr="ИД број визе за један улазак" labelEn="Single Entry Visa ID Number" value="DKH303423" highlight />
                  <FieldRow labelSr="Код за верификацију визе" labelEn="eVisa Verification Code" value="b14a1170-1436-4217-9K3f-Ja60177" />
                </div>

                {/* Right sidebar — barcode, photo, stamp */}
                <div className="w-40 flex-shrink-0 flex flex-col items-center py-3 px-2 gap-3 bg-white">

                  {/* Barcode — full width, tall enough to look complete */}
                  <div className="border border-gray-400 bg-white w-full px-1 pt-1 pb-0.5">
                    <div className="flex items-stretch gap-px" style={{ height: 52 }}>
                      {Array.from({ length: 52 }, (_, i) => {
                        const pattern = [3,1,2,1,3,2,1,2,3,1,1,2,3,2,1,3,2,1,2,2,1,3,2,1,3,1,2,3,1,2,1,1,3,2,1,3,2,2,1,2,3,1,2,1,3,2,1,2,3,1,2,1];
                        const w = pattern[i % pattern.length];
                        return (
                          <div
                            key={i}
                            className="bg-gray-900 self-stretch"
                            style={{ width: w === 3 ? 3 : w === 2 ? 2 : 1 }}
                          />
                        );
                      })}
                    </div>
                    <p className="text-center text-[9px] font-mono font-bold mt-1 tracking-widest text-gray-900">
                      DKH303423
                    </p>
                  </div>

                  {/* Applicant photo — full portrait with suit, no cropping */}
                  <div className="border-2 border-gray-300 shadow-sm w-full bg-white">
                    <img
                      src="/Gemini_Generated_Image_pifs5ipifs5ipifs.png"
                      alt="Applicant Photo"
                      className="w-full block"
                    />
                  </div>

                  {/* Purple embassy stamp */}
                  <div className="flex flex-col items-center">
                    <img
                      src="/serbia-stamp.png"
                      alt="Embassy Stamp"
                      className="w-28 h-28 object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    <p className="text-[8px] text-center text-gray-500 leading-tight -mt-1 italic">
                      Амбасада Републике<br />Србије / Њу Делхи
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Legal notice ── */}
              <div className="bg-[#f8f9fc] border-t border-gray-200 px-4 py-3 flex gap-3 items-start">
                <div className="flex-shrink-0">
                  <img src="/Sarbianlogo.png" alt="" className="w-10 h-auto opacity-50" />
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  * When passing the State border of the Republic of Serbia and during stay in the country foreign citizens have to present the electronic visa in printed or electronic form and a valid travel document; * The electronic visa is issued in accordance with a valid travel document proving the identity, and it is considered as valid only together with the travel document; * Foreign citizen is responsibly for information provided in the application of electronic visa; * QR code contain data for internal use only; * Приликом преласка државне границе Републике Србије и током боравка у земљи страни држављани морају да покажу електронску визу у штампаном или електронском облику и важећу путну исправу; Електронска виза се издаје у складу са важећом путном исправом; КР код садржи податке само за интерну употребу;
                </p>
              </div>

              {/* ── Verified footer strip ── */}
              <div className="bg-[#1e7e3e] px-4 py-2.5 flex items-center gap-3">
                <CheckCircle size={16} className="text-white flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white text-[11px] font-bold">
                    Документ је верификован / Document Verified
                  </p>
                  <p className="text-green-200 text-[9px]">
                    Верификовано: 09/05/2026 у 14:32:07 CET — evisa.mfa.gov.rs
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-green-200 text-[9px] font-mono">
                    Verification Code: b14a1170-1436-4217-9K3f-Ja60177
                  </p>
                  <p className="text-green-300 text-[9px] font-mono">
                    Ref: VRF-2026-DKH303423 | evisa.mfa.gov.rs
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
