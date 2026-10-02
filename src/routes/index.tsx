import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, Coins, Gavel, Receipt, Route as RouteIcon, RotateCcw, SquareParking, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { documentFields, documentTitle, fieldText, languageNames, languages, previewSize, t, type DocumentKey, type Language } from '@/guide-content';
import startImage from '@/assets/todugi_start_car_transparent.png.asset.json';
import applicationImage from '@/assets/todugi_application_guide_transparent.png.asset.json';
import counterImage from '@/assets/todugi_counter_guide_transparent.png.asset.json';
import transferBothPreview from '@/assets/form_transfer_both.png.asset.json';
import transferSellerPreview from '@/assets/form_transfer_seller.png.asset.json';
import certificatePreview from '@/assets/form_certificate.png.asset.json';
import numberPreview from '@/assets/form_number_form.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: '김해시 외국인 자동차 등록 안내' },
    { name: 'description', content: '외국인 주민을 위한 김해시 자동차 명의 이전·번호 변경 신청서 작성 안내' },
    { property: 'og:title', content: '김해시 외국인 자동차 등록 안내' },
    { property: 'og:description', content: '5개 언어로 확인하는 차량 명의 이전·번호 변경 신청서 작성 안내' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Guide,
});

type Step = 'start' | 'language' | 'service' | 'visitor' | 'preparation' | 'insurance' | 'insuranceNote' | 'check' | 'checkNote' | 'address' | 'addressNote' | 'example' | 'finish';
type Service = 'transfer' | 'number';
type Visitor = 'together' | 'seller' | 'buyer';
const docs: Record<DocumentKey, { preview: string }> = {
  transferBoth: { preview: transferBothPreview.url },
  transferSeller: { preview: transferSellerPreview.url },
  certificate: { preview: certificatePreview.url },
  numberForm: { preview: numberPreview.url },
};

function FormWithLabels({ doc, language, alt, onDoubleClick }: { doc: DocumentKey; language: Language; alt: string; onDoubleClick?: () => void }) {
  return <div className="relative w-full select-none" onDoubleClick={onDoubleClick}>
    <img src={docs[doc].preview} alt={alt} draggable={false} className="block h-auto w-full" />
    {language !== 'ko' && documentFields[doc].map((m, i) => <span key={i} className="pointer-events-none absolute whitespace-nowrap rounded-[0.3em] border border-primary/35 bg-card/95 px-[0.4em] py-[0.05em] text-[clamp(7px,1.75cqw,14px)] font-bold leading-tight text-primary shadow-[0_1px_3px_var(--shadow-app)]" style={{ top: `${m.y / previewSize.h * 100}%`, ...(m.a === 'l' ? { right: `${100 - m.x / previewSize.w * 100}%` } : { left: `${m.x / previewSize.w * 100}%` }) }}>{fieldText(m.f, language)}</span>)}
  </div>;
}

