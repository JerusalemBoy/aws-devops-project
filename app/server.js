const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>DevOps CI/CD Project</title>
        <style>
          body { font-family: Arial; margin: 40px; }
          h1 { color: #2c3e50; }
          h2 { color: #34495e; }
          ul { line-height: 1.6; }
        </style>
      </head>
      <body>

        <h1>Cloud DevOps Project: End-to-End CI/CD Pipeline on AWS</h1>

        <p>I designed and implemented a cloud-native DevOps pipeline.</p>

        <h2>Architecture</h2>
        <p>GitHub → GitHub Actions → Docker → ECR → EKS → LoadBalancer → Prometheus + Grafana</p>

        <h2>Key Features</h2>
        <ul>
          <li>CI/CD automation with GitHub Actions</li>
          <li>Dockerized application</li>
          <li>Kubernetes deployment (EKS)</li>
          <li>LoadBalancer exposure</li>
          <li>Monitoring with Prometheus & Grafana</li>
          <li>Alerting system configured</li>
        </ul>

        <h2>🛠 Tech Stack</h2>
        <p>AWS | Docker | Kubernetes | GitHub Actions | Prometheus | Grafana</p>

        <h2>Author</h2>
        <p>This CI/CD is working automatically — BY Richard Joel 🚀</p>

      </body>
    </html>
  `);
});

server.listen(3000);
console.log("Server running on port 3000");
