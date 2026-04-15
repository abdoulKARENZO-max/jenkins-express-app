pipeline {
    agent any
environment {
        NODE_ENV = 'production'
        CLIENT_CREDENTIALS = credentials('client-credentials')
    }
    stages {
        stage('Initialize') {
            steps {
                echo 'Cleaning workspace and preparing for build...'
            }
        }
        stage('Build') {
            steps {
                echo 'Running build commands...'
                echo "my value is ${NODE_ENV}"
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

    deploy {
        steps {
            echo 'Deploying application...'
            echo "Using client credentials: ${CLIENT_CREDENTIALS}"
        }
    }
    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for details.'
    }
}