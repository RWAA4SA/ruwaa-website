export type ProjectImage = { src: string; span: number };

export type Project = {
  id: string;
  title: string;
  titleEn: string;
  cat: string;
  catEn: "Hospitality" | "Residential" | "Commercial";
  year: string;
  location: string;
  area: string;
  units: string;
  cover: string;
  summary: string;
  role: string;
  images: ProjectImage[];
};

export const PROJECTS: Project[] = [
  {
    id: "almond-resort",
    title: "منتجع اللوز",
    titleEn: "Almond Resort",
    cat: "ضيافة",
    catEn: "Hospitality",
    year: "٢٠٢٤",
    location: "جدة",
    area: "٢٤٠٠ م²",
    units: "٣٢ غرفة",
    cover: "/assets/portfolio/07.png",
    summary:
      "منتجع متوسط الحجم يستلهم خامته من الحجر الجيري والأخشاب الفاتحة، مع لمسات نباتية حية تذيب الحدود بين الداخل والخارج.",
    role: "تصميم داخلي شامل، اختيار خامات، إعداد مخططات تنفيذية",
    images: [
      { src: "/assets/portfolio/07.png", span: 12 },
      { src: "/assets/portfolio/08.png", span: 6 },
      { src: "/assets/portfolio/02.png", span: 6 },
    ],
  },
  {
    id: "villa-marble",
    title: "فيلا المرمر",
    titleEn: "Marble Villa",
    cat: "سكني خاص",
    catEn: "Residential",
    year: "٢٠٢٥",
    location: "جدة",
    area: "٦٢٠ م²",
    units: "فيلا واحدة",
    cover: "/assets/portfolio/05.png",
    summary:
      "إعادة هندسة مساحات فيلا حديثة بلغة بصرية هادئة من المرمر والخشب الطبيعي، مع تركيز على الإضاءة الخفية والإيقاع الرأسي.",
    role: "تصميم داخلي، اختيار تأثيث، مخططات تنفيذية",
    images: [
      { src: "/assets/portfolio/05.png", span: 12 },
      { src: "/assets/portfolio/02.png", span: 7 },
      { src: "/assets/portfolio/06.png", span: 5 },
      { src: "/assets/portfolio/03.png", span: 6 },
      { src: "/assets/portfolio/shot-04.png", span: 6 },
    ],
  },
  {
    id: "majlis-najd",
    title: "مجلس نجد",
    titleEn: "Najd Majlis",
    cat: "ضيافة محلية",
    catEn: "Hospitality",
    year: "٢٠٢٥",
    location: "المدينة المنورة",
    area: "٣٢٠ م²",
    units: "مجلسان",
    cover: "/assets/portfolio/final-55.png",
    summary:
      "مجلس عائلي بطابع جزيري معاصر، يجمع بين النخيل الحقيقي وقبة سقفية متحررة من القوالب، مع أرضية خضراء تستحضر الواحة.",
    role: "هوية مكانية، تصميم سقف، تنسيق مناظر داخلية",
    images: [
      { src: "/assets/portfolio/final-55.png", span: 12 },
      { src: "/assets/portfolio/shot-01.png", span: 6 },
      { src: "/assets/portfolio/final-66.png", span: 6 },
    ],
  },
  {
    id: "grand-tower",
    title: "البرج المركزي",
    titleEn: "Central Tower",
    cat: "تجاري / مكاتب",
    catEn: "Commercial",
    year: "٢٠٢٤",
    location: "جدة",
    area: "٤٨٠٠ م²",
    units: "١٢ طابقاً",
    cover: "/assets/portfolio/shot-04.png",
    summary:
      "إعادة تصميم لوبي ومناطق إدارية في برج مكاتب، باستخدام إضاءة خطية وألواح خشبية مضيئة تخلق هوية بصرية موحدة عبر الطوابق.",
    role: "تصميم لوبي، تصميم مكاتب تنفيذية، توحيد هوية بصرية",
    images: [
      { src: "/assets/portfolio/shot-04.png", span: 12 },
      { src: "/assets/portfolio/shot-09.png", span: 6 },
      { src: "/assets/portfolio/01.png", span: 6 },
    ],
  },
  {
    id: "boutique-kitchen",
    title: "مطبخ مشاري",
    titleEn: "Mishari Kitchen",
    cat: "سكني خاص",
    catEn: "Residential",
    year: "٢٠٢٥",
    location: "المدينة المنورة",
    area: "٤٢ م²",
    units: "مطبخ مفتوح",
    cover: "/assets/portfolio/shot-03.png",
    summary:
      "مطبخ مفتوح بإضاءة بيضاوية ودهانات بنية، يوازن بين الدفء العائلي والصرامة المعمارية في تفاصيل الخزائن المعدنية.",
    role: "تصميم مطبخ، اختيار خامات، مخططات نجارة",
    images: [
      { src: "/assets/portfolio/shot-03.png", span: 12 },
      { src: "/assets/portfolio/03.png", span: 6 },
      { src: "/assets/portfolio/06.png", span: 6 },
    ],
  },
  {
    id: "wellness-spa",
    title: "جناح العافية",
    titleEn: "Wellness Wing",
    cat: "ضيافة",
    catEn: "Hospitality",
    year: "٢٠٢٤",
    location: "جدة",
    area: "٩٦٠ م²",
    units: "٨ غرف علاج",
    cover: "/assets/portfolio/08.png",
    summary:
      "جناح عافية ضمن منتجع متكامل، يستخدم الحجر الطبيعي والخشب الناعم لخلق حالة من الهدوء والخصوصية في كل غرفة علاج.",
    role: "تصميم غرف علاج، اختيار إنارة، تنسيق نباتي",
    images: [
      { src: "/assets/portfolio/08.png", span: 12 },
      { src: "/assets/portfolio/shot-04.png", span: 6 },
      { src: "/assets/portfolio/02.png", span: 6 },
    ],
  },
];

export const COMPANY_SERVICES = [
  { n: "01", t: "أبراج ومجمعات سكنية", d: "تصميم داخلي للوبيات، صالات، شقق نموذجية، ومناطق خدمية للمشاريع متعددة الوحدات." },
  { n: "02", t: "فنادق ومنتجعات", d: "هوية مكانية متكاملة من اللوبي إلى الأجنحة، برؤية تصميمية تحترم متطلبات إدارة الفندق." },
  { n: "03", t: "مكاتب وأبراج تجارية", d: "بيئات عمل تعكس ثقافة الشركة، مع مرونة تشغيلية وتصميم يدعم الإنتاجية والاجتماعات." },
  { n: "04", t: "مشاريع التطوير العقاري", d: "شراكة طويلة مع المطورين منذ المخطط الهيكلي وحتى ملف التصميم النهائي لكل وحدة." },
  { n: "05", t: "وحدات نموذجية ومعارض", d: "تصميم وحدات بيع جذابة بصرياً ومدروسة وظيفياً لتسريع وتيرة المبيعات." },
  { n: "06", t: "إعادة تأهيل المباني", d: "تجديد مساحات قائمة لرفع كفاءتها التشغيلية وقيمتها السوقية دون توقف العمل." },
];

export type IndividualPackage = {
  featured?: boolean;
  badge?: string;
  title: string;
  desc: string;
  price: string;
  unit: string;
  list: string[];
};

export const INDIVIDUAL_PACKAGES: IndividualPackage[] = [
  {
    title: "غرفة واحدة",
    desc: "خطة تصميم لمساحة واحدة — صالة، مجلس، غرفة نوم، أو مكتب منزلي.",
    price: "من ٤٫٥٠٠",
    unit: "ر.س",
    list: [
      "زيارة موقع لأخذ المقاسات والصور",
      "لوحة مزاجية ومخطط أرضي",
      "اختيار خامات وألوان",
      "قائمة مشتريات مع الموردين",
    ],
  },
  {
    featured: true,
    badge: "الأكثر طلباً",
    title: "شقة كاملة",
    desc: "حزمة تصميم متكاملة لشقة سكنية — تسلَّم لك جاهزة للتنفيذ مع مقاولك.",
    price: "من ١٨٫٠٠٠",
    unit: "ر.س",
    list: [
      "زيارة موقع لكل المساحات",
      "تصور ثلاثي الأبعاد لكل غرفة",
      "مخططات تنفيذية كاملة",
      "جداول كميات وخامات",
      "ملف موردين موصى بهم",
    ],
  },
  {
    title: "فيلا أو دور",
    desc: "مشاريع كبيرة بمتطلبات خاصة — هوية مكانية ومخططات شاملة.",
    price: "حسب الطلب",
    unit: "",
    list: [
      "زيارات موقع متعددة",
      "تصور ثلاثي الأبعاد لكل المساحات",
      "مخططات إنشائية وتنفيذية",
      "خطة تأثيث وخامات",
      "دعم استشاري بعد التسليم",
    ],
  },
];

export const PROCESS_STEPS = [
  { n: "٠١", t: "الاستماع", d: "نبدأ بحوار مفصّل لفهم حياتك أو مشروعك، ميزانيتك، جدولك، وتطلعاتك البصرية." },
  { n: "٠٢", t: "زيارة الموقع", d: "يزور فريقنا الموقع في جدة أو المدينة المنورة لأخذ المقاسات الدقيقة والصور المرجعية." },
  { n: "٠٣", t: "الرؤية", d: "نقدم رؤية تصميمية أولية بلوحات مزاجية ومخططات أرضية تفتح النقاش وتثبت الاتجاه." },
  { n: "٠٤", t: "التسليم", d: "نسلّم ملف تصميم متكامل: مناظير ثلاثية الأبعاد، مخططات تنفيذية، وقوائم خامات جاهزة لمقاولك." },
];

export const COMPANY_CAPABILITIES = [
  { n: "٠١", t: "تخطيط رئيسي", d: "تصور مكاني كامل لمشاريع متعددة المباني والوحدات، يربط الهوية البصرية بكفاءة التشغيل.", meta: "تصميم فقط" },
  { n: "٠٢", t: "حزم تصميم متكاملة", d: "ملف تصميم نهائي يضم المناظير، المخططات التنفيذية، وقوائم الخامات — جاهز ليُنفَّذ من قِبل مقاولكم.", meta: "حتى ٦ أشهر" },
  { n: "٠٣", t: "تخصيص نموذجي", d: "تصميم وحدات نموذجية قابلة للتكرار عبر عدة طوابق أو مواقع، مع ضبط جودة موحد.", meta: "خفض ٣٠٪ في وقت التصميم" },
  { n: "٠٤", t: "هوية تجارية", d: "تصميم لوبيات، مساحات استقبال، وأماكن مشتركة تعزز الانطباع الأول وقيمة المشروع.", meta: "تجاري وضيافة" },
  { n: "٠٥", t: "دعم اختيار الموردين", d: "قائمة موردين موصى بهم في جدة والمدينة لكل خامة، مع روابط ومواصفات جاهزة لمقاولكم.", meta: "شبكة محلية" },
];
