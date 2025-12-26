spipeline {
    // agent {
    //     docker {
    //         image 'node:10.15.3-alpine'
    //         args '-p 3001:3000'
    //         args '-u 0:0'
    //     }
    // }
    agent any
    environment { HOME="." }
    stages {
        stage('Build Test') {
            steps {
                script {
                    try {
                        sh 'rm .dockerignore'
                        sh 'docker build -t mangeto-test -f Dockerfile.test --no-cache .'
            
                    } catch (err) {
                        sh 'docker rmi magneto-test'
                    } finally {
                        echo 'Error occured exiting... from build-test'
                    }
                }
            }
        }
        stage('run-test') {
            steps {
                script {
                    try {
                        sh 'docker run --rm mangeto-test'
                    } catch(err) {
                        sh 'Error occured rxiting.... from test'
                        sh 'docker rmi magneto-test'
                    }
                }
            }
        }
        stage('Clean Docker test') {
            steps {
                script {
                    sh 'docker rmi magneto-test'
                }
            }
        }
    }
}
