export const languages = ['ko', 'en', 'zh', 'vi', 'uz'] as const;
export type Language = typeof languages[number];
export const languageNames: Record<Language, string> = { ko: '한국어', en: 'English', zh: '中文', vi: 'Tiếng Việt', uz: 'O‘zbek tili' };

const copy = {
  ko: {
    app: '김해시 외국인 자동차 등록 안내 서비스', startTitle: '자동차 등록 안내', language: '언어를 선택해주세요',
    service: '어떤 업무를 하시나요?', transfer: '명의 이전', transferDetail: '차량 소유자를 변경하는 경우', number: '번호 변경', numberDetail: '자동차등록번호를 변경하는 경우',
    visitor: '오늘 누가 함께 방문했나요?', together: '양도인 + 양수인 함께 방문', seller: '양도인만 방문', buyer: '양수인만 방문',
    roleSeller: '양도인 = 차량을 파는 사람', roleBuyer: '양수인 = 차량을 사는 사람',
    sellerNeed: '양수인의 외국인등록증과    \n도장을 준비해주세요', buyerNeed: '양도인의 자동차매도용\n본인서명사실확인서를 준비해주세요', buyerNeedNote: '행정복지센터에서 발급할 수 있어요',
    docsTitle: '작성할 서류', understood: '확인했습니다',
    insurance: '자동차 보험에 가입했나요?', yes: '예', no: '아니오', insuranceNote: '보험 가입 여부는 창구에서 다시 확인해주세요', continue: '계속하기',
    check: '차량의 세금 체납·압류\n여부를 확인하셨나요?', checkSub: '체납과 압류가 없어야 명의 이전이 가능합니다', checkYes: '네, 확인했어요', checkNo: '아니요',
    checkNoteTitle: '세금 체납·압류를 먼저 확인해주세요', checkStep1: '자동차등록원부에서 압류 여부를 확인하세요', checkStep2: '압류가 있다면 해제 여부를 확인한 후 진행하세요', checkHint: '자동차등록원부에서 차량의 압류 등록 여부를 확인할 수 있어요', checkListTitle: '이런 항목을 확인해주세요', checkItems: ['지방세 체납', '자동차세 체납', '경찰 관련 과태료', '주정차 위반 과태료', '고속도로 통행료 미납'],
      address: '양수인의 주소를 정확히 알고있나요?', addressYes: '네, 알고 있어요', addressNo: '아니요',
    addressTitle: '주소를 먼저 확인해주세요', addressBody: '외국인등록사실증명서에서 정확한 주소를 확인해주세요', addressHelp: '행정복지센터 또는 정부24에서 발급할 수 있어요', addressDone: '주소를 확인했어요',
    examples: '신청서 작성 예시', exampleLead: '예시를 보고 신청서를 작성해주세요', original: '신청서 예시',
    zoom: '크게 보기', close: '닫기', zoomIn: '확대', zoomOut: '축소', nextDoc: '다음 서류', afterWrite: '작성 완료',
    finishTitle: '다음 단계 안내', finishLead: '신청서를 모두 작성한 후\n번호표를 뽑아주세요', finishNote: '\n',
    restart: '처음부터 다시 시작', back: '이전',
    transferForm: '이전등록 신청서', certificate: '자동차양도증명서', numberForm: '자동차 변경등록 신청서',
  },
  en: {
    app: 'Gimhae Vehicle Registration Guide', startTitle: 'Vehicle Registration Guide', language: 'Choose your language',
    service: 'What do you need today?', transfer: 'Transfer ownership', transferDetail: 'Change the vehicle owner', number: 'Change vehicle number', numberDetail: 'Change the vehicle registration number',
    visitor: 'Who came today?', together: 'Seller + buyer together', seller: 'Seller only', buyer: 'Buyer only',
    roleSeller: 'Seller = person selling the car', roleBuyer: 'Buyer = person buying the car',
    sellerNeed: 'Bring the buyer’s alien registration card and seal', buyerNeed: 'Bring the Seller’s Signature Verification Certificate for Vehicle Sale', buyerNeedNote: 'Available at a local community service center',
    docsTitle: 'Forms to fill out', understood: 'I understand',
    insurance: 'Is the vehicle insured?', yes: 'Yes', no: 'No', insuranceNote: 'Please confirm insurance at the counter', continue: 'Continue',
    check: 'Have you checked for unpaid taxes or liens on the vehicle?', checkSub: 'Please check before transferring ownership', checkYes: 'Yes, I checked', checkNo: 'No',
    checkNoteTitle: 'Check taxes and liens first', checkStep1: 'Check the vehicle registration record for a lien', checkStep2: 'If there is a lien, confirm it is cleared before you continue', checkHint: 'The vehicle registration record shows whether a lien is registered', checkListTitle: 'Items to check', checkItems: ['Unpaid local taxes', 'Unpaid vehicle tax', 'Police fines', 'Parking fines', 'Unpaid highway tolls'],
    address: 'Do you know the buyer’s registered address?', addressYes: 'Yes, I know it', addressNo: 'No',
    addressTitle: 'Check the address first', addressBody: 'Find it on the Certificate of Alien Registration', addressHelp: 'Issued at a community center or Gov24', addressDone: 'I checked the address',
    examples: 'Form examples', exampleLead: 'Fill out your form using the example', original: 'form example',
    zoom: 'Enlarge', close: 'Close', zoomIn: 'Zoom in', zoomOut: 'Zoom out', nextDoc: 'Next form', afterWrite: 'Done',
    finishTitle: 'Next steps', finishLead: 'Fill out all forms, then take a number ticket', finishNote: 'Then wait to be called at the counter',
    restart: 'Start again', back: 'Back',
    transferForm: 'Transfer registration form', certificate: 'Vehicle transfer certificate', numberForm: 'Registration change form',
  },
  zh: {
    app: '金海市外国人汽车登记指南', startTitle: '汽车登记指南', language: '请选择语言',
    service: '您要办理什么业务？', transfer: '过户', transferDetail: '变更车辆所有人', number: '更换车牌号码', numberDetail: '变更车辆登记号码',
    visitor: '今天谁来办理？', together: '卖方 + 买方一同到场', seller: '仅卖方到场', buyer: '仅买方到场',
    roleSeller: '卖方 = 卖车的人', roleBuyer: '买方 = 买车的人',
    sellerNeed: '请准备买方的外国人登录证和印章', buyerNeed: '请准备卖方车辆出售用签名确认书', buyerNeedNote: '可在行政福利中心办理',
    docsTitle: '需填写的材料', understood: '我知道了',
    insurance: '车辆已投保吗？', yes: '是', no: '否', insuranceNote: '请在窗口再次确认保险情况', continue: '继续',
    check: '您确认过车辆有无欠税或查封吗？', checkSub: '过户前请先确认欠税或查封情况', checkYes: '是，已确认', checkNo: '否',
    checkNoteTitle: '请先确认欠税与查封情况', checkStep1: '请在汽车登记底册确认车辆是否被查封', checkStep2: '如已被查封，请先确认解除后再办理', checkHint: '在汽车登记底册可以查询车辆的查封记录', checkListTitle: '请确认以下项目', checkItems: ['地方税欠税', '汽车税欠税', '警察罚款', '违章停车罚款', '高速公路通行费未缴'],
    address: '您清楚买方的登记地址吗？', addressYes: '是，我知道', addressNo: '不知道',
    addressTitle: '请先确认地址', addressBody: '可在外国人登录事实证明上确认准确地址', addressHelp: '可在行政福利中心或政府24办理', addressDone: '已确认地址',
    examples: '申请表填写示例', exampleLead: '请参照示例填写申请表', original: '申请表示例',
    zoom: '放大查看', close: '关闭', zoomIn: '放大', zoomOut: '缩小', nextDoc: '下一份材料', afterWrite: '填写完成',
    finishTitle: '下一步', finishLead: '填完所有申请表后，请领取号码牌', finishNote: '领取号码后到窗口咨询',
    restart: '重新开始', back: '返回',
    transferForm: '过户登记申请表', certificate: '汽车转让证明书', numberForm: '汽车变更登记申请表',
  },
  vi: {
    app: 'Hướng dẫn đăng ký xe tại Gimhae', startTitle: 'Hướng dẫn đăng ký xe', language: 'Chọn ngôn ngữ',
    service: 'Bạn cần làm thủ tục gì?', transfer: 'Sang tên xe', transferDetail: 'Đổi chủ sở hữu xe', number: 'Đổi số xe', numberDetail: 'Đổi số đăng ký xe',
    visitor: 'Hôm nay ai đến?', together: 'Người bán + người mua', seller: 'Chỉ người bán', buyer: 'Chỉ người mua',
    roleSeller: 'Người bán = người bán xe', roleBuyer: 'Người mua = người mua xe',
    sellerNeed: 'Hãy mang thẻ người nước ngoài và con dấu của người mua', buyerNeed: 'Hãy mang Giấy xác nhận chữ ký của người bán xe', buyerNeedNote: 'Cấp tại trung tâm hành chính phường',
    docsTitle: 'Giấy tờ cần điền', understood: 'Đã hiểu',
    insurance: 'Xe đã có bảo hiểm chưa?', yes: 'Có', no: 'Chưa', insuranceNote: 'Vui lòng xác nhận bảo hiểm tại quầy', continue: 'Tiếp tục',
    check: 'Bạn đã kiểm tra xe có nợ thuế hoặc bị kê biên chưa?', checkSub: 'Hãy kiểm tra trước khi sang tên xe', checkYes: 'Có, đã kiểm tra', checkNo: 'Chưa',
    checkNoteTitle: 'Hãy kiểm tra nợ thuế và kê biên trước', checkStep1: 'Kiểm tra trạng thái kê biên trong sổ đăng ký xe', checkStep2: 'Nếu bị kê biên, hãy xác nhận đã giải trừ rồi mới làm thủ tục', checkHint: 'Sổ đăng ký xe cho biết xe có bị kê biên hay không', checkListTitle: 'Các khoản cần kiểm tra', checkItems: ['Nợ thuế địa phương', 'Nợ thuế xe', 'Tiền phạt công an', 'Tiền phạt đỗ xe', 'Phí cao tốc chưa nộp'],
    address: 'Bạn có biết địa chỉ đăng ký của người mua?', addressYes: 'Có, tôi biết', addressNo: 'Không',
    addressTitle: 'Hãy kiểm tra địa chỉ trước', addressBody: 'Xem địa chỉ trên Giấy xác nhận đăng ký người nước ngoài', addressHelp: 'Cấp tại trung tâm hành chính hoặc Gov24', addressDone: 'Đã kiểm tra địa chỉ',
    examples: 'Mẫu điền đơn', exampleLead: 'Điền đơn theo mẫu', original: 'mẫu đơn',
    zoom: 'Xem lớn', close: 'Đóng', zoomIn: 'Phóng to', zoomOut: 'Thu nhỏ', nextDoc: 'Giấy tờ tiếp theo', afterWrite: 'Đã điền xong',
    finishTitle: 'Bước tiếp theo', finishLead: 'Điền xong tất cả đơn rồi lấy số thứ tự', finishNote: 'Sau đó chờ gọi tại quầy',
    restart: 'Bắt đầu lại', back: 'Quay lại',
    transferForm: 'Đơn đăng ký sang tên', certificate: 'Giấy chuyển nhượng xe', numberForm: 'Đơn thay đổi đăng ký xe',
  },
  uz: {
    app: 'Gimhae avtomobil ro‘yxati yo‘riqnomasi', startTitle: 'Avtomobil ro‘yxati', language: 'Tilni tanlang',
    service: 'Qaysi xizmat kerak?', transfer: 'Egasini o‘zgartirish', transferDetail: 'Avtomobil egasini o‘zgartirish', number: 'Raqamni o‘zgartirish', numberDetail: 'Ro‘yxat raqamini o‘zgartirish',
    visitor: 'Bugun kim keldi?', together: 'Sotuvchi + xaridor', seller: 'Faqat sotuvchi', buyer: 'Faqat xaridor',
    roleSeller: 'Sotuvchi = mashinani sotuvchi', roleBuyer: 'Xaridor = mashinani oluvchi',
    sellerNeed: 'Xaridorning ID kartasi va muhrini olib keling', buyerNeed: 'Avtomobil sotuvchining imzosini tasdiqlovchi hujjatni olib keling', buyerNeedNote: 'Mahalliy xizmat markazida beriladi',
    docsTitle: 'To‘ldiriladigan hujjatlar', understood: 'Tushundim',
    insurance: 'Avtomobil sug‘urtalanganmi?', yes: 'Ha', no: 'Yo‘q', insuranceNote: 'Sug‘urtani xizmat oynasida tasdiqlang', continue: 'Davom etish',
    check: 'Avtomobilda soliq qarzi yoki muxr borligini tekshirdingizmi?', checkSub: 'Egalikni o‘zgartirishdan oldin tekshiring', checkYes: 'Ha, tekshirdim', checkNo: 'Yo‘q',
    checkNoteTitle: 'Avval qarz va muxrni tekshiring', checkStep1: 'Avtomobil ro‘yxat hujjatida muxr bor-yo‘qligini tekshiring', checkStep2: 'Muxr bo‘lsa, olib tashlanganini tasdiqlab keyin davom eting', checkHint: 'Avtomobil ro‘yxat hujjatida muxr qayd etilganini tekshirish mumkin', checkListTitle: 'Tekshirish kerak bo‘lgan turlar', checkItems: ['Mahalliy soliq qarzi', 'Transport soligi qarzi', 'Politsiya jarimasi', 'Notog‘ri to‘xtash jarimasi', 'To‘lanmagan avtomagistral to‘lovi'],
    address: 'Xaridorning ro‘yxatdagi manzilini bilasizmi?', addressYes: 'Ha, bilaman', addressNo: 'Yo‘q',
    addressTitle: 'Avval manzilni tekshiring', addressBody: 'Manzil chet ellik ro‘yxat ma’lumotnomasida bor', addressHelp: 'Xizmat markazi yoki Gov24 orqali olinadi', addressDone: 'Manzilni tekshirdim',
    examples: 'Ariza namunalari', exampleLead: 'Namunaga qarab arizani to‘ldiring', original: 'ariza namunasi',
    zoom: 'Kattalashtirish', close: 'Yopish', zoomIn: 'Kattalashtirish', zoomOut: 'Kichraytirish', nextDoc: 'Keyingi hujjat', afterWrite: 'To‘ldirdim',
    finishTitle: 'Keyingi qadam', finishLead: 'Arizalarni to‘ldirib, navbat raqamini oling', finishNote: 'So‘ng xizmat oynasida kuting',
    restart: 'Qayta boshlash', back: 'Orqaga',
    transferForm: 'Egalikni o‘tkazish arizasi', certificate: 'Avtomobil topshirish guvohnomasi', numberForm: 'Ro‘yxatni o‘zgartirish arizasi',
  },
} as const;
export const t = (lang: Language) => copy[lang];
export type CopyKey = keyof typeof copy.ko;

