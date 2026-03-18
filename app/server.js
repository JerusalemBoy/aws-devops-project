const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // Serve image
  if (req.url === '/profile.jpg') {
    const img = fs.readFileSync('./profile.jpg');
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    return res.end(img);
  }

  // Main page
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>DevOps CI/CD Project</title>
        <style>
            body {
                font-family: Arial;
                margin: 40px;
                background-color: #f4f6f8;   /*  LIGHT GREY BACKGROUND */
            }

            .container {
                display: flex;
                align-items: flex-start;
                background: white;           /*  white card */
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }

            .profile {
                margin-right: 30px;
            }

            .profile img {
                width: 120px;
                border-radius: 10px;
            }

            .content {
                max-width: 800px;
            }

            h1, h2 { color: #2c3e50; }
        </style>

      </head>

      <body>

        <div class="container">

          <div class="profile">
            <img src="/profile.jpg" />
          </div>

          <div class="content">
            <h1>Cloud DevOps Project</h1>

            <p>End-to-End CI/CD Pipeline on AWS</p>

            <h2>Architecture</h2>
            <p>GitHub | GitHub Actions | Docker | ECR | EKS | LoadBalancer | Prometheus | Grafana </p>

            <h2>Key Features</h2>
            <ul>
              <li>CI/CD automation</li>
              <li>Dockerized app</li>
              <li>Kubernetes deployment</li>
              <li>Monitoring & alerting</li>
            </ul>

            <h2>Tech Stack</h2>
             <p>AWS | Docker | Kubernetes | GitHub Actions | Prometheus | Grafana</p>

            <h2>Author</h2>
            <p>This CI/CD is working automatically | BY Richard Joel</p>
          </div>

        </div>

      </body>
    </html>
  `);
});

server.listen(3000);
console.log("Server running on port 3000");
