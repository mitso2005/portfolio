# React Portfolio Template

A modern, responsive portfolio template built with React, Tailwind CSS, and EmailJS. Features include a smooth scroll navigation, contact form, downloads section, and social media integration.

🌐 **Live demo:** [dimitripetrakis.com](https://dimitripetrakis.com)

## 🌟 Features

- Responsive design
- Dark/Light mode toggle
- Smooth scroll navigation
- Contact form with EmailJS integration
- File download tracking
- Social media integration
- Graduation countdown timer
- Tech stack showcase
- Projects section
- Work experience section

## 🚀 Getting Started

### Prerequisites

- Node.js (>=18.0.0)
- npm or yarn

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```

4. Configure EmailJS
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and templates
   - Update your `.env` file with your credentials

### Development

```bash
npm run dev
```

## 📝 Customization

### 1. Personal Information
Edit `src/components/About.jsx`:
- Update profile image
- Modify graduation date
- Change tech stack icons
- Edit personal description

### 2. Projects
Edit `src/App.jsx`:
```jsx
<Project
  title="Your Project"
  techStack="Technologies used"
  githubLink="https://github.com/..."
/>
```

### 3. Work Experience
Edit `src/App.jsx`:
```jsx
<Work
  title="Position"
  company="Company Name"
  time="2024 - Present"
  website="https://company.com"
/>
```

### 4. Social Links
Keep these social media links updated in `src/components/Footer.jsx`:
```jsx
<a href="https://www.instagram.com/dimitri_petrakis">
<a href="https://www.linkedin.com/in/dimitrios-petrakis-719443269/">
<a href="https://www.tiktok.com/@dimitri_petrakis">
<a href="https://github.com/mitso2005">
```

### 5. Resume
Replace `public/DimitriResume.pdf` with your own resume file.

## 📧 EmailJS Setup

1. Create two templates in EmailJS:
   - Contact form template
   - Download tracking template

2. Update your `.env` file with:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_CONTACT_TEMPLATE_ID`
   - `VITE_DOWNLOAD_TEMPLATE_ID`

## 🎯 Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🔧 Technologies Used

- React
- Tailwind CSS
- EmailJS
- React Icons
- React Scroll
- React Toastify

## 📱 Responsive Design

The template is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first.

## 👏 Acknowledgments

Original template by Dimitri Petrakis
- [Instagram](https://www.instagram.com/dimitri_petrakis)
- [LinkedIn](https://www.linkedin.com/in/dimitrios-petrakis-719443269/)
- [TikTok](https://www.tiktok.com/@dimitri_petrakis)
- [GitHub](https://github.com/mitso2005)
