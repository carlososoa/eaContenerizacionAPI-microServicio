pipeline {    
    agent any
    
        stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url:'https://github.com/carlososoa/eaContenerizacionAPI-microServicio'
            }
        }
        stage('Construir imagen de Docker') {
            steps {
                script {
                  withCredentials([
                        string(credentialsId: 'MONGODB', variable: 'MONGODB')
                    ]) {
                        docker.build('proyectos-micro:v1', '--build-arg MONGODB=${MONGODB} .')
                }
            }
        }
        }
        stage('Levantar contenedor') {
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGODB', variable: 'MONGODB')
                    ]) {
                        sh 'docker-compose up -d'
                }
            }
        }
    }

}
}