// Translations for fields the user highlighted on the supplied forms. Order: ko, en, zh, vi, uz.
export const fieldLabels = {
  name: ['성명', 'Name', '姓名', 'Họ tên', 'Ism-familiya'],
  id: ['주민등록번호', 'ID Number', '身份号码', 'Số định danh', 'ID raqami'],
  address: ['주소', 'Address', '地址', 'Địa chỉ', 'Manzil'],
  phone: ['전화번호', 'Phone Number', '电话号码', 'Số điện thoại', 'Telefon raqami'],
  mobile: ['휴대전화번호', 'Mobile Number', '手机号码', 'Số di động', 'Mobil raqam'],
  plate: ['자동차번호', 'Vehicle Number', '车牌号码', 'Biển số xe', 'Avtomobil raqami'],
  mileage: ['주행거리', 'Mileage (km)', '行驶里程', 'Số km đã đi', 'Yurgan masofa'],
  applicant: ['신청인', 'Applicant', '申请人', 'Người nộp đơn', 'Arizachi'],
  sign: ['서명 또는 인', 'Sign/Seal', '签名/盖章', 'Ký/đóng dấu', 'Imzo/muhr'],
  seal: ['도장날인', 'Seal', '盖章', 'Đóng dấu', 'Muhr'],
  birth: ['생년월일', 'Date of Birth', '出生日期', 'Ngày sinh', 'Tug‘ilgan sana'],
  saleDate: ['매매일', 'Sale Date', '买卖日期', 'Ngày bán', 'Sotilgan sana'],
  seller: ['양도인', 'Seller', '卖方', 'Người bán', 'Sotuvchi'],
  buyer: ['양수인', 'Buyer', '买方', 'Người mua', 'Xaridor'],
  owner: ['소유자', 'Owner', '车主', 'Chủ xe', 'Egasi'],
  car: ['자동차', 'Vehicle', '车辆', 'Xe', 'Avtomobil'],
} as const;
export type FieldKey = keyof typeof fieldLabels;
export const fieldText = (field: FieldKey, lang: Language) => fieldLabels[field]?.[languages.indexOf(lang)] ?? fieldLabels[field]?.[0] ?? '';

