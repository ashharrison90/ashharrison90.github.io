module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: ['http://localhost:8080'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
