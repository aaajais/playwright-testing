pipeline {
  agent none
  environment {
    CI = 'true'
  }
  stages {
    stage('Checkout') {
      agent any
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      agent {
        docker {
          image 'mcr.microsoft.com/playwright:latest'
          args '-u root:root'
        }
      }
      steps {
        sh 'npm ci'
      }
    }
    stage('Install Playwright browsers') {
      agent {
        docker {
          image 'mcr.microsoft.com/playwright:latest'
          args '-u root:root'
        }
      }
      steps {
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run tests') {
      agent {
        docker {
          image 'mcr.microsoft.com/playwright:latest'
          args '-u root:root'
        }
      }
      steps {
        sh 'npx playwright test --reporter=dot --reporter=junit'
      }
    }
  }
  post {
    always {
      node('built-in') {
        junit testResults: 'test-results/*.xml', allowEmptyResults: true
        archiveArtifacts artifacts: 'playwright-report/**', 
          fingerprint: true, 
          allowEmptyArchive: true
      }
    }
  }
}
