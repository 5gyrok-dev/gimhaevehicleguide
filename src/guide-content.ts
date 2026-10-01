export const languages = ['ko', 'en', 'zh', 'vi', 'uz'] as const;
export type Language = typeof languages[number];
export const languageNames: Record<Language, string> = { ko: '한국어', en: 'English', zh: '中文', vi: 'Tiếng Việt', uz: 'O‘zbek tili' };

const copy = {
  ko: {
    app: '김해시 외국인 차량등록 안내', startTitle: '차량등록 안내', startLead: '신청서 작성 전 간단히 확인하세요.', startNote: '차량등록 신청서 작성 전 간단한 안내를 제공합니다.', start: '시작하기', language: '언어를 선택해주세요', service: '어떤 업무를 하시나요?', transfer: '명의 이전', transferDetail: '차량 소유자를 변경하는 경우', number: '번호 변경', numberDetail: '자동차등록번호를 변경하는 경우', visitor: '오늘 누가 함께 방문했나요?', together: '양도인과 양수인이 함께 방문', seller: '양도인만 방문', buyer: '양수인만 방문', roles: '양도인 = 차량을 파는 사람 · 양수인 = 차량을 사는 사람', sellerNeed: '양수인의 외국인등록증과 도장을 준비해주세요.', sellerDocs: '작성할 서류', buyerNeed: '양도인의 자동차 매도용 본인서명사실확인서를 준비해주세요.', buyerNote: '서류를 준비한 뒤 신청서 작성 안내를 계속 진행해주세요.', understood: '확인했습니다', insurance: '자동차 보험에 가입했나요?', yes: '예', no: '아니오', insuranceNote: '보험 가입 여부는 창구에서 다시 확인해주세요.', insuranceDisclaimer: '이 안내에서는 실제 보험 상태를 조회하거나 처리 가능 여부를 판단하지 않습니다.', continue: '계속하기', examples: '신청서 작성 예시', exampleLead: '예시를 참고하여 신청서를 작성해주세요.', docs: '확인할 서류', fieldGuide: '분홍색 표시 항목 안내', original: '원본 신청서 보기', zoom: '크게 보기', close: '닫기', zoomIn: '확대', zoomOut: '축소', nextDoc: '다음 서류', afterWrite: '작성 후 다음', write: '신청서 작성', writeLead: '예시를 참고하여 종이 신청서를 작성해주세요.', writeNext: '작성 후 다음', finishTitle: '다음 단계 안내', finishLead: '신청서 예시를 참고하여 신청서를 모두 작성하신 후 번호표를 뽑아주세요.', finishNote: '신청서 작성을 완료한 뒤 번호표를 뽑고 창구에서 안내를 받아주세요.', stepExample: '신청서 예시 확인', stepWrite: '신청서 작성 완료', stepTicket: '번호표 발급', stepCounter: '창구 방문', restart: '처음부터 다시 시작', back: '이전', openPdf: '원본 PDF 열기', page: '장',
    transferForm: '이전등록 신청서', certificate: '자동차양도증명서', power: '위임장', numberForm: '자동차 변경등록 신청서',
  },
  en: {
    app: 'Gimhae Vehicle Registration Guide', startTitle: 'Vehicle registration guide', startLead: 'A quick check before filling out forms.', startNote: 'A short guide before filling out your vehicle registration forms.', start: 'Start', language: 'Choose your language', service: 'What would you like to do?', transfer: 'Transfer ownership', transferDetail: 'Change the owner of a vehicle', number: 'Change registration number', numberDetail: 'Change the vehicle registration number', visitor: 'Who is here today?', together: 'Seller and buyer together', seller: 'Seller only', buyer: 'Buyer only', roles: 'Seller = person selling the car · Buyer = person buying the car', sellerNeed: 'Please prepare the buyer’s alien registration card and seal.', sellerDocs: 'Forms to complete', buyerNeed: 'Please prepare the seller’s Certificate of Personal Signature for Vehicle Sale.', buyerNote: 'Prepare this document, then continue to the form guide.', understood: 'I understand', insurance: 'Do you have vehicle insurance?', yes: 'Yes', no: 'No', insuranceNote: 'Please check your insurance status again at the counter.', insuranceDisclaimer: 'This guide does not check insurance or determine eligibility.', continue: 'Continue', examples: 'Form examples', exampleLead: 'Fill out your form using this example.', docs: 'Forms to review', fieldGuide: 'Pink-highlighted fields', original: 'View original form', zoom: 'Enlarge', close: 'Close', zoomIn: 'Zoom in', zoomOut: 'Zoom out', nextDoc: 'Next form', afterWrite: 'Next after filling in', write: 'Fill out the form', writeLead: 'Use the example to fill out the paper form.', writeNext: 'Next after filling in', finishTitle: 'Next steps', finishLead: 'Complete the forms using the examples, then take a queue ticket.', finishNote: 'Once your forms are complete, take a ticket and speak to staff at the counter.', stepExample: 'Review examples', stepWrite: 'Complete forms', stepTicket: 'Take a ticket', stepCounter: 'Visit the counter', restart: 'Start again', back: 'Back', openPdf: 'Open original PDF', page: 'page', transferForm: 'Transfer registration application', certificate: 'Vehicle transfer certificate', power: 'Power of attorney', numberForm: 'Vehicle registration change application',
  },
  zh: {
    app: '金海市外国人车辆登记指南', startTitle: '车辆登记指南', startLead: '选择语言，查看所需指南。', startNote: '填写车辆登记申请表前的简要指南。', start: '开始', language: '请选择语言', service: '您要办理什么业务？', transfer: '所有权转移', transferDetail: '变更车辆所有人', number: '更换号码', numberDetail: '变更车辆登记号码', visitor: '今天谁来办理？', together: '卖方和买方一同到场', seller: '只有卖方到场', buyer: '只有买方到场', roles: '卖方 = 卖车的人 · 买方 = 买车的人', sellerNeed: '请准备买方的外国人登录证和印章。', sellerDocs: '需填写的材料', buyerNeed: '请准备卖方的汽车出售用本人签名事实确认书。', buyerNote: '备齐材料后继续查看申请表填写指南。', understood: '我知道了', insurance: '车辆已投保吗？', yes: '是', no: '否', insuranceNote: '请在窗口再次确认保险情况。', insuranceDisclaimer: '本指南不查询保险状态，也不判断是否可以办理。', continue: '继续', examples: '申请表填写示例', exampleLead: '请参考示例填写申请表。', docs: '需要查看的材料', fieldGuide: '粉色标注项目说明', original: '查看原版申请表', zoom: '放大查看', close: '关闭', zoomIn: '放大', zoomOut: '缩小', nextDoc: '下一份材料', afterWrite: '填写后继续', write: '填写申请表', writeLead: '请参考示例填写纸质申请表。', writeNext: '填写后继续', finishTitle: '下一步', finishLead: '参照示例填完申请表后，请领取排队号码。', finishNote: '完成填写后领取号码，并到窗口咨询工作人员。', stepExample: '查看示例', stepWrite: '填写申请表', stepTicket: '领取号码', stepCounter: '前往窗口', restart: '重新开始', back: '返回', openPdf: '打开原版 PDF', page: '页', transferForm: '转移登记申请表', certificate: '汽车转让证明书', power: '委托书', numberForm: '汽车变更登记申请表',
  },
  vi: {
    app: 'Hướng dẫn đăng ký xe cho người nước ngoài tại Gimhae', startTitle: 'Hướng dẫn đăng ký xe', startLead: 'Chọn ngôn ngữ và xem hướng dẫn cần thiết.', startNote: 'Hướng dẫn ngắn trước khi điền đơn đăng ký xe.', start: 'Bắt đầu', language: 'Chọn ngôn ngữ', service: 'Bạn cần làm thủ tục gì?', transfer: 'Sang tên xe', transferDetail: 'Thay đổi chủ sở hữu xe', number: 'Đổi số đăng ký xe', numberDetail: 'Đổi số đăng ký của xe', visitor: 'Hôm nay ai đến làm thủ tục?', together: 'Người bán và người mua cùng đến', seller: 'Chỉ người bán đến', buyer: 'Chỉ người mua đến', roles: 'Người bán = người bán xe · Người mua = người mua xe', sellerNeed: 'Vui lòng chuẩn bị thẻ đăng ký người nước ngoài và con dấu của người mua.', sellerDocs: 'Giấy tờ cần điền', buyerNeed: 'Vui lòng chuẩn bị Giấy xác nhận chữ ký cá nhân dùng để bán xe của người bán.', buyerNote: 'Chuẩn bị giấy tờ rồi tiếp tục xem hướng dẫn điền đơn.', understood: 'Đã hiểu', insurance: 'Xe đã có bảo hiểm chưa?', yes: 'Có', no: 'Chưa', insuranceNote: 'Vui lòng kiểm tra lại tình trạng bảo hiểm tại quầy.', insuranceDisclaimer: 'Hướng dẫn này không kiểm tra bảo hiểm hoặc quyết định khả năng xử lý hồ sơ.', continue: 'Tiếp tục', examples: 'Mẫu điền đơn', exampleLead: 'Điền đơn theo mẫu này.', docs: 'Giấy tờ cần xem', fieldGuide: 'Các mục được tô màu hồng', original: 'Xem đơn gốc', zoom: 'Xem lớn', close: 'Đóng', zoomIn: 'Phóng to', zoomOut: 'Thu nhỏ', nextDoc: 'Giấy tờ tiếp theo', afterWrite: 'Tiếp tục sau khi điền', write: 'Điền đơn', writeLead: 'Dựa vào mẫu để điền đơn trên giấy.', writeNext: 'Tiếp tục sau khi điền', finishTitle: 'Bước tiếp theo', finishLead: 'Điền đầy đủ đơn theo mẫu rồi lấy số thứ tự.', finishNote: 'Sau khi điền xong, lấy số và đến quầy để được hướng dẫn.', stepExample: 'Xem mẫu', stepWrite: 'Điền đơn', stepTicket: 'Lấy số', stepCounter: 'Đến quầy', restart: 'Bắt đầu lại', back: 'Quay lại', openPdf: 'Mở PDF gốc', page: 'trang', transferForm: 'Đơn đăng ký sang tên', certificate: 'Giấy chứng nhận chuyển nhượng xe', power: 'Giấy ủy quyền', numberForm: 'Đơn thay đổi đăng ký xe',
  },
  uz: {
    app: 'Gimhae xorijliklar uchun avtomobilni ro‘yxatdan o‘tkazish yo‘riqnomasi', startTitle: 'Avtomobilni ro‘yxatdan o‘tkazish', startLead: 'Tilni tanlang va kerakli ko‘rsatmalarni ko‘ring.', startNote: 'Arizani to‘ldirishdan oldin qisqa yo‘riqnoma.', start: 'Boshlash', language: 'Tilni tanlang', service: 'Qaysi xizmat kerak?', transfer: 'Egalik huquqini o‘tkazish', transferDetail: 'Avtomobil egasini o‘zgartirish', number: 'Raqamni o‘zgartirish', numberDetail: 'Avtomobil ro‘yxat raqamini o‘zgartirish', visitor: 'Bugun kim keldi?', together: 'Sotuvchi va xaridor birga', seller: 'Faqat sotuvchi', buyer: 'Faqat xaridor', roles: 'Sotuvchi = mashinani sotayotgan shaxs · Xaridor = sotib olayotgan shaxs', sellerNeed: 'Xaridorning chet ellik guvohnomasi va muhrini tayyorlang.', sellerDocs: 'To‘ldiriladigan hujjatlar', buyerNeed: 'Sotuvchining avtomobil sotishga oid shaxsiy imzosi tasdiqnomasini tayyorlang.', buyerNote: 'Hujjatni tayyorlab, ariza yo‘riqnomasiga o‘ting.', understood: 'Tushundim', insurance: 'Avtomobil sug‘urtalanganmi?', yes: 'Ha', no: 'Yo‘q', insuranceNote: 'Sug‘urta holatini xizmat oynasida qayta tekshiring.', insuranceDisclaimer: 'Bu yo‘riqnoma sug‘urtani tekshirmaydi yoki ruxsat etilishini aniqlamaydi.', continue: 'Davom etish', examples: 'Ariza namunalari', exampleLead: 'Namunaga qarab arizani to‘ldiring.', docs: 'Ko‘riladigan hujjatlar', fieldGuide: 'Pushti bilan belgilangan joylar', original: 'Asl arizani ko‘rish', zoom: 'Kattalashtirish', close: 'Yopish', zoomIn: 'Kattalashtirish', zoomOut: 'Kichraytirish', nextDoc: 'Keyingi hujjat', afterWrite: 'To‘ldirgach davom etish', write: 'Arizani to‘ldirish', writeLead: 'Namunaga qarab qog‘oz arizani to‘ldiring.', writeNext: 'To‘ldirgach davom etish', finishTitle: 'Keyingi qadam', finishLead: 'Namunaga qarab arizalarni to‘ldiring, so‘ng navbat raqamini oling.', finishNote: 'Arizalarni to‘ldirgach, raqam olib xizmat oynasiga boring.', stepExample: 'Namunani ko‘rish', stepWrite: 'Arizani to‘ldirish', stepTicket: 'Raqam olish', stepCounter: 'Xizmat oynasiga borish', restart: 'Qayta boshlash', back: 'Orqaga', openPdf: 'Asl PDFni ochish', page: 'sahifa', transferForm: 'Egalikni o‘tkazish arizasi', certificate: 'Avtomobilni topshirish guvohnomasi', power: 'Ishonchnoma', numberForm: 'Ro‘yxatni o‘zgartirish arizasi',
  },
} as const;
export const t = (lang: Language) => copy[lang];
export type CopyKey = keyof typeof copy.ko;

