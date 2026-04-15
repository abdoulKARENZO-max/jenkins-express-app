pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                echo 'Cleaning workspace and preparing for build...'
            }
        }
        stage('Build') {
            steps {
                echo 'Running build commands...'
                // Example: sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example: sh 'npm test'
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution finished.'
        }
    }
}