module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MadlibForm',
      externals: {
        react: 'React'
      }
    }
  }
}
