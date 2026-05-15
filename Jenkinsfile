pipeline {
    agent any

    environment {
        CI = 'true'
        PLAYWRIGHT_JUNIT_OUTPUT_NAME = 'results.xml'
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
                --user root ^
                -v "%WORKSPACE%:/work" ^
                -w /work ^
                -e CI=true ^
                -e PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml ^
                mcr.microsoft.com/playwright:latest ^
                /bin/bash -c "npm install && npx playwright test --reporter=dot,junit"
                '''
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true,
                   testResults: 'results.xml'

            archiveArtifacts artifacts: 'playwright-report/**',
                               allowEmptyArchive: true
        }
    }
}