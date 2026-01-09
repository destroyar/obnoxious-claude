# 🔥💀 Obnoxious Claude 💀🔥

> ⚠️ **SEIZURE WARNING** ⚠️
> 
> **This website contains flashing colors, rapid animations, rainbow backgrounds, and visual effects that may cause discomfort or trigger seizures in people with photosensitive epilepsy. Viewer discretion is strongly advised.**

---

## What Is This Monstrosity?

This is a gloriously obnoxious website that was **100% vibe coded with Claude Opus 4.5** just for fun. It's intentionally over-the-top, in-your-face, and absolutely ridiculous by design.

Features include:
- 🌈 Aggressive rainbow gradient backgrounds
- 🔥 Fire emoji cursor (obviously)
- 💫 Floating particle effects
- 🎉 Emoji rain (because why not?)
- ✨ Mouse trail effects
- 🏆 A pointless achievement system for clicking a button
- 📢 A scrolling marquee with fake urgency
- 🎨 Comic Sans (the crown jewel)
- 🎯 A button that sometimes runs away from you

## Why?

Because sometimes you just need to embrace chaos and see what an AI will generate when you ask it to make the most obnoxious website possible.

---

## 🚀 Running Locally

### Prerequisites

- Docker
- A local Kubernetes cluster (minikube, kind, Docker Desktop, etc.)
- kubectl
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/) (if using the ingress)
- A sense of humor

### Build the Container

```bash
docker build -t coolsite:latest .
```

### Run with Docker

```bash
docker run -p 8080:80 coolsite:latest
```

Then open http://localhost:8080 and prepare yourself.

### Deploy to Local Kubernetes Cluster

1. **Build and load the image** (example using kind):
   ```bash
   docker build -t coolsite:latest .
   kind load docker-image coolsite:latest
   ```

2. **Apply the manifests**:
   ```bash
   kubectl apply -f .k8s/
   ```

3. **Access the chaos**:
   - If using an ingress controller, access via your configured hostname
   - Or port-forward the service:
     ```bash
     kubectl port-forward svc/coolsite 8080:80
     ```

---

## 📁 Project Structure

```
├── index.html      # The HTML (it's simple, the chaos is elsewhere)
├── styles.css      # 240+ lines of visual assault
├── script.js       # Achievement system, emoji rain, particle effects
├── Dockerfile      # nginx:alpine because we're not animals
└── .k8s/
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

---

## 🤖 The Vibe Coding Experience

This entire project was created by prompting Claude Opus 4.5 to generate "the most obnoxious website possible." No engineering skills were used in the making of this repo (okay maybe some light prompt tweaking).

The AI delivered:
- Rainbow everything
- Comic Sans as the primary font
- Emojis literally raining from the sky
- A button that occasionally dodges your mouse
- An achievement for clicking 420 times (nice)

---

## License

[Unlicense](LICENSE) - Public domain. Do whatever you want with this. We're not responsible for any eye damage.

---

*Made with 🔥 and Claude Opus 4.5*
