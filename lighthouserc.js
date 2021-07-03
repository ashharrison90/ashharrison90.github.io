module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off', // can't set the csp effectively with a static site in github pages
        'unused-javascript': 'off', // nextjs prefetching pages
        'uses-responsive-images': ['error', { maxLength: 1 }], // hero cutout image
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
