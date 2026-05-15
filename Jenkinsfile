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
                bat 'dir'
            }
        }

        stage('Run Playwright in Docker') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:latest').inside(
                        '-u root --entrypoint=""'
                    ) {

                        sh '''
                            echo "Inside container"
                            pwd
                            node -v
                            npm -v

                            npm ci

                            npx playwright install --with-deps

                            npx playwright test --reporter=junit,dot
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true,
                   testResults: '**/*.xml'

            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )
        }
    }
}