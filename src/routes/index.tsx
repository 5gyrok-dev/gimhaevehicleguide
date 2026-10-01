import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { documentFields, fieldText, languageNames, languages, previewSize, t, type DocumentKey, type Language } from '@/guide-content';
import startImage from '@/assets/todugi_start_car.png.asset.json';
import applicationImage from '@/assets/todugi_application_guide.png.asset.json';
import ticketImage from '@/assets/todugi_ticket_guide.png.asset.json';
import counterImage from '@/assets/todugi_counter_guide.png.asset.json';
import transferPreview from '@/assets/transfer_registration_form.png.asset.json';
import certificatePreview from '@/assets/vehicle_transfer_certificate.png.asset.json';
import powerPreview from '@/assets/power_of_attorney.png.asset.json';
import numberPreview from '@/assets/number_change_application.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: '김해시 외국인 차량등록 안내 | 신청서 작성 안내' },
    { name: 'description', content: '외국인 주민을 위한 김해시 차량 명의 이전·번호 변경 신청서 작성 및 번호표 발급 안내' },
    { property: 'og:title', content: '김해시 외국인 차량등록 안내' },
    { property: 'og:description', content: '5개 언어로 확인하는 차량 명의 이전·번호 변경 신청서 작성 안내' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Guide,
});

type Step = 'start' | 'language' | 'service' | 'visitor' | 'preparation' | 'insurance' | 'insuranceNote' | 'example' | 'finish';
type Service = 'transfer' | 'number';
type Visitor = 'together' | 'seller' | 'buyer';
const docs: Record<DocumentKey, { preview: string }> = {
  transferForm: { preview: transferPreview.url },
  certificate: { preview: certificatePreview.url },
  power: { preview: powerPreview.url },
  numberForm: { preview: numberPreview.url },
};

function FormWithLabels({ doc, language, alt, onDoubleClick }: { doc: DocumentKey; language: Language; alt: string; onDoubleClick?: () => void }) {
  return <div className="relative w-full select-none" onDoubleClick={onDoubleClick}>
    <img src={docs[doc].preview} alt={alt} draggable={false} className="block h-auto w-full" />
    {language !== 'ko' && documentFields[doc].map((m, i) => <span key={i} className="pointer-events-none absolute whitespace-nowrap rounded-[3px] bg-primary px-[0.35em] py-[0.05em] text-[clamp(7px,1.8cqw,14px)] font-bold leading-tight text-primary-foreground shadow-sm" style={{ top: `${m.y / previewSize.h * 100}%`, ...(m.a === 'l' ? { right: `${100 - m.x / previewSize.w * 100}%` } : { left: `${m.x / previewSize.w * 100}%` }) }}>{fieldText(m.f, language)}</span>)}
  </div>;
}

