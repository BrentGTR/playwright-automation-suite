
# Testing Framework

## Overview

This is a comprehensive testing framework designed for UI, API, and mobile testing. It includes integration with CI/CD pipelines, logging, and monitoring.

## Capabilities

- **UI Testing**: Automated testing of web user interfaces using Playwright.
- **API Testing**: Automated API tests using Playwright.
- **Mobile Testing**: Automated testing of mobile web applications using Playwright.
- **BDD**: Behavior-Driven Development using Cucumber.js.
- **Logging**: Centralized logging with Winston.
- **CI/CD Integration**: Continuous integration and continuous deployment setup with GitHub and Jenkins.
- **Monitoring**: Real-time monitoring using Grafana and Prometheus.

## Project Structure

```
/testing-framework
├── .github
│   └── workflows
│       └── ci.yml
├── docker
│   ├── prometheus
│   │   └── prometheus.yml
│   ├── grafana
│   │   └── grafana.ini
│   ├── loki
│   │   └── loki-config.yaml
│   └── promtail
│       └── promtail-config.yaml
├── src
│   ├── tests
│   │   ├── ui
│   │   │   └── login.test.js
│   │   ├── api
│   │   │   └── user.test.js
│   │   ├── mobile
│   │   │   └── mobileLogin.test.js
│   │   ├── data
│   │       └── testData.json
│   ├── features
│   │   └── step_definitions
│   ├── utils
│   │   ├── logger.js
│   │   ├── config.js
│   │   └── dataManager.js
│   ├── core
│   │   ├── ui
│   │   │   ├── basePage.js
│   │   │   ├── pageFactory.js
│   │   │   └── uiHelpers.js
│   │   ├── api
│   │   │   ├── apiClient.js
│   │   │   └── apiHelpers.js
│   │   ├── mobile
│   │   │   ├── mobileClient.js
│   │   │   └── mobileHelpers.js
│   │   └── bdd
│   │       ├── cucumberConfig.js
│   │       └── stepDefinitions.js
│   └── llm
│       ├── generateTests.js
│       └── updateTests.js
├── .env
├── docker-compose.yml
├── Jenkinsfile
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies**: `npm install`
2. **Run tests**: `npm test`
3. **Start Docker services**: `docker-compose up`

## Author

Brent Singh
[GitHub](https://github.com/BrentGTR)
  