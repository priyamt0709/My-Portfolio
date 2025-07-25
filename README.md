# 🧑‍💻 Priyam Tiwari - Developer Portfolio

Welcome to my personal developer portfolio built using **Python Django**, **HTML5**, **CSS3**, **Bootstrap 5**, and **JavaScript**.
This portfolio showcases my projects, skills, education, and includes an interactive contact form — all deployed live on **Render**.

---

## 🌐 Live Demo

👉 [https://my-portfolio-n8rl.onrender.com]

---

## 🚀 Features

* 🌟 **Modern Home Page** with animated typewriter intro
* 🧑‍💼 **About Me** with experience timeline
* 💼 **Projects** displayed using responsive cards (Django + Bootstrap)
* 📩 **Contact Form** with form validation and success message fade-out
* 🌗 **Dark Mode Toggle** (icon-based, persistent with localStorage)
* 🎨 Smooth CSS animations for clean transitions
* ✅ Fully responsive & mobile-friendly design
* 🔐 Django-based backend with models and admin

---

## 🛠 Tech Stack

* **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
* **Backend**: Django 5.1 (Python)
* **Database**: SQLite (default), PostgreSQL-ready
* **Deployment**: Render.com
* **Tools**: Git, GitHub, WhiteNoise, Gunicorn

---

## 🗂️ Project Structure

```bash
portfolio_project/
├── main/                     # Django app
│   ├── templates/main/       # HTML templates
│   ├── static/               # CSS, JS, images
│   ├── models.py             # Contact & Project models
│   ├── views.py              # View functions
│   └── forms.py              # Django forms
├── portfolio_project/
│   └── settings.py
├── staticfiles/              # collectstatic output (Render)
├── render.yaml               # Render deployment config
├── build.sh                  # collectstatic + migrate script
├── requirements.txt
└── README.md
```

