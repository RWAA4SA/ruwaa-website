# النشر والحماية — رُواء

## النشر التلقائي على GitHub Pages

موجود workflow في `.github/workflows/deploy.yml` يبني الموقع وينشره تلقائياً.

### تفعيل النشر لأول مرة

1. ادخل إعدادات المستودع → **Settings → Pages**
2. تحت **Source**، اختر **GitHub Actions**
3. ادفع أي تغيير على `main` أو `claude/vibrant-gauss-q1MbE`
4. بعد دقيقتين تقريباً يصبح الموقع على:
   `https://<username>.github.io/ruwaa-website/`

### استخدام دومين مخصص (مثلاً `ruwaa.studio`)

1. أنشئ ملف `site/public/CNAME` يحتوي على الدومين فقط:
   ```
   ruwaa.studio
   ```
2. وجّه DNS عند موفّر الدومين إلى GitHub Pages (راجع توثيق GitHub Pages)
3. الـ workflow سيكتشف وجود `CNAME` ويزيل `basePath` تلقائياً.

## النشر على Vercel (بديل أقوى)

- يستخدم `vercel.json` الموجود — رؤوس الحماية كلها على مستوى CDN
- ادخل [vercel.com/new](https://vercel.com/new)، اختر المستودع، حدّد **Root Directory = `site`**

## النشر على Netlify (بديل آخر)

- يستخدم `netlify.toml` الموجود — رؤوس الحماية + cache-busting للأصول

---

## طبقات الحماية المُفعَّلة

### رؤوس HTTP (Vercel / Netlify)
| الرأس | القيمة | الغرض |
|------|--------|------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | إجبار HTTPS لسنتين |
| `Content-Security-Policy` | سياسة متشددة | يمنع XSS وحقن السكربتات |
| `X-Frame-Options` | `DENY` | يمنع clickjacking |
| `X-Content-Type-Options` | `nosniff` | يمنع MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | يقلّل تسريب URLs |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | يعطّل APIs حساسة |
| `Cross-Origin-Opener-Policy` | `same-origin` | يعزل النوافذ المنبثقة |

### على GitHub Pages
- HTTPS مفروض تلقائياً (Force HTTPS في الإعدادات)
- CSP عبر `<meta http-equiv>` (في `app/layout.tsx`)
- باقي الرؤوس يصعب ضبطها — لذلك Vercel/Netlify أقوى لو الحماية أولوية قصوى

### حماية على مستوى التطبيق
- **React** تهرب HTML تلقائياً (مناعة افتراضية ضد XSS)
- **نموذج البريف**:
  - تنقية المدخلات (إزالة `<` و `>`)
  - حدود طول صارمة لكل حقل
  - تحقق regex للبريد والهاتف
  - `autoComplete` صحيح لمدراء كلمات المرور
- **منع poweredBy header** عبر `poweredByHeader: false`
- **لا API routes** — لا سطح هجوم خادم
- **robots.txt** يمنع فهرسة `/brief`
- **CSP يمنع** كل المصادر الخارجية ما عدا Google Fonts

### بعد النشر — فحوصات موصى بها
```bash
# اختبر التقييم الأمني
https://observatory.mozilla.org/analyze/your-domain.com
https://securityheaders.com/?q=your-domain.com

# اختبر HTTPS
https://www.ssllabs.com/ssltest/analyze.html?d=your-domain.com
```
هدفك A+ في الثلاثة.

### عند ربط نموذج البريف بـ backend لاحقاً
أضف:
- **CSRF token** على الطلبات
- **Rate limiting** (e.g., Vercel Edge Middleware أو Cloudflare)
- **reCAPTCHA / hCaptcha** (تذكر تحديث CSP لإضافة دومينات الخدمة)
- **Server-side validation** بنفس قواعد العميل (لا تثق بالمتصفح)
- **DOMPurify** على أي محتوى يصل HTML
