import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions> {
  scrollBehavior(to, _from, savedPosition) {
    const lastpath  = to.path.substring(0,6);
    const newpath = _from.path.substring(0,6);
    if (lastpath == newpath) {
      return savedPosition
    } else {
      window.scrollTo(0, 0)
    }
  }
}