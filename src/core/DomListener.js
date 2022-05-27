/** */
export class DomListener {
  // eslint-disable-next-line require-jsdoc
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
  }
}
