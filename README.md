# GNC Kuwait Coming Soon Website | موقع شركة جي إن سي الكويت قريباً

صفحة هبوط احترافية ومبسطة لموقع **gnc-kw.net** بتصميم عصري (Clean Minimalism) باللغتين العربية والإنجليزية، وتتضمن تتبع حالة جاهزية المنصة ونموذج تواصل مباشر مع رئيس مجلس الإدارة.

A professional, minimal "Coming Soon" landing page for **gnc-kw.net** designed in a Clean Minimalism style. Fully bilingual (Arabic & English) featuring a progress timeline and a direct communication form to the Chairman.

---

## 🚀 كيفية رفع المشروع وتفعيله على GitHub Pages
## How to upload and host on GitHub Pages

لقد قمنا بتجهيز ملفين هامين لتسهيل النشر على مستودعك الخاص `qran-top/gnc-kwnet`:
1. **`public/CNAME`**: لربط النطاق المخصص الخاص بك تلقائياً (`gnc-kw.net`).
2. **`.github/workflows/deploy.yml`**: نظام أتمتة (GitHub Actions) ليقوم ببناء ونشر الموقع تلقائياً بمجرد رفع الكود!

We have prepared two essential files to make deploying to your repository `qran-top/gnc-kwnet` fully automated:
1. **`public/CNAME`**: To map your custom domain (`gnc-kw.net`) automatically.
2. **`.github/workflows/deploy.yml`**: A GitHub Actions workflow to build and deploy the app automatically on every push!

---

### 1️⃣ الخطوة الأولى: رفع الكود إلى جيت هاب (First Step: Uploading to GitHub)

افتح واجهة الأوامر (Terminal) في مجلد المشروع وقم بتنفيذ الأوامر التالية بالتوالي:
Open your terminal in the project directory and run the following commands:

```bash
# تهيئة مستودع git محلي
# Initialize a local git repository
git init

# إضافة جميع الملفات
# Add all files to stage
git add .

# تسجيل التغييرات الأولية
# Commit the files
git commit -m "Initial commit: GNC Kuwait Coming Soon Landing Page"

# تغيير اسم الفرع الرئيسي إلى main
# Rename default branch to main
git branch -M main

# ربط المستودع المحلي بمستودع جيت هاب الخاص بك
# Link your local repository to your remote GitHub repository
git remote add origin https://github.com/qran-top/gnc-kwnet.git

# رفع الكود بالكامل
# Push your code to GitHub
git push -u origin main
```

---

### 2️⃣ الخطوة الثانية: تفعيل النشر التلقائي في جيت هاب (Second Step: Enabling GitHub Pages Actions)

بعد رفع الكود بنجاح إلى مستودعك `qran-top/gnc-kwnet` على GitHub:
After successfully pushing your code to `qran-top/gnc-kwnet` on GitHub:

1. اذهب إلى صفحة المستودع على **GitHub**.
   Go to your repository page on **GitHub**.
2. اذهب إلى الإعدادات **Settings** ثم إلى قسم **Pages** في القائمة الجانبية اليسرى.
   Navigate to **Settings** -> **Pages** in the left sidebar.
3. تحت قسم **Build and deployment**:
   Under **Build and deployment**:
   * قم بتغيير خيار **Source** من `Deploy from a branch` إلى **`GitHub Actions`**.
     Change the **Source** option from `Deploy from a branch` to **`GitHub Actions`**.
4. بمجرد تغييرها، سيبدأ نظام الأتمتة المدمج في العمل تلقائياً، وخلال دقيقة واحدة سيكون موقعك جاهزاً ومباشراً على الإنترنت!
   Once changed, the workflow will trigger automatically and within a minute, your landing page will be live!

---

## 🛠️ تشغيل المشروع محلياً (Running Locally)

إذا أردت استعراض وتعديل الموقع على جهازك الشخصي:
If you want to view and develop the website on your local machine:

```bash
# تثبيت الحزم والمكتبات
# Install dependencies
npm install

# تشغيل خادم التطوير المحلي
# Start local development server
npm run dev
```

---

## 💎 ميزات التصميم (Design Highlights)
- **Clean Minimalism**: مظهر نظيف وبسيط يركز على المحتوى والخطوط بتباين مثالي مريح للعين.
- **Bilingual (العربية & English)**: دعم كامل للاتجاهين RTL و LTR بضغطة زر واحدة بفضل خط "Cairo" الأنيق والخطوط العصرية.
- **Copy Email with Clipboard API**: نسخ فوري ومميز لعنوان البريد الإلكتروني مع إشعار للمستخدم.
- **Readiness Progress Bar**: شريط يوضح نسبة اكتمال برمجة المنصة وتفاصيل المراحل الحالية والمستقبلية.
- **Interactive Form to Mailto**: نموذج إرسال استفسار مباشر يقوم بتجهيز البريد والبيانات وفتح برنامج البريد التلقائي لإرسال الرسالة إلى `chairman@gnc-kw.net`.
