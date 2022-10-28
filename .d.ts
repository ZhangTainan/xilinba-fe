export {}
 
declare module 'vue' {
  interface ComponentCustomProperties {
    $router: any,
  }
}