// Only fields highlighted pink in the supplied examples are translated here.
export const fieldLabels = {
  name: ['성명(명칭)', 'Name', '姓名', 'Họ tên', 'Ism'],
  id: ['주민등록번호(법인등록번호)', 'Registration No.', '登记号码', 'Số đăng ký cư trú', 'Ro‘yxat raqami'],
  base: ['사용 본거지(차고지)', 'Address', '地址', 'Địa chỉ', 'Manzil'],
  corpId: ['주민(법인)등록번호', 'Registration No.', '登记号码', 'Số đăng ký', 'Ro‘yxat raqami'],
  plate: ['자동차등록번호', 'Vehicle Registration Number', '车辆登记号码', 'Số đăng ký xe', 'Avtomobil ro‘yxat raqami'],
  mileage: ['주행거리', 'Mileage', '行驶里程', 'Số km đã đi', 'Bosib o‘tilgan masofa'],
  applicant: ['신청인 성명', 'Applicant Name', '申请人姓名', 'Người nộp đơn', 'Arizachi ismi'],
  sign: ['(서명 또는 인)', 'Sign/Seal', '签名/盖章', 'Ký/đóng dấu', 'Imzo/muhr'],
  birth: ['생년월일', 'Date of Birth', '出生日期', 'Ngày sinh', 'Tug‘ilgan sana'],
  seller: ['양도인', 'Seller', '转让人（卖方）', 'Người chuyển nhượng (người bán)', 'Sotuvchi'],
  buyer: ['양수인', 'Buyer', '受让人（买方）', 'Người nhận chuyển nhượng (người mua)', 'Xaridor'],
  saleDate: ['매매일', 'Date of Sale', '买卖日期', 'Ngày mua bán', 'Sotuv sanasi'],
  sellerRep: ['양도인 (대표)', 'Seller (Rep.)', '转让人（代表）', 'Người bán (đại diện)', 'Sotuvchi (vakil)'],
  buyerRep: ['양수인 (대표)', 'Buyer (Rep.)', '受让人（代表）', 'Người mua (đại diện)', 'Xaridor (vakil)'],
  delegator: ['위임하는 사람', 'Person Granting Authority', '委托人', 'Người ủy quyền', 'Vakolat beruvchi'],
  delegate: ['위임받는 사람', 'Authorized Person', '受委托人', 'Người được ủy quyền', 'Vakolat oluvchi'],
  simpleName: ['이름', 'Name', '姓名', 'Họ tên', 'Ism'],
  address: ['주소', 'Address', '地址', 'Địa chỉ', 'Manzil'],
  phone: ['전화번호', 'Phone Number', '电话号码', 'Số điện thoại', 'Telefon raqami'],
  owner: ['소유자', 'Owner', '所有人', 'Chủ sở hữu', 'Egasi'],
  residentId: ['주민등록번호', 'Resident Registration Number', '居民登记号码', 'Số đăng ký cư trú', 'Rezident ro‘yxat raqami'],
  car: ['자동차', 'Vehicle', '汽车', 'Xe ô tô', 'Avtomobil'],
  registrationNumber: ['등록 번호', 'Registration Number', '登记号码', 'Số đăng ký', 'Ro‘yxat raqami'],
  mobile: ['(휴대)전화번호', '(Mobile) Phone Number', '（手机）电话号码', 'Số điện thoại (di động)', '(Mobil) telefon raqami'],
} as const;
export type FieldKey = keyof typeof fieldLabels;
export const fieldText = (field: FieldKey, lang: Language) => fieldLabels[field][languages.indexOf(lang)];

