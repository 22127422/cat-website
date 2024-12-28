pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/22127422/cat-website.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('22127422/cat-website:v1.0')
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    docker.image('22127422/cat-website:v1.0').run('-p 3000:80')
                }
            }
        }
    }
}
