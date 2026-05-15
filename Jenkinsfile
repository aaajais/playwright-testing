pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Debug') {
            steps {
                bat 'docker --version'
                bat 'docker ps'
                bat 'echo %WORKSPACE%'
            }
        }

        stage('Run Playwright in Docker') {
            steps {
                bat '''
                docker run --rm ^
                -v "%WORKSPACE%:/work" ^
                -w /work ^
                -e CI=true ^
                mcr.microsoft.com/playwright:latest ^
                /bin/bash -c "npm ci && npx playwright install --with-deps && npx playwright test --reporter=junit,dot"
                '''
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: '**/*.xml'

            archiveArtifacts artifacts: 'playwright-report/**',
            allowEmptyArchive: true
        }
    }
}