export type DocumentKey = 'transferForm' | 'certificate' | 'power' | 'numberForm';
/** Pink field markers on the 920x1300 preview images. x/y = pixel anchor; a = 'r' chip starts at x, 'l' chip ends at x. */
export type FieldMarker = { f: FieldKey; x: number; y: number; a?: 'l' | 'r' };
export const previewSize = { w: 920, h: 1300 };
export const documentFields: Record<DocumentKey, FieldMarker[]> = {
  transferForm: [
    { f: 'name', x: 254, y: 239 }, { f: 'id', x: 602, y: 239, a: 'l' }, { f: 'base', x: 312, y: 298 },
    { f: 'name', x: 250, y: 360 }, { f: 'id', x: 683, y: 360 }, { f: 'base', x: 316, y: 425 },
    { f: 'plate', x: 96, y: 577 }, { f: 'mileage', x: 407, y: 556 },
    { f: 'applicant', x: 342, y: 815, a: 'l' }, { f: 'sign', x: 747, y: 830, a: 'l' }, { f: 'birth', x: 397, y: 861, a: 'l' },
  ],
  certificate: [
    { f: 'seller', x: 112, y: 228 }, { f: 'name', x: 238, y: 182 }, { f: 'phone', x: 238, y: 203 }, { f: 'address', x: 202, y: 225 }, { f: 'corpId', x: 640, y: 182 },
    { f: 'buyer', x: 112, y: 339 }, { f: 'name', x: 243, y: 292 }, { f: 'phone', x: 238, y: 314 }, { f: 'address', x: 202, y: 336 }, { f: 'corpId', x: 640, y: 292 },
    { f: 'plate', x: 278, y: 425 }, { f: 'saleDate', x: 563, y: 447 }, { f: 'mileage', x: 577, y: 492 },
    { f: 'sellerRep', x: 196, y: 944 }, { f: 'sign', x: 346, y: 926 }, { f: 'buyerRep', x: 533, y: 944 }, { f: 'sign', x: 707, y: 947, a: 'l' },
  ],
  power: [
    { f: 'delegator', x: 96, y: 296 }, { f: 'simpleName', x: 211, y: 212 }, { f: 'birth', x: 630, y: 212 }, { f: 'address', x: 211, y: 273 }, { f: 'phone', x: 630, y: 273 },
    { f: 'delegate', x: 96, y: 492 }, { f: 'simpleName', x: 211, y: 340 }, { f: 'birth', x: 630, y: 340 }, { f: 'phone', x: 630, y: 401 }, { f: 'address', x: 211, y: 462 },
    { f: 'delegator', x: 352, y: 899, a: 'l' }, { f: 'sign', x: 679, y: 878 },
  ],
  numberForm: [
    { f: 'owner', x: 100, y: 327 }, { f: 'name', x: 255, y: 227 }, { f: 'residentId', x: 514, y: 248 }, { f: 'address', x: 223, y: 288 }, { f: 'mobile', x: 514, y: 368 },
    { f: 'car', x: 100, y: 480 }, { f: 'registrationNumber', x: 260, y: 411 }, { f: 'plate', x: 560, y: 600 },
    { f: 'applicant', x: 334, y: 796, a: 'l' }, { f: 'sign', x: 747, y: 806, a: 'l' },
  ],
};
