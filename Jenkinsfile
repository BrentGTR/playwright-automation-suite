
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/BrentGTR/testing-framework.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}
  