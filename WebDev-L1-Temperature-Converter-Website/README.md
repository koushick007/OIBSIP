# Temperature Converter 🌡️⚡

**Oasis Infobyte Internship (OIBSIP) — Web Development & Designing**  
**Level 1 — Task 3: Temperature Converter Website**

A modern, responsive, and visually refined Temperature Converter web application built to convert temperature values seamlessly between **Celsius (°C)**, **Fahrenheit (°F)**, and **Kelvin (K)** with real-time validation, absolute zero edge-case handling, and interactive visual feedback.

---

## 🌟 Live Demo & Preview

- **Local Preview:** [http://localhost:3000/](http://localhost:3000/)
- **Framework & Tooling:** Powered by [Next.js](https://nextjs.org/) & Vanilla Web Technologies

---

## 🚀 Features

- 🌡️ **Multi-Unit Conversion:** Convert seamlessly across **Celsius (°C)**, **Fahrenheit (°F)**, and **Kelvin (K)** using standard thermodynamic conversion formulas.
- 🛡️ **Comprehensive Input Validation:** Real-time validation rejecting empty strings, invalid alphanumeric characters, multiple decimal points, and non-finite values.
- ❄️ **Absolute Zero Boundary Protection:** Intelligently checks physical temperature limits ($-273.15^\circ\text{C}$, $-459.67^\circ\text{F}$, $0\text{ K}$) and alerts users if temperatures fall below absolute zero.
- 🎨 **Modern Dark Aesthetic:** Styled with a sleek slate dark palette (`#0f172a`), refined surface elevation (`#1e293b`), vibrant sky-blue accents (`#38bdf8`), and smooth focus/hover states.
- 📱 **Fully Responsive:** Fluid layout that adapts across mobile phones, tablets, and desktop screens with CSS Flexbox and Grid.
- 🎯 **Active Source Highlighting:** Dynamically highlights the input unit row in the conversion results table for instant clarity.
- ♿ **Accessible & Semantic:** Structured with accessible HTML5 elements, ARIA attributes (`aria-live`, `aria-invalid`, `role="alert"`), and tabular numeric formatting.
- ⚡ **Lightweight & Fast:** Pure Vanilla JavaScript execution with zero unnecessary runtime dependencies.

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic & Accessible)
- **Styling:** Modern Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Radial Gradients)
- **Logic:** Vanilla JavaScript (ES6+, Strict Mode, Unit Pivot Algorithm, Regex Validation)
- **Dev Server / Platform:** [Next.js](https://nextjs.org/) / Node.js

---

## 📁 Project Structure

```text
├── public/
│   ├── index.html          # Main HTML structure and UI elements
│   ├── styles.css          # Design system, CSS variables & responsive layout
│   ├── script.js           # Conversion algorithms & input validation logic
│   ├── icon.svg            # Favicon SVG asset
│   └── placeholder-*       # Asset placeholders
├── app/
│   ├── globals.css         # Global styles configuration
│   ├── layout.tsx          # Root Next.js layout
│   └── page.tsx            # Static app routing redirection
├── package.json            # Dependencies & project scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/koushick007/OIBSIP.git
cd OIBSIP/WebDev-L1-Temperature-Converter-Website
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open your browser and visit: **[http://localhost:3000/](http://localhost:3000/)** (or directly open `public/index.html` in your web browser).

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 👨‍💻 Author

- **Name:** Koushick D
- **GitHub:** [@koushick007](https://github.com/koushick007)
- **Email:** [koushik1122004@gmail.com](mailto:koushik1122004@gmail.com)
- **Project:** Oasis Infobyte Web Development & Designing Internship (OIBSIP)

---

## 📄 License

This project is created for educational and internship demonstration purposes under the **Oasis Infobyte Internship Program (OIBSIP)**.
