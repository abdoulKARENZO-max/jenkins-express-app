pipeline {
    agent any
parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Branch to build')
        version(name: 'APP_VERSION', defaultValue: '1.0.0', description: 'Version to deploy')
    }
tools {
     gladle 'nodejs'
    }        
environment {
        NODE_ENV = 'production'
        CLIENT_CREDENTIALS = credentials('client-credentials')
    }
    stages {
        stage('Initialize') {
            steps {
                echo 'Cleaning workspace and preparing for build...'
            }

            script { gv=load"script.groovy" }
        }
        stage('Build') {
            steps {
                echo 'Running build commands...'
                echo "my value is ${NODE_ENV}"
                // Example: sh 'npm install'
            }
        }
        stage('Test') {

            when {
                expression { params.BRANCH_NAME == 'main' }
            }
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