function Guide() {
  const [step, setStep] = useState<Step>('start');
  const [history, setHistory] = useState<Step[]>([]);
  const [language, setLanguage] = useState<Language>('ko');
  const [service, setService] = useState<Service | null>(null);
  const [visitor, setVisitor] = useState<Visitor | null>(null);
  const [insurance, setInsurance] = useState<boolean | null>(null);
  const [docIndex, setDocIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const c = t(language);
  const selectedDocs: DocumentKey[] = service === 'number' ? ['numberForm'] : visitor === 'seller' ? ['transferForm', 'certificate', 'power'] : ['transferForm', 'certificate'];
  const currentDoc: DocumentKey = selectedDocs[docIndex] ?? 'transferForm';
  const exampleSteps: Step[] = selectedDocs.map(() => 'example');
  const sequence: Step[] = service === 'number' ? ['language', 'service', ...exampleSteps, 'finish'] : ['language', 'service', ...(service ? ['visitor' as Step, ...(visitor && visitor !== 'together' ? ['preparation' as Step] : []), 'insurance' as Step, ...(insurance === false ? ['insuranceNote' as Step] : []), ...exampleSteps, 'finish' as Step] : [])];
  const progress = Math.max(1, sequence.indexOf(step) + 1 + (step === 'example' ? docIndex : 0));

  const go = (next: Step) => {
    setHistory(prev => [...prev, step]);
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const back = () => {
    if (step === 'example' && docIndex > 0) { setDocIndex(i => i - 1); return; }
    const previous = history.at(-1);
    if (previous) { setHistory(h => h.slice(0, -1)); setStep(previous); window.scrollTo({ top: 0, behavior: 'instant' }); }
  };
  const reset = () => { setStep('start'); setHistory([]); setLanguage('ko'); setService(null); setVisitor(null); setInsurance(null); setDocIndex(0); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const openZoom = () => { setZoom(1); setOffset({ x: 0, y: 0 }); setZoomed(true); };
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setZoomed(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [zoomed]);
  const imageAlt = `${c[currentDoc]} — ${c.original}`;

  const Primary = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => <Button size="guide" variant="guide" onClick={onClick} className="w-full justify-between text-left"><span>{children}</span><ArrowRight aria-hidden="true" /></Button>;
  const Choice = ({ title, detail, onClick }: { title: string; detail?: string; onClick: () => void }) => <Button variant="choice" size="choice" onClick={onClick} className="w-full justify-between text-left"><span className="min-w-0 flex-1 whitespace-normal"><span className="block text-xl font-bold leading-snug">{title}</span>{detail && <span className="mt-1 block text-base font-normal leading-snug text-muted-foreground">{detail}</span>}</span><ChevronRight aria-hidden="true" className="ml-3 shrink-0" /></Button>;

  return <div className="min-h-screen bg-background">
    <div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col bg-card shadow-[0_8px_48px_var(--shadow-app)]">
      <header className="px-6 pt-6 sm:px-9">
        <div className="flex min-h-11 items-center justify-between gap-3">
          {step !== 'start' ? <Button variant="ghost" size="icon" onClick={back} aria-label={c.back} title={c.back} className="-ml-2 shrink-0"><ArrowLeft /></Button> : <div className="h-9 w-9 shrink-0" />}
          <span className="text-center text-sm font-bold leading-snug text-muted-foreground">{c.app}</span>
          <span className="min-w-9 text-right text-sm font-semibold tabular-nums text-muted-foreground">{step === 'start' ? '' : `${progress} / ${sequence.length}`}</span>
        </div>
        {step !== 'start' && <div role="progressbar" aria-valuenow={progress} aria-valuemin={1} aria-valuemax={sequence.length} className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${progress / sequence.length * 100}%` }} /></div>}
      </header>
      <main key={`${step}-${docIndex}`} className="guide-enter flex w-full flex-1 flex-col px-6 pb-8 pt-9 sm:px-9">
        {step === 'start' && <>
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">GIMHAE · VEHICLE GUIDE</div>
          <h1 className="text-[2.35rem] font-extrabold leading-tight text-foreground">{c.startTitle}</h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">{c.startLead}</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{c.startNote}</p>
          <div className="my-8 flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-surface"><img src={startImage.url} alt="차를 타고 있는 토더기" className="h-auto max-h-[340px] w-full object-contain mix-blend-multiply" /></div>
          <Primary onClick={() => go('language')}>START</Primary>
        </>}
        {step === 'language' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">LANGUAGE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.language}</h1>
          <div className="space-y-3">{languages.map(lang => <Choice key={lang} title={languageNames[lang]} onClick={() => { setLanguage(lang); go('service'); }} />)}</div>
        </>}
        {step === 'service' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">01 · SERVICE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.service}</h1>
          <div className="space-y-4"><Choice title={c.transfer} detail={c.transferDetail} onClick={() => { if (service !== 'transfer') { setService('transfer'); setVisitor(null); setInsurance(null); } setDocIndex(0); go('visitor'); }} /><Choice title={c.number} detail={c.numberDetail} onClick={() => { if (service !== 'number') { setService('number'); setVisitor(null); setInsurance(null); } setDocIndex(0); go('example'); }} /></div>
        </>}
        {step === 'visitor' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">02 · VISIT</p><h1 className="mb-7 text-[1.9rem] font-extrabold leading-snug">{c.visitor}</h1>
          <div className="space-y-3"><Choice title={c.together} onClick={() => { setVisitor('together'); setDocIndex(0); go('insurance'); }} /><Choice title={c.seller} onClick={() => { setVisitor('seller'); setDocIndex(0); go('preparation'); }} /><Choice title={c.buyer} onClick={() => { setVisitor('buyer'); setDocIndex(0); go('preparation'); }} /></div>
          <div className="mt-6 space-y-2 rounded-lg border-2 border-primary bg-surface px-4 py-4">{c.roles.split(' · ').map(r => <p key={r} className="text-lg font-bold leading-snug text-foreground">{r}</p>)}</div>
        </>}
        {step === 'preparation' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · PREPARATION</p><h1 className="text-[1.9rem] font-extrabold leading-snug">{visitor === 'seller' ? c.sellerNeed : c.buyerNeed}</h1>
          {visitor === 'seller' ? <div className="mt-8 border-l-4 border-primary bg-surface px-5 py-5"><p className="mb-3 font-bold">{c.sellerDocs}</p><ol className="list-inside list-decimal space-y-2 text-[1rem] leading-relaxed"><li>{c.transferForm}</li><li>{c.certificate}</li><li>{c.power}</li></ol></div> : <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.buyerNote}</p>}
          <div className="mt-auto pt-12"><Primary onClick={() => go('insurance')}>{c.understood}</Primary></div>
        </>}
        {step === 'insurance' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · INSURANCE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.insurance}</h1>
          <div className="space-y-3"><Choice title={c.yes} onClick={() => { setInsurance(true); go('example'); }} /><Choice title={c.no} onClick={() => { setInsurance(false); go('insuranceNote'); }} /></div>
        </>}
        {step === 'insuranceNote' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · INSURANCE</p><h1 className="text-[1.9rem] font-extrabold leading-snug">{c.insuranceNote}</h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.insuranceDisclaimer}</p>
          <div className="mt-auto pt-12"><Primary onClick={() => go('example')}>{c.continue}</Primary></div>
        </>}
        {step === 'example' && <>
          <div className="mb-5 flex items-start justify-between gap-3"><div><p className="mb-2 text-xs font-bold uppercase text-primary">{service === 'number' ? '02' : '04'} · FORMS</p><h1 className="text-[1.8rem] font-extrabold leading-snug">{c.examples}</h1></div><img src={applicationImage.url} alt="신청서를 들고 안내하는 토더기" className="h-16 w-20 shrink-0 object-contain mix-blend-multiply" /></div>
          <p className="mb-5 text-lg font-semibold leading-snug text-foreground">{c.exampleLead}</p>
          <div className="mb-4 flex items-center justify-between gap-3"><span className="min-w-0 text-lg font-bold leading-snug">{c[currentDoc]}</span><span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{docIndex + 1} / {selectedDocs.length}</span></div>
          {visitor === 'buyer' && docIndex === 0 && <p className="mb-4 border-l-4 border-primary bg-surface px-4 py-3 text-base font-semibold leading-relaxed">{c.buyerNeed}</p>}
          <Button variant="paper" size="paper" onClick={openZoom} className="group w-full overflow-hidden" aria-label={`${c[currentDoc]} ${c.zoom}`}><div className="w-full [container-type:inline-size]"><FormWithLabels doc={currentDoc} language={language} alt={imageAlt} /></div></Button>
          <div className="mt-3 flex flex-wrap gap-2"><Button variant="outline" onClick={openZoom} className="h-11 text-base"><ZoomIn />{c.zoom}</Button></div>
          <div className="mt-8"><Primary onClick={() => { if (docIndex < selectedDocs.length - 1) { setDocIndex(i => i + 1); window.scrollTo({ top: 0, behavior: 'instant' }); } else go('finish'); }}>{docIndex < selectedDocs.length - 1 ? c.nextDoc : c.afterWrite}</Primary></div>
        </>}
        {step === 'finish' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">{service === 'number' ? '03' : '05'} · NEXT</p><h1 className="mb-4 text-[1.9rem] font-extrabold leading-snug">{c.finishTitle}</h1>
          <p className="text-xl font-bold leading-relaxed">{c.finishLead}</p><p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.finishNote}</p>
          <img src={ticketImage.url} alt="번호표 발급기 옆에서 안내하는 토더기" className="mx-auto my-6 h-auto max-h-52 w-full object-contain mix-blend-multiply" />
          <ol className="space-y-0 border-l-2 border-border pl-5">{[c.stepExample, c.stepWrite, c.stepTicket, c.stepCounter].map((text, i) => <li key={i} className="relative pb-5 text-base font-semibold last:pb-0 before:absolute before:-left-[27px] before:top-1 before:h-3 before:w-3 before:rounded-full before:bg-primary"><span className="mr-3 text-primary">0{i + 1}</span>{text}</li>)}</ol>
          <img src={counterImage.url} alt="창구 직원에게 안내받는 토더기" className="mx-auto mt-7 h-auto max-h-28 w-full object-contain mix-blend-multiply" />
          <div className="mt-8"><Button variant="outline" size="guide" onClick={reset} className="w-full"><RotateCcw />{c.restart}</Button></div>
        </>}
      </main>
    </div>
    {zoomed && <div role="dialog" aria-modal="true" aria-label={`${c[currentDoc]} ${c.zoom}`} className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="flex items-center justify-between gap-2 border-b border-border bg-card px-4 py-3"><span className="min-w-0 truncate text-base font-bold">{c[currentDoc]}</span><Button variant="ghost" size="icon" aria-label={c.close} onClick={() => setZoomed(false)}><X /></Button></div>
      <div className="relative flex flex-1 touch-none items-center justify-center overflow-hidden bg-muted" onPointerDown={e => { drag.current = { x: e.clientX, y: e.clientY, startX: offset.x, startY: offset.y }; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if (drag.current) setOffset({ x: drag.current.startX + e.clientX - drag.current.x, y: drag.current.startY + e.clientY - drag.current.y }); }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}><div className="w-[min(100%,calc((100dvh-140px)*0.7077))] [container-type:inline-size]" style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}><FormWithLabels doc={currentDoc} language={language} alt={imageAlt} onDoubleClick={() => { setZoom(z => z >= 3 ? 1 : 2); setOffset({ x: 0, y: 0 }); }} /></div></div>
      <div className="flex items-center justify-center gap-4 border-t border-border bg-card p-3"><Button variant="outline" size="icon" aria-label={c.zoomOut} onClick={() => setZoom(z => Math.max(1, +(z - .5).toFixed(1)))}><ZoomOut /></Button><span className="min-w-14 text-center text-sm font-bold tabular-nums">{Math.round(zoom * 100)}%</span><Button variant="outline" size="icon" aria-label={c.zoomIn} onClick={() => setZoom(z => Math.min(4, +(z + .5).toFixed(1)))}><ZoomIn /></Button></div>
    </div>}
  </div>;
}
