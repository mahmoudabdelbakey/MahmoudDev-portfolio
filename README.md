# Mahmoud.Dev — Frontend Portfolio (HTML5, CSS3, Vanilla JS)

الموقع الشخصي والبورتفوليو للمطور **محمود عبد الباقي (Mahmoud Abd-Elbakey - Full Stack .NET Developer)**.
نسخة واجهة أمامية نقية وخفيفة وسريعة، جاهزة للنشر فوراً على **GitHub Pages** و **Vercel**.

---

## 🔗 روابط التواصل المحدثة
- **LinkedIn:** [https://www.linkedin.com/in/mahmoud-abd-elbakey](https://www.linkedin.com/in/mahmoud-abd-elbakey)
- **GitHub:** [https://github.com/mahmoudabdelbakey](https://github.com/mahmoudabdelbakey)
- **Email:** [mahmoudabdelbakey1@gmail.com](mailto:mahmoudabdelbakey1@gmail.com)

---

## 📁 هيكل الملفات المنظم (Clean Project Structure)

```text
portoflio Front/
├── .gitignore                   # تجاهل ملفات النظام والمؤقتة
├── vercel.json                  # إعدادات النشر على Vercel مع Clean URLs و Rewrites
├── 404.html                     # صفحة الخطأ المخصصة لاستضافات Static Hosting
├── README.md                    # دليل الاستخدام والنشر
├── index.html                   # الصفحة الرئيسية (Hero + Contact + Modals)
├── about.html                   # صفحة من أنا ورؤية العمل (The Mindset Behind the Code)
├── education.html               # صفحة التعليم والمسار الأكاديمي (Education & Growth)
├── skills.html                  # مصفوفة المهارات التقنية مع الفلاتر التفاعلية
├── experience.html              # الخبرات العملية والمسار الوظيفي (Career Journey)
├── services.html                # الخدمات الهندسية السبعة مع المخرجات والقيمة
├── projects.html                # المشاريع الرئيسية + الشهادات والإنجازات
├── impact.html                  # الميزة التنافسية وآراء العملاء (Why Me & Testimonials)
├── contact.html                 # صفحة التواصل المباشر
├── thankyou.html                # صفحة تأكيد الإرسال
├── case-study.html              # عارض دراسات الحالة الديناميكي
├── case-study-logicore.html     # دراسة حالة: LogiCore Express
├── case-study-mediconnect.html  # دراسة حالة: MediConnect Health
├── case-study-commercecraft.html# دراسة حالة: CommerceCraft Engine
├── case-study-taskpulse.html    # دراسة حالة: TaskPulse Hub
├── single-page.html             # نسخة الصفحة الواحدة التمريرية المتصلة
├── css/
│   ├── design-system.css        # نظام التصميم والمتغيرات اللونية الهادئة
│   ├── components.css           # البطاقات، الأزرار، المودال، القوائم والتجاوب
│   └── site.css                 # التنسيقات العامة
├── js/
│   ├── site.js                  # التنقل، الثيم الداكن/الفاتح، ومودال الـ CV
│   ├── projects.js              # فلترة المشاريع وعارض الـ Case Study Modal
│   ├── skills.js                # فلترة تصنيفات المهارات
│   └── contact.js               # محرك نموذج التواصل والإرسال المباشر للإيميل
├── data/
│   └── casestudies.js           # بيانات دراسات الحالة التفصيلية
└── images/                      # الصور الرسمية والشعارات ورسومات الـ SVG
```

---

## 📬 كيفية عمل نموذج التواصل (Contact Form)
النموذج مربوط الآن بخدمة **FormSubmit AJAX** ويرسل مباشرة إلى بريدك الإلكتروني:
`mahmoudabdelbakey1@gmail.com`

> **ملاحظة تفعيل هامة لأول مرة فقط (First-time Activation):**
> عند إرسال أول رسالة تجريبية من النموذج، ستصلك رسالة تأكيد على إيميلك من خدمة `FormSubmit` بعنوان **"Action Required: Activate your form"**.
> اضغط على زر **Activate Form** داخل الرسالة مرة واحدة فقط، وبعدها أي رسالة يكتبها أي عميل في الموقع ستصل مباشرة إلى صندوق الوارد (Inbox) لديك بصيغة جدول منسق وأنيق، ويتم أيضاً حفظ نسخة احتياطية من الرسائل محلياً في المتصفح.

---

## 🚀 1. خطوات الرفع على GitHub وتشغيل الموقع منه (GitHub Pages)

المستودع المحلي (Git) جاهز بالفعل وتم عمل أول Commit له. لرفعه على حسابك:

1. ادخل على [GitHub](https://github.com/new) وأنشئ مستودعاً جديداً (New Repository) بالاسم الذي تريده (مثلاً: `portfolio`).
2. افتح موجه الأوامر (Terminal أو PowerShell) في مجلد `portoflio Front` واكتب:
   ```bash
   git remote add origin https://github.com/mahmoudabdelbakey/portfolio.git
   git branch -M main
   git push -u origin main
   ```
   *(استبدل الرابط برابط المستودع الخاص بك)*

3. **لتشغيل الموقع أونلاين مجاناً من GitHub Pages:**
   - ادخل على صفحة المستودع على GitHub ثم اضغط على **Settings**.
   - من القائمة الجانبية اختر **Pages**.
   - تحت قسم **Build and deployment**:
     - اختر في **Branch**: `main` ومجلد `/ (root)`.
     - اضغط **Save**.
   - خلال دقيقة ستجد رابط موقعك جاهزاً مثل:
     `https://mahmoudabdelbakey.github.io/portfolio/`

---

## ⚡ 2. خطوات الرفع على Vercel وتشغيل الموقع منه

المشروع يحتوي بالفعل على ملف `vercel.json` المضبوط ليعطيك أفضل أداء وروابط نظيفة (Clean URLs):

### الطريقة الأسهل والأفضل (عبر ربط GitHub):
1. ادخل على موقع [Vercel](https://vercel.com) وسجّل الدخول بحساب GitHub الخاص بك.
2. اضغط على **Add New...** ثم **Project**.
3. ستجد مستودع الـ `portfolio` الذي رفعته على GitHub، اضغط أمامه على **Import**.
4. بدون تعديل أي إعدادات، اضغط **Deploy**.
5. خلال 15 ثانية سيكون موقعك لايف برابط سريع جداً مثل:
   `https://portfolio-mahmoud.vercel.app`
   *(وأي تعديل تدفعه على GitHub سيتم تحديثه في Vercel تلقائياً!)*

### الطريقة الثانية (عبر Vercel CLI من الجهاز مباشرة):
إذا كنت تستخدم أداة vercel من سطر الأوامر:
```bash
npm i -g vercel
vercel
```
واتبع التعليمات على الشاشة وستحصل على الرابط فوراً.
