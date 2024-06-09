pipeline {  
      
    agent any

        environment {        
        MONGODB = credentials('MONGODB') 
        COMPOSE_FILE = 'docker-compose.yml'
        }
    
    
        stages {
        stage('Detener y eliminar contenedores anteriores'){
            steps{
                sh 'docker stop despliegue_node_app_1_1 despliegue_node_app_2_1 despliegue_node_app_3_1 despliegue_proyecto_grande_1 despliegue_nginx_1'
                sh 'docker rm despliegue_node_app_1_1 despliegue_node_app_2_1 despliegue_node_app_3_1 despliegue_proyecto_grande_1 despliegue_nginx_1'
            }
        }

        stage('Eliminar imagenes anteriores'){
            steps{                
                sh 'docker rmi despliegue_node_app_1 despliegue_node_app_2 despliegue_node_app_3 despliegue_proyecto_grande despliegue_nginx'
            }
        }
                      
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
        stage('Construir y levantar contenedores con Docker Compose') {
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
post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "carlososoa@gmail.com",
                from: "jenkins@est.iudigital.edu.co"
            )
        }
    }

}

