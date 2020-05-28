# Stock Picker
Rest service api that returns stock ticker prices using the yahoo finance api
API Documentation available in the swagger.yaml file in this repository


# Local Installation

## Requirements

- node >= 14.0.0

## Installation

```
npm install
```

Create .env file
```
cp .env.example .env
```

## Local launch

```
npm run start
```

# Docker run
```
docker-compose up
```


# Tests

## Unit Tests
```
npm run tests:unit
```

## Integration Tests
```
npm run tests:integration
```


## View Tests Coverage
```
open coverage_integration/index.html
```
