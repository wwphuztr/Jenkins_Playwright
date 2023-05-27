pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    }
  }
  environment {
    NPM_CONFIG_PREFIX = "${WORKSPACE}/.npm-global" // Set npm prefix directory
    PATH = "$PATH:${NPM_CONFIG_PREFIX}/bin" // Add npm prefix bin directory to PATH
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm config set prefix "${NPM_CONFIG_PREFIX}"
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
