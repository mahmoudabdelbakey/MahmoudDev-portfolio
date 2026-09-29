# Mahmoud.Dev — Frontend Portfolio (HTML, CSS, Vanilla JS)

نسخة الواجهة الأمامية المستقلة والكاملة لموقع البورتفوليو الخاص بـ **محمود عبد الباقي (Mahmoud Abd-Elbakey - Full Stack .NET Developer)**.

تم بناء هذه النسخة بالكامل باستخدام **HTML5 و CSS3 و Vanilla JavaScript** مع الحفاظ بنسبة 100% على نفس التصميم، الألوان، الخطوط، الصور، التنسيق، التفاعلية، والتأثيرات، وبدون أي اعتماد إجباري على سيرفر خلفي (Backend Server).

---

## 📁 هيكل المشروع (Project Structure)

```text
portoflio Front/
├── index.html                   # الصفحة الرئيسية (Hero + Contact + Modals)
├── about.html                   # صفحة من أنا ورؤية العمل (The Mindset Behind the Code)
├── education.html               # صفحة التعليم والمؤهلات الأكاديمية (Education & Growth)
├── skills.html                  # صفحة المهارات التقنية مصفوفة كاملة مع الفلاتر (Skills Matrix)
├── experience.html              # صفحة الخبرات المهنية ورحلة التطور (Experience & Career Journey)
├── services.html                # صفحة الخدمات والحلول البرمجية (Engineering Services)
├── projects.html                # صفحة المشاريع Flagship Work والشهادات والإنجازات
├── impact.html                  # صفحة الميزة التنافسية وآراء العملاء (Why Me & Testimonials)
├── contact.html                 # صفحة التواصل المباشر (Contact Page)
├── thankyou.html                # صفحة تأكيد إرسال الرسالة (Thank You Page)
├── case-study.html              # عارض دراسات الحالة التفاعلي الديناميكي
├── case-study-logicore.html     # دراسة حالة مخصصة: LogiCore Express
├── case-study-mediconnect.html  # دراسة حالة مخصصة: MediConnect Health
├── case-study-commercecraft.html# دراسة حالة مخصصة: CommerceCraft Engine
├── case-study-taskpulse.html    # دراسة حالة مخصصة: TaskPulse Collaboration Hub
├── single-page.html             # نسخة الصفحة الواحدة الشاملة (All-In-One Single Page Portfolio)
├── css/
│   ├── design-system.css        # نظام التصميم (الألوان، الخطوط، المتغيرات CSS)
│   ├── components.css           # البطاقات، الأزرار، المودال، القوائم والتجاوب
│   └── site.css                 # التنسيقات العامة
├── js/
│   ├── site.js                  # محرك التنقل، الوضع الليلي/النهاري، والـ Resume Modal
│   ├── projects.js              # فلترة المشاريع وعارض الـ Case Studies التفاعلي
│   ├── skills.js                # فلترة تصنيفات المهارات
│   └── contact.js               # محرك نموذج التواصل وحفظ الرسائل وتأكيد الاستلام
├── data/
│   └── casestudies.js           # بيانات دراسات الحالة التفصيلية
└── images/                      # جميع الصور والرسومات المتجهة SVG والشعارات
```

---

## 🚀 كيفية تشغيل وتصفح المشروع

1. **مباشرة عبر المتصفح:**
   - يمكنك الضغط مرتين (Double Click) على ملف `index.html` أو أي صفحة من صفحات المشروع وسيفتح فوراً في المتصفح المفضل لديك بدون الحاجة لأي خادم.

2. **عبر Live Server في VS Code:**
   - افتح المجلد في VS Code واضغط كليك يمين على `index.html` ثم اختر **Open with Live Server**.

3. **عبر Python Local Server:**
   ```bash
   python -m http.server 3000
   ```
   ثم افتح: `http://localhost:3000`

4. **الرفع المباشر للاستضافة (Deployment):**
   - المشروع جاهز فوراً للرفع على **GitHub Pages**، **Vercel**، **Netlify**، أو أي استضافة ثابتة بضغطة زر.
