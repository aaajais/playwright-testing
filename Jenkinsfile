pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:latest'
      args '-u root:root'
    }
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run tests') {
      steps {
        // run Playwright tests and output junit xml for Jenkins
        sh 'npx playwright test --reporter=dot --reporter=junit'
      }
    }
  }

  post {
    always {
      junit 'test-results/*.xml'
      archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
    }
  }
}
