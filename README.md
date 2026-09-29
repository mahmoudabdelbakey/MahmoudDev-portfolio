# Mahmoud.Dev — Single Page Application Portfolio (HTML5, CSS3, Vanilla JS)

الموقع الشخصي والبورتفوليو للمطور **محمود عبد الباقي (Mahmoud Abd-Elbakey - Full Stack .NET Developer)**.
تم بناء الموقع كـ **صفحة واحدة متكاملة (Single Page Application)** بتصميم هادئ وراقي (Editorial & Modern)، شريط تنقل علوي ذكي (Sticky Navbar & ScrollSpy)، وتوافق كامل مع **GitHub Pages** و **Vercel**.

---

## 🔗 روابط التواصل الرسمية
- **LinkedIn:** [https://www.linkedin.com/in/mahmoud-abd-elbakey](https://www.linkedin.com/in/mahmoud-abd-elbakey)
- **GitHub Repository:** [https://github.com/mahmoudabdelbakey/MahmoudDev-portfolio](https://github.com/mahmoudabdelbakey/MahmoudDev-portfolio)
- **Email:** [mahmoudabdelbakey1@gmail.com](mailto:mahmoudabdelbakey1@gmail.com)

---

## 📁 هيكل المشروع المنظم (Clean Structure)

```text
portoflio Front/
├── .gitignore                   # استبعاد الملفات المؤقتة
├── vercel.json                  # إعدادات Vercel والتوجيه النظيف للأقسام
├── 404.html                     # صفحة 404 مخصصة متوافقة مع الثيم
├── README.md                    # توثيق المشروع وطريقة التشغيل والنشر
├── index.html                   # صفحة البورتفوليو الكاملة بجميع أقسامها
├── css/
│   ├── design-system.css        # المتغيرات اللونية، الخطوط، وثيم Light/Dark
│   ├── components.css           # البطاقات، الجداول الزمنية، الأزرار، التجاوب
│   └── site.css                 # التنسيقات العامة
├── js/
│   ├── site.js                  # التمرير السلس، الـ ScrollSpy، تبديل الثيم، والـ CV Modal
│   ├── projects.js              # فلترة المشاريع وعارض الـ Case Study Modal
│   └── contact.js               # محرك نموذج التواصل الفوري ومراسلة الإيميل
├── data/
│   └── projects-data.js         # بيانات المشاريع ودراسات الحالة المفصلة
└── images/                      # صور محمود، الشعارات، ورسومات الواجهة
```

---

## 📑 أقسام الموقع في الصفحة الواحدة (Sections)

1. **Hero Section (`#home`):** العنوان الترحيبي، تخصص Full Stack .NET، وزري Call-to-Action.
2. **About Me (`#about`):** الفلسفة الهندسية، طريقة العمل، والـ Mindset خلف الكود.
3. **Education & Growth (`#education`):** المسار الأكاديمي، الشهادات التخصصية، ومحطات التعلم.
4. **Core Capabilities (`#skills`):** مصفوفة المهارات (.NET Core, C#, EF Core, Clean Architecture, SQL, Vue/React/JS, DevOps).
5. **Career & Journey (`#experience`):** الخبرات المهنية، المسؤوليات، والمسار التصاعدي.
6. **Engineering Services (`#services`):** الخدمات الست الأساسية ومخرجات كل خدمة وقيمتها للأعمال.
7. **Featured Work (`#projects`):** المشاريع الحية مع الفلترة ودراسات الحالة التفاعلية (Case Studies Modal).
8. **Why Mahmoud & Testimonials (`#whyme`):** مؤشرات الأداء، الأثر، الميزة التنافسية، وآراء الزملاء والعملاء.
9. **Contact & Collaboration (`#contact`):** نموذج حجز المشاريع، معلومات التواصل، وروابط السوشيال ميديا.

---

## 📬 آلية عمل نموذج التواصل (Contact Form)

- عند ملء النموذج والضغط على إرسال، يتم تجهيز الرسالة فوراً وفتح نافذة **Gmail Web Composer** أو تطبيق البريد الافتراضي مع ملء كافة التفاصيل مسبقاً (اسم العميل، إيميله، نوع المشروع، الميزانية، والوصف).
- تظهر أيضاً بطاقة تفاعلية فورية داخل النموذج تتيح بنقرة زر:
  - 🚀 فتح الرسالة في Gmail
  - ✉️ فتح تطبيق الإيميل الافتراضي
  - 📋 نسخ النص بالكامل
- يتم حفظ نسخة احتياطية من كل استفسار محلياً في متصفح العميل عبر `localStorage`.
- الإيميل المستهدف: `mahmoudabdelbakey1@gmail.com`.

---

## 🚀 تشغيل الموقع أونلاين على GitHub Pages

المستودع مرفوع على:
`https://github.com/mahmoudabdelbakey/MahmoudDev-portfolio`

لتفعيل الموقع مجاناً بنقرة واحدة:
1. افتح صفحة المستودع على GitHub: [MahmoudDev-portfolio](https://github.com/mahmoudabdelbakey/MahmoudDev-portfolio).
2. اضغط على **Settings** أعلى الصفحة.
3. من القائمة الجانبية اليسرى اختر **Pages**.
4. تحت قسم **Branch**: اختر `main` والمجلد `/ (root)`.
5. اضغط **Save**.
6. في غضون 60 ثانية سيعمل موقعك مباشرة على الرابط:
   `https://mahmoudabdelbakey.github.io/MahmoudDev-portfolio/`

---

## ⚡ ربط وتشغيل الموقع على Vercel

1. سجل الدخول إلى [Vercel](https://vercel.com) بحساب GitHub الخاص بك.
2. اضغط **Add New...** ثم **Project**.
3. اختر مستودع `MahmoudDev-portfolio` واضغط **Import**.
4. اضغط **Deploy** مباشرة دون الحاجة لتغيير أي إعدادات.
5. ستحصل على رابط فائق السرعة مع شهادة SSL مجانية وتحديث تلقائي عند أي تعديل!
