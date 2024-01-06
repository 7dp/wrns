declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: 'qa' | 'production'
    BASE_URL: string
  }

  export const Config: NativeConfig
  export default Config
}