function Guide() {
  const [step, setStep] = useState<Step>('start');
  const [history, setHistory] = useState<Step[]>([]);
  const [language, setLanguage] = useState<Language>('ko');
  const [service, setService] = useState<Service | null>(null);
  const [visitor, setVisitor] = useState<Visitor | null>(null);
  const [insurance, setInsurance] = useState<boolean | null>(null);
  const [knowsAddress, setKnowsAddress] = useState<boolean | null>(null);
  const [docIndex, setDocIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const c = t(language);
  const selectedDocs: DocumentKey[] = service === 'number' ? ['numberForm'] : visitor === 'seller' ? ['transferSeller', 'certificate'] : ['transferBoth', 'certificate'];
  const currentDoc: DocumentKey = selectedDocs[docIndex] ?? 'transferBoth';
  const docName = (d: DocumentKey) => c[documentTitle[d]];
  const exampleSteps: Step[] = selectedDocs.map(() => 'example');
  const sequence: Step[] = service === 'number' ? ['language', 'service', ...exampleSteps, 'finish'] : ['language', 'service', ...([ 'visitor' as Step, ...(visitor && visitor !== 'together' ? ['preparation' as Step] : []), 'insurance' as Step, ...(insurance === false ? ['insuranceNote' as Step] : []), 'check' as Step, 'address' as Step, ...(knowsAddress === false ? ['addressNote' as Step] : []), ...exampleSteps, 'finish' as Step])];
  const progress = Math.max(1, sequence.indexOf(step === 'checkNote' ? 'check' : step === 'insuranceNote' ? 'insurance' : step === 'addressNote' ? 'address' : step) + 1 + (step === 'example' ? docIndex : 0));

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
  const reset = () => { setStep('start'); setHistory([]); setLanguage('ko'); setService(null); setVisitor(null); setInsurance(null); setKnowsAddress(null); setDocIndex(0); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const openZoom = () => { setZoom(1); setOffset({ x: 0, y: 0 }); setZoomed(true); };
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setZoomed(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [zoomed]);
  const imageAlt = `${docName(currentDoc)} — ${c.original}`;

  const Primary = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => <Button size="guide" variant="guide" onClick={onClick} className="w-full justify-between text-left"><span>{children}</span><ArrowRight aria-hidden="true" /></Button>;
  const Choice = ({ title, detail, onClick, i = 0 }: { title: string; detail?: string; onClick: () => void; i?: number }) => <Button variant="choice" size="choice" onClick={onClick} className="guide-stagger w-full justify-between text-left" style={{ animationDelay: `${i * 60}ms` }}><span className="min-w-0 flex-1 whitespace-normal"><span className="block text-xl font-bold leading-snug">{title}</span>{detail && <span className="mt-1 block text-base font-normal leading-snug text-muted-foreground">{detail}</span>}</span><ChevronRight aria-hidden="true" className="ml-3 shrink-0" /></Button>;

  return <div className="min-h-screen bg-app">
    <div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col bg-app shadow-[0_8px_48px_var(--shadow-app)]">
      <header className="px-6 pt-6 sm:px-9">
        <div className="flex min-h-11 items-center justify-between gap-3">
          {step !== 'start' ? <Button variant="ghost" size="icon" onClick={back} aria-label={c.back} title={c.back} className="-ml-2 shrink-0"><ArrowLeft /></Button> : <div className="h-9 w-9 shrink-0" />}
          <span className="text-center text-sm font-bold leading-snug text-muted-foreground">{c.app}</span>
          <span className="min-w-9 text-right text-sm font-semibold tabular-nums text-muted-foreground">{step === 'start' ? '' : `${progress} / ${sequence.length}`}</span>
        </div>
        {step !== 'start' && <div role="progressbar" aria-valuenow={progress} aria-valuemin={1} aria-valuemax={sequence.length} className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${progress / sequence.length * 100}%` }} /></div>}
      </header>
      <main key={`${step}-${docIndex}`} className="guide-enter flex w-full flex-1 flex-col px-6 pb-8 pt-9 sm:px-9">
        {step === 'start' && <div className="flex flex-1 flex-col justify-center pb-14 pt-0">
          <div className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold tracking-wide text-secondary-foreground"><span className="h-2 w-2 rounded-full bg-primary" />VEHICLE REGISTRATION</div>
          <h1 className="text-center text-[2.2rem] font-extrabold leading-tight text-foreground">{c.startTitle}</h1>
          <div className="my-6 flex items-center justify-center"><img src={startImage.url} alt="차를 타고 있는 토더기" className="h-auto max-h-[320px] w-full -translate-x-[7.5%] object-contain" /></div>
          <div className="mt-6"><Primary onClick={() => go('language')}>START</Primary></div>
        </div>}
        {step === 'language' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">LANGUAGE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.language}</h1>
          <div className="space-y-3">{languages.map((lang, i) => <Choice key={lang} i={i} title={languageNames[lang]} onClick={() => { setLanguage(lang); go('service'); }} />)}</div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'service' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">01 · SERVICE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.service}</h1>
          <div className="space-y-4"><Choice title={c.transfer} detail={c.transferDetail} onClick={() => { if (service !== 'transfer') { setService('transfer'); setVisitor(null); setInsurance(null); setKnowsAddress(null); } setDocIndex(0); go('visitor'); }} /><Choice i={1} title={c.number} detail={c.numberDetail} onClick={() => { if (service !== 'number') { setService('number'); setVisitor(null); setInsurance(null); setKnowsAddress(null); } setDocIndex(0); go('example'); }} /></div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'visitor' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">02 · VISIT</p><h1 className="mb-7 whitespace-nowrap text-[1.55rem] font-extrabold leading-snug">{c.visitor}</h1>
          <div className="space-y-3"><Choice title={c.together} onClick={() => { setVisitor('together'); setDocIndex(0); go('insurance'); }} /><Choice i={1} title={c.seller} onClick={() => { setVisitor('seller'); setDocIndex(0); go('preparation'); }} /><Choice i={2} title={c.buyer} onClick={() => { setVisitor('buyer'); setDocIndex(0); go('preparation'); }} /></div>
          <div className="mt-6 space-y-2 rounded-2xl border border-primary/35 bg-cream px-5 py-4 text-center">{[c.roleSeller, c.roleBuyer].map(r => <p key={r} className="text-lg font-bold leading-snug text-foreground">{r}</p>)}</div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'preparation' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · PREPARATION</p><h1 className={`whitespace-pre-line font-extrabold leading-snug sm:text-[1.9rem] ${visitor === 'seller' ? 'text-[1.7rem]' : 'text-[1.35rem]'} ${visitor === 'buyer' ? 'mb-4' : 'mb-7'}`}>{visitor === 'seller' ? c.sellerNeed : c.buyerNeed}</h1>
          {visitor === 'buyer' && <p className="text-base font-medium text-muted-foreground">{c.buyerNeedNote}</p>}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-cream px-5 py-5"><p className="mb-3 text-lg font-bold">{c.docsTitle}</p><ol className="list-inside list-decimal space-y-2 text-lg font-semibold leading-snug"><li>{c.transferForm}</li><li>{c.certificate}</li></ol></div>
          <div className="mt-auto flex justify-center pt-8"><img src={applicationImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto object-contain" /></div>
          <div className="pt-6"><Primary onClick={() => go('insurance')}>{c.understood}</Primary></div>
        </>}
        {step === 'insurance' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · INSURANCE</p><h1 className="mb-8 text-[1.9rem] font-extrabold leading-snug">{c.insurance}</h1>
          <div className="space-y-3"><Choice title={c.yes} onClick={() => { setInsurance(true); go('check'); }} /><Choice i={1} title={c.no} onClick={() => { setInsurance(false); go('insuranceNote'); }} /></div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'insuranceNote' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">03 · INSURANCE</p><h1 className="text-[1.9rem] font-extrabold leading-snug">{c.insuranceNote}</h1>
          <div className="mt-auto flex justify-center pt-8"><img src={applicationImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto object-contain" /></div>
          <div className="pt-6"><Primary onClick={() => go('check')}>{c.continue}</Primary></div>
        </>}
        {step === 'check' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">04 · CHECK</p><h1 className="mb-3 whitespace-pre-line text-[1.6rem] font-extrabold leading-snug">{c.check}</h1>
          <p className="mb-7 text-sm font-medium text-muted-foreground">{c.checkSub}</p>
          <div className="space-y-3"><Choice title={c.checkYes} onClick={() => go('address')} /><Choice i={1} title={c.checkNo} onClick={() => go('checkNote')} /></div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'checkNote' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">04 · CHECK</p><h1 className="text-[1.55rem] font-extrabold leading-snug">{c.checkNoteTitle}</h1>
          <div className="mt-5 space-y-3"><div className="rounded-2xl border border-primary/30 bg-cream px-5 py-4"><p className="flex items-start gap-2 text-lg font-bold leading-snug"><span className="shrink-0 text-primary">①</span><span>{c.checkStep1}</span></p></div><div className="rounded-2xl border border-primary/30 bg-cream px-5 py-4"><p className="flex items-start gap-2 text-lg font-bold leading-snug"><span className="shrink-0 text-primary">②</span><span>{c.checkStep2}</span></p></div></div>
          <p className="mt-3 text-sm font-medium text-muted-foreground">{c.checkHint}</p>
          <div className="mt-5 rounded-2xl border border-primary/30 bg-cream px-5 py-4"><p className="text-base font-bold">{c.checkListTitle}</p><ul className="mt-2 space-y-1.5">{(c.checkItems as readonly string[]).map((item, idx) => { const icons: typeof Receipt[] = [Receipt, Coins, Gavel, SquareParking, RouteIcon]; const Icon = icons[idx] ?? Receipt; return <li key={item} className="flex items-center gap-2 text-base font-semibold leading-snug"><Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />{item}</li>; })}</ul></div>
          <div className="pt-6"><Primary onClick={() => go('address')}>{c.understood}</Primary></div>
        </>}
        {step === 'address' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">05 · ADDRESS</p><h1 className="mb-8 text-[1.4rem] font-extrabold leading-snug sm:text-[1.9rem]">{c.address}</h1>
          <div className="space-y-3"><Choice title={c.addressYes} onClick={() => { setKnowsAddress(true); setDocIndex(0); go('example'); }} /><Choice i={1} title={c.addressNo} onClick={() => { setKnowsAddress(false); go('addressNote'); }} /></div>
          <div className="mt-auto flex justify-center pt-8"><img src={startImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto -translate-x-[7.5%] object-contain" /></div>
        </>}
        {step === 'addressNote' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">05 · ADDRESS</p><h1 className="text-[1.9rem] font-extrabold leading-snug">{c.addressTitle}</h1>
          <p className="mt-5 whitespace-nowrap text-center text-[0.95rem] font-semibold leading-snug">{c.addressBody}</p>
          <p className="mt-4 whitespace-nowrap rounded-xl bg-cream px-3 py-3 text-center text-[0.9rem] font-medium">{c.addressHelp}</p>
          <div className="mt-auto flex justify-center pt-8"><img src={applicationImage.url} alt="" aria-hidden="true" className="guide-enter h-32 w-auto object-contain" /></div>
          <div className="pt-6"><Primary onClick={() => { setDocIndex(0); go('example'); }}>{c.addressDone}</Primary></div>
        </>}
        {step === 'example' && <>
          <div className="mb-5 flex items-start justify-between gap-3"><div><p className="mb-2 text-xs font-bold uppercase text-primary">{service === 'number' ? '02' : '06'} · FORMS</p><h1 className="text-[1.8rem] font-extrabold leading-snug">{c.examples}</h1></div><img src={applicationImage.url} alt="신청서를 들고 안내하는 토더기" className="h-16 w-20 shrink-0 object-contain" /></div>
          <p className="mb-5 text-lg font-semibold leading-snug text-foreground">{c.exampleLead}</p>
          <div className="mb-4 flex items-center gap-3"><span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{docIndex + 1} / {selectedDocs.length}</span><span className="min-w-0 text-lg font-bold leading-snug">{docName(currentDoc)}</span></div>
          <Button variant="paper" size="paper" onClick={openZoom} className="group w-full overflow-hidden" aria-label={`${docName(currentDoc)} ${c.zoom}`}><div className="w-full [container-type:inline-size]"><FormWithLabels doc={currentDoc} language={language} alt={imageAlt} /></div></Button>
          <div className="mt-3 flex flex-wrap gap-2"><Button variant="outline" onClick={openZoom} className="h-11 text-base"><ZoomIn />{c.zoom}</Button></div>
          <div className="mt-8"><Primary onClick={() => { if (docIndex < selectedDocs.length - 1) { setDocIndex(i => i + 1); window.scrollTo({ top: 0, behavior: 'instant' }); } else go('finish'); }}>{docIndex < selectedDocs.length - 1 ? c.nextDoc : c.afterWrite}</Primary></div>
        </>}
        {step === 'finish' && <>
          <p className="mb-2 text-xs font-bold uppercase text-primary">{service === 'number' ? '03' : '07'} · FINAL STEP</p><h1 className="mb-5 mt-16 whitespace-pre-line text-center text-[1.7rem] font-extrabold leading-snug sm:text-[1.9rem]">{c.finishLead}</h1>
          <p className="mt-3 text-center text-base text-muted-foreground">{c.finishNote}</p>
          <div className="my-8 flex items-center justify-center"><img src={counterImage.url} alt="창구 직원에게 안내받는 토더기" className="h-auto max-h-64 w-full object-contain" /></div>
          <Button variant="guide" size="guide" onClick={reset} className="w-full justify-center text-center"><span className="flex items-center gap-2"><RotateCcw aria-hidden="true" />{c.restart}</span></Button>
          <div className="flex-1" />
        </>}
      </main>
    </div>
    {zoomed && <div role="dialog" aria-modal="true" aria-label={`${docName(currentDoc)} ${c.zoom}`} className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="flex items-center justify-between gap-2 border-b border-border bg-card px-4 py-3"><span className="min-w-0 truncate text-base font-bold">{docName(currentDoc)}</span><Button variant="ghost" size="icon" aria-label={c.close} onClick={() => setZoomed(false)}><X /></Button></div>
      <div className="relative flex flex-1 touch-none items-center justify-center overflow-hidden bg-muted" onPointerDown={e => { drag.current = { x: e.clientX, y: e.clientY, startX: offset.x, startY: offset.y }; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if (drag.current) setOffset({ x: drag.current.startX + e.clientX - drag.current.x, y: drag.current.startY + e.clientY - drag.current.y }); }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}><div className="w-[min(100%,calc((100dvh-140px)*0.7077))] [container-type:inline-size]" style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}><FormWithLabels doc={currentDoc} language={language} alt={imageAlt} onDoubleClick={() => { setZoom(z => z >= 3 ? 1 : 2); setOffset({ x: 0, y: 0 }); }} /></div></div>
      <div className="flex items-center justify-center gap-4 border-t border-border bg-card p-3"><Button variant="outline" size="icon" aria-label={c.zoomOut} onClick={() => setZoom(z => Math.max(1, +(z - .5).toFixed(1)))}><ZoomOut /></Button><span className="min-w-14 text-center text-sm font-bold tabular-nums">{Math.round(zoom * 100)}%</span><Button variant="outline" size="icon" aria-label={c.zoomIn} onClick={() => setZoom(z => Math.min(4, +(z + .5).toFixed(1)))}><ZoomIn /></Button></div>
    </div>}
  </div>;
}
