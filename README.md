# [React Native](https://facebook.github.io/react-native/)

Fork of version 0.49.5.

Includes prebuilt Android JAR files.

See [building from source](https://github.com/facebook/react-native/wiki/Building-from-source).

To rebuild the JARs:

```bash
cd /path/to/ndk

wget https://dl.google.com/android/repository/android-ndk-r10e-darwin-x86_64.zip

unzip android-ndk-r10e-darwin-x86_64.zip

export ANDROID_NDK=/path/to/ndk/android-ndk-r10e

cd /path/to/react-native

./gradlew :ReactAndroid:installArchives --no-daemon
```

## License

React is [BSD licensed](./LICENSE). We also provide an additional [patent grant](./PATENTS).

React documentation is [Creative Commons licensed](./LICENSE-docs).
