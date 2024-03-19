import { initializeAuthProxy } from '@propelauth/auth-proxy'

// Replace with your configuration
await initializeAuthProxy({
    authUrl: "https://838362313.propelauthtest.com",
    integrationApiKey: "a5f370e24892b6db7b63f0ac967deabf7eba9415d56bb26d6171a207d99df046535119a7e72d69f5a14610aaedd60931",
    proxyPort: 8000,
    urlWhereYourProxyIsRunning: 'http://localhost:8000',
    target: {
        host: 'localhost',
        port: 8501,
        protocol: 'http:'
    },
})