import 'react-native';

declare global {
  namespace NodeJS {
    interface Global {
      FormData: FormData;
    }
  }
}