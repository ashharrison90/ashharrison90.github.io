module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'non-composited-animations': 'off',
        'unused-javascript': 'off',
      },
    },
    collect: {
      staticDistDir: './out',
      url: ['http://localhost:8080'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
