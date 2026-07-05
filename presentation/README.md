# رُواء — العرض التقديمي (Client Presentation)

عرض مبيعات فاخر من **١٠ صفحات** (16:9) موجّه للعملاء المهتمين والمقاولين والمطورين بعد التواصل الأول.
مصمّم بهوية موقع رُواء نفسها (الألوان، الخطوط: Reem Kufi / Tajawal / Amiri).

**الناتج النهائي:** [`../public/ruwaa-profile.pdf`](../public/ruwaa-profile.pdf)
— جاهز للإرسال عبر واتساب أو البريد، ومتاح أيضًا على الموقع: `‎/ruwaa-profile.pdf`.

## المحتوى (الصفحات)
1. الغلاف · 2. من نحن · 3. رؤيتنا · 4. خدماتنا · 5. لماذا رُواء ·
6. مختارات من الأعمال · 7. مشروع مختار · 8. رحلة التصميم ·
9. للمطورين والمقاولين · 10. تواصل معنا.

## التعديل وإعادة التصدير

المصدر هو ملف HTML واحد قائم بذاته: [`deck.html`](./deck.html).
عدّل النص أو الصور مباشرة، ثم أعد التصدير عبر Chromium بلا أي اعتماديات:

```bash
chrome --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --no-pdf-header-footer --print-to-pdf-no-header \
  --virtual-time-budget=15000 --run-all-compositor-stages-before-draw \
  --print-to-pdf=../public/ruwaa-profile.pdf "file://$PWD/deck.html"
```

- **الخطوط:** في `fonts/` (Google Fonts — رخصة OFL).
- **الصور:** في `img/` — نسخ JPEG مضغوطة من `public/assets/portfolio/`.
- **معلومات التواصل:** الهاتف/واتساب `0535043173` · الموقع `ruwaa-website.vercel.app`.

> مقاس الصفحة 1280×720 px (‎13.33×7.5in، ‎16:9). كل `‎.slide` = صفحة واحدة.
