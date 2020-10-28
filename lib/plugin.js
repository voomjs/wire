const Path = require('path')

class Plugin {
  /**
   * Get the path to the process working directory.
   *
   * @return {String}
   */
  static base () {
    return process.cwd()
  }

  /**
   * Import the given root module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static root (...paths) {
    return require(Path.resolve(this.base(), ...paths))
  }

  /**
   * Import the given config module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static config (...paths) {
    return this.root('config', ...paths)
  }

  /**
   * Import the given database module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static database (...paths) {
    return this.root('database', ...paths)
  }

  /**
   * Import the given models module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static models (...paths) {
    return this.root('models', ...paths)
  }

  /**
   * Import the given plugins module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static plugins (...paths) {
    return this.root('plugins', ...paths)
  }

  /**
   * Import the given public module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static public (...paths) {
    return this.root('public', ...paths)
  }

  /**
   * Import the given resources module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static resources (...paths) {
    return this.root('resources', ...paths)
  }

  /**
   * Import the given routes module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static routes (...paths) {
    return this.root('routes', ...paths)
  }

  /**
   * Import the given storage module.
   *
   * @param {...String} paths
   * @return {*}
   */
  static storage (...paths) {
    return this.root('storage', ...paths)
  }
}

module.exports = Plugin
