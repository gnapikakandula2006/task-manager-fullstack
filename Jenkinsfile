pipeline {
  agent any

  environment {
    NODE_HOME = tool name: 'Node 18', type: 'NodeJS'
    MAVEN_HOME = tool name: 'Maven 3.9', type: 'maven'
    PATH = "${env.NODE_HOME}/bin:${env.MAVEN_HOME}/bin:${env.PATH}"
  }

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/gnapikakandula2006/task-manager-fullstack.git'
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

    stage('Deploy') {
      steps {
        echo 'Deploy steps go here (e.g., run JAR, copy frontend to server)'
      }
    }
  }
}