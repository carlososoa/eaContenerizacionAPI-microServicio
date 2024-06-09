pipeline {  
      
    agent any

        environment {        
        MONGODB = credentials('MONGODB') 
        COMPOSE_FILE = 'docker-compose.yml'
        }
    
    
        stages {          
        stage('Clonar repositoriorios') {
            steps {
                script {
                    // Clonar los repositorios en carpetas separadas
                    dir('MicroGestorProyectosIUD'){
                        git branch: 'main', url: 'https://github.com/carlososoa/eaContenerizacionAPI-microServicio'

                    }
                    dir('GestorProyectosIUD'){
                        git branch: 'main', url: 'https://github.com/carlososoa/eaContenerizacionAPI-monolito'
                    }
                    dir('nginx'){
                        git branch: 'main', url: 'https://github.com/carlososoa/nginx-balanceador'
                    }                    
                    
                }
                
            }
        }
        stage('Mover docker-compose.yml') {
            steps {
                script {
                    // Mover el archivo docker-compose.yml fuera de las carpetas de los repositorios
                    sh 'mv ./nginx/docker-compose.yml ./'
                }
            }
        }
        stage('Construir y levantar contenedores conn Docker Compose') {
            steps {
                withCredentials([string(credentialsId: 'MONGODB', variable: 'MONGODB')]) {
                    script {
                        // Exportar la variable de entorno para Docker Compose
                        sh 'export MONGODB=$MONGODB'
                        
                        // Construir las imágenes y levantar los contenedores usando docker-compose
                        sh 'docker-compose -f $COMPOSE_FILE build --build-arg MONGODB=$MONGODB'
                        sh 'MONGODB=$MONGODB docker-compose -f $COMPOSE_FILE up -d'
                    }
                }
            }
        }
        

}
}