export type DocumentKey = 'transferBoth' | 'transferSeller' | 'certificate' | 'numberForm';
export const documentTitle: Record<DocumentKey, CopyKey> = { transferBoth: 'transferForm', transferSeller: 'transferForm', certificate: 'certificate', numberForm: 'numberForm' };
/** Label anchors on the 920x1300 preview images, placed in blank space beside each highlighted field. a='l': label ends at x. */
export type FieldMarker = { f: FieldKey; x: number; y: number; a?: 'l' | 'r' };
export const previewSize = { w: 920, h: 1300 };
const transferCommon: FieldMarker[] = [
  { f: 'seller', x: 60, y: 260 }, { f: 'name', x: 215, y: 196 }, { f: 'id', x: 537, y: 216 }, { f: 'address', x: 275, y: 240 },
  { f: 'buyer', x: 60, y: 425 }, { f: 'name', x: 215, y: 330 }, { f: 'id', x: 537, y: 350 }, { f: 'address', x: 275, y: 382 }, { f: 'mobile', x: 537, y: 452 },
  { f: 'plate', x: 168, y: 526 }, { f: 'mileage', x: 390, y: 526 },
  { f: 'applicant', x: 371, y: 707, a: 'l' }, { f: 'name', x: 464, y: 707 }, { f: 'sign', x: 721, y: 707, a: 'l' }, { f: 'birth', x: 492, y: 739 },
];
export const documentFields: Record<DocumentKey, FieldMarker[]> = {
  transferBoth: transferCommon,
  transferSeller: [...transferCommon,
    { f: 'buyer', x: 540, y: 838 }, { f: 'name', x: 380, y: 951 }, { f: 'seal', x: 628, y: 951 }, { f: 'id', x: 380, y: 985 }, { f: 'address', x: 380, y: 1018 },
  ],
  certificate: [
    { f: 'seller', x: 98, y: 212 }, { f: 'name', x: 232, y: 140 }, { f: 'id', x: 672, y: 140 }, { f: 'phone', x: 225, y: 167 }, { f: 'address', x: 197, y: 197 },
    { f: 'buyer', x: 98, y: 345 }, { f: 'name', x: 232, y: 273 }, { f: 'id', x: 672, y: 273 }, { f: 'phone', x: 225, y: 303 }, { f: 'address', x: 197, y: 334 },
    { f: 'plate', x: 266, y: 459 }, { f: 'saleDate', x: 595, y: 490 }, { f: 'mileage', x: 609, y: 552 },
    { f: 'seller', x: 170, y: 953 }, { f: 'sign', x: 343, y: 928 }, { f: 'buyer', x: 548, y: 953 }, { f: 'sign', x: 766, y: 953, a: 'l' },
  ],
  numberForm: [
    { f: 'owner', x: 102, y: 327 }, { f: 'name', x: 262, y: 227 }, { f: 'id', x: 517, y: 248 }, { f: 'address', x: 226, y: 288 }, { f: 'mobile', x: 517, y: 368 },
    { f: 'car', x: 102, y: 480 }, { f: 'plate', x: 262, y: 411 },
    { f: 'applicant', x: 334, y: 796, a: 'l' }, { f: 'name', x: 427, y: 796 }, { f: 'sign', x: 750, y: 806, a: 'l' },
  ],
};
