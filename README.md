# Dilip Rajbhar — Portfolio

This is a production-ready Next.js + Tailwind portfolio built for Dilip Rajbhar.
It includes:
- Dark/Light theme toggle (prefers last choice)
- Downloadable resume (public/resume.pdf)
- Contact form (EmailJS stub — configure keys)
- Animated skill bars
- Projects, Experience and Education sections
- Social links (update in data/profile.json)

## Quick start
1. `cd dilip_portfolio`
2. `npm install`
3. `npm run dev` (open http://localhost:3000)

## Deploy to Vercel
1. Push to GitHub.
2. Import repo in Vercel — it detects Next.js automatically.
3. Set environment vars for EmailJS if using contact form.

## Notes
- Replace `data/profile.json` social links with your real GitHub/LinkedIn.
- EmailJS values are placeholders — create an EmailJS account and replace keys in `components/Contact.jsx`.
- Resume is included at `/public/resume.pdf`.
