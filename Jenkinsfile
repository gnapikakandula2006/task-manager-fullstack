pipeline {
  agent any

  tools {
    nodejs 'Node18'
    maven 'Maven 3.9'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/gnapikakandula2006/task-manager-fullstack.git'
      }
    }

    stage('Build Backend') {
      steps {
        dir('task-manager-backend') {
          sh 'mvn clean install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('task-manager-frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Docker Build & Run') {
  steps {
    script {
      def composePath = "${env.WORKSPACE}/docker-compose.yml"
      sh "docker-compose -f ${composePath} build"
      sh "docker-compose -f ${composePath} up -d"
    }
  }
}


    stage('Deploy') {
      steps {
        echo 'Deploy steps go here (e.g., run JAR, copy frontend to server)'
      }
    }
  }
}