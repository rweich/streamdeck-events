# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.0](https://github.com/rweich/streamdeck-events/compare/v5.1.0...v6.0.0) (2024-03-03)


### ⚠ BREAKING CHANGES

* the minimal supported node version is now v18.17

### Miscellaneous Chores

* change ttypescript dependency to ts-patch ([46194f6](https://github.com/rweich/streamdeck-events/commit/46194f6acb96f7c69726f177593050f39bb9fbdd))
* **deps:** bump semver from 5.7.1 to 5.7.2 ([1e416a3](https://github.com/rweich/streamdeck-events/commit/1e416a31072237c338324cb2e37431b77c062d0f))
* remove support for node <18.17 ([9f37e45](https://github.com/rweich/streamdeck-events/commit/9f37e454c0864247f652a3807e971dfa5852cb7c))
* update dev-dependencies (major) ([19d0195](https://github.com/rweich/streamdeck-events/commit/19d01955d08cc72dfb383f8f6a91cf2a45dc9edc))

## [5.1.0](https://github.com/rweich/streamdeck-events/compare/v5.0.1...v5.1.0) (2023-07-02)


### Features

* Add support for dialDown and dialUp events ([9493ef1](https://github.com/rweich/streamdeck-events/commit/9493ef125ca29d87b75dda6e1126116ee6b46888))


### Miscellaneous Chores

* **deps:** bump http-cache-semantics from 4.1.0 to 4.1.1 ([fccd6d0](https://github.com/rweich/streamdeck-events/commit/fccd6d0073563424f24619b3bff71ff47fdbbeb3))
* Mark placcard component as deprecated ([4761bcb](https://github.com/rweich/streamdeck-events/commit/4761bcba5ead307a4355a295cae00fb5b3500f0c))

## [5.0.1](https://github.com/rweich/streamdeck-events/compare/v5.0.0...v5.0.1) (2023-01-08)


### Miscellaneous Chores

* **deps:** bump json5 from 1.0.1 to 1.0.2 ([118602e](https://github.com/rweich/streamdeck-events/commit/118602e5c9091c5bf3a3376ea65be9351ccccacb))

## [5.0.0](https://github.com/rweich/streamdeck-events/compare/v4.1.0...v5.0.0) (2022-12-27)


### ⚠ BREAKING CHANGES

* This commit does, unfortunately, have to break the API declared in 4.1.0 due to bad naming on my part in that version.

### Bug Fixes

* add missing "placcard" component type ([e380a15](https://github.com/rweich/streamdeck-events/commit/e380a15bed4316d65ec428328538960c51e3d1cd))
* add missing constraints to some feedback elements ([3f049fa](https://github.com/rweich/streamdeck-events/commit/3f049fac9feed63833670a499d9cfbaea319a133))
* synchronize bar types ([e0227b9](https://github.com/rweich/streamdeck-events/commit/e0227b992c1bc794469b8ef77592e1f5c81c9c68))

## [4.1.0](https://github.com/rweich/streamdeck-events/compare/v4.0.0...v4.1.0) (2022-12-18)


### Features

* Add support for custom layouts ([ade4b88](https://github.com/rweich/streamdeck-events/commit/ade4b881e7ef883598cd1bb6fc4c690e231ffc5e))


### Documentation

* Add some minor documentation for new events ([572029f](https://github.com/rweich/streamdeck-events/commit/572029f4d848ab05edef78a1c93acfc54d1745e0))


### Miscellaneous Chores

* Fix eslint complaints ([82048b8](https://github.com/rweich/streamdeck-events/commit/82048b879e733a1fa52b1655ec9835d92bfe1413))

## [4.0.0](https://github.com/rweich/streamdeck-events/compare/v3.1.4...v4.0.0) (2022-10-22)


### ⚠ BREAKING CHANGES

* change module-type in tsconfig to commonjs

### Bug Fixes

* change module-type in tsconfig to commonjs ([4c63ac3](https://github.com/rweich/streamdeck-events/commit/4c63ac32f64bb7b81b37c0db935e2527b600e7d7))
* don't run githooks on CI ([c61926e](https://github.com/rweich/streamdeck-events/commit/c61926eac81f22f53491819000e269a09d2d0c6f))


### Miscellaneous Chores

* update dependencies (major) ([810b15a](https://github.com/rweich/streamdeck-events/commit/810b15a17d2a43a7ce929000cf6c82569b2faea0))

### [3.1.4](https://github.com/rweich/streamdeck-events/compare/v3.1.3...v3.1.4) (2022-06-10)


### Miscellaneous Chores

* **deps-dev:** bump semantic-release from 19.0.2 to 19.0.3 ([d195625](https://github.com/rweich/streamdeck-events/commit/d195625530c30923e1aab0a1f34f7e56a14fb713))

### [3.1.3](https://github.com/rweich/streamdeck-events/compare/v3.1.2...v3.1.3) (2022-06-04)


### Miscellaneous Chores

* **deps:** bump npm from 8.5.5 to 8.12.0 ([b1d046a](https://github.com/rweich/streamdeck-events/commit/b1d046a3d1048b68175dd84c951edee2bdaed3fc))
* **deps:** bump semver-regex from 3.1.3 to 3.1.4 ([f469921](https://github.com/rweich/streamdeck-events/commit/f4699211b004c76273a4f64bc250bfa91963a1fe))

### [3.1.2](https://github.com/rweich/streamdeck-events/compare/v3.1.1...v3.1.2) (2022-03-30)


### Miscellaneous Chores

* add @types/node package ([08d8466](https://github.com/rweich/streamdeck-events/commit/08d8466a0a59eb5159f5bcfa7fc9d032109f874a))
* update to newest typebox package ([53f5441](https://github.com/rweich/streamdeck-events/commit/53f54415e1d792a6007814b440f68a2e5ff6572c))

### [3.1.1](https://github.com/rweich/streamdeck-events/compare/v3.1.0...v3.1.1) (2022-03-29)


### Miscellaneous Chores

* update dependencies ([ef9b46f](https://github.com/rweich/streamdeck-events/commit/ef9b46f285e6e7527f61e84e7350a4b35d233575))

## [3.1.0](https://github.com/rweich/streamdeck-events/compare/v3.0.1...v3.1.0) (2022-03-19)


### Features

* expose settings on key-events ([#21](https://github.com/rweich/streamdeck-events/issues/21)) ([249a39c](https://github.com/rweich/streamdeck-events/commit/249a39cfa761fd87a63849063045055d92afee3d))

### [3.0.1](https://github.com/rweich/streamdeck-events/compare/v3.0.0...v3.0.1) (2022-02-03)


### Bug Fixes

* validation of key-events ([9b5249d](https://github.com/rweich/streamdeck-events/commit/9b5249dc3657899cf4d1cbc349407a3065bd4a42))

## [3.0.0](https://github.com/rweich/streamdeck-events/compare/v2.0.0...v3.0.0) (2022-01-31)


### ⚠ BREAKING CHANGES

* the minimum required version of node is now v14.17

### Bug Fixes

* linting and test errors ([bdf9604](https://github.com/rweich/streamdeck-events/commit/bdf9604fef19ce02ac81a09d14c049630180aaa4))


### Miscellaneous Chores

* drop support for node v12 and v15 ([353f05d](https://github.com/rweich/streamdeck-events/commit/353f05df210e95b1de51b62ef3473079b61fbefb))
* update dependencies (major) ([4fa8c53](https://github.com/rweich/streamdeck-events/commit/4fa8c53724a161e35c5ae4ed0f2a5e054f859312))

## [2.0.0](https://github.com/rweich/streamdeck-events/compare/v1.4.0...v2.0.0) (2021-12-07)


### ⚠ BREAKING CHANGES

* the row/column props in keyup/keydown,
willappear/willdisappear and didreceivesettings events might be undefined now

### Features

* expose userdesiredstate prop in keyevents ([#14](https://github.com/rweich/streamdeck-events/issues/14)) ([9c7a5b6](https://github.com/rweich/streamdeck-events/commit/9c7a5b6dacad00ebb8ee1e2b6ad5fb9ecf101e3f))


### Bug Fixes

* wrong event specs for multiactions ([c8b1968](https://github.com/rweich/streamdeck-events/commit/c8b196855ed2a7c12714c0d447a0800aecce65d6))

## [1.4.0](https://github.com/rweich/streamdeck-events/compare/v1.3.5...v1.4.0) (2021-12-04)


### Features

* add state property to key events ([#14](https://github.com/rweich/streamdeck-events/issues/14)) ([c043b20](https://github.com/rweich/streamdeck-events/commit/c043b201189bad728e7533439b8e7a77109c51a9))

### [1.3.5](https://github.com/rweich/streamdeck-events/compare/v1.3.4...v1.3.5) (2021-09-15)


### Miscellaneous Chores

* update dependencies ([14db6dc](https://github.com/rweich/streamdeck-events/commit/14db6dc7c2184ea457ecfb004c4841564a0cf00a))

### [1.3.4](https://github.com/rweich/streamdeck-events/compare/v1.3.3...v1.3.4) (2021-09-01)


### Miscellaneous Chores

* update dependencies ([fffe56a](https://github.com/rweich/streamdeck-events/commit/fffe56a35556dfdfc7e9898fb286a468787684e5))

### [1.3.3](https://github.com/rweich/streamdeck-events/compare/v1.3.2...v1.3.3) (2021-08-28)


### Bug Fixes

* disable sourcmap generation ([30e19c7](https://github.com/rweich/streamdeck-events/commit/30e19c7d320e5dc2f799280e4d950c0a9eec78c2))


### Miscellaneous Chores

* upgrade deps (major) ([08404ab](https://github.com/rweich/streamdeck-events/commit/08404abe62e6cf68b6f4f4d7b39660402cbaa75b))

### [1.3.2](https://github.com/rweich/streamdeck-events/compare/v1.3.1...v1.3.2) (2021-08-05)


### Miscellaneous Chores

* **deps:** bump tar from 6.1.0 to 6.1.5 ([aee421e](https://github.com/rweich/streamdeck-events/commit/aee421e66483459152a6238e7e016c3c431d49d9))

### [1.3.1](https://github.com/rweich/streamdeck-events/compare/v1.3.0...v1.3.1) (2021-06-12)


### Miscellaneous Chores

* update dependencies ([2e49ce9](https://github.com/rweich/streamdeck-events/commit/2e49ce993cff8b41b222caca84ae2598d8393ee0))

# [1.3.0](https://github.com/rweich/streamdeck-events/compare/v1.2.0...v1.3.0) (2021-05-29)


### Features

* add Get/SetGlobalSettingsEvent ([d19e25a](https://github.com/rweich/streamdeck-events/commit/d19e25a4ab417d0c7ef2425d1913dbea1718cc62))
* add SetStateEvent ([b4f136c](https://github.com/rweich/streamdeck-events/commit/b4f136cb130c3a32834ccef372a7f37356861024))
* add ShowAlert/ShowOkEvent ([ce31347](https://github.com/rweich/streamdeck-events/commit/ce313473be1bf49ab8106d6be34f8e35f480b434))
* add SwitchToProfileEvent ([4a5b4f0](https://github.com/rweich/streamdeck-events/commit/4a5b4f0fb2a2e05481665c2797e8933415da3a15))
* add SystemDidWakeUpEvent ([7ee5237](https://github.com/rweich/streamdeck-events/commit/7ee523755e0031ba5042494d9b752b5e2c6f2f0f))
* add TitleParametersDidChangeEvent ([5f64c11](https://github.com/rweich/streamdeck-events/commit/5f64c114ffb6ab8ca7e1fb3c0d6df4fd07fca10e))

# [1.2.0](https://github.com/rweich/streamdeck-events/compare/v1.1.0...v1.2.0) (2021-05-23)


### Features

* add typeName prop to DeviceDidConnectEvent ([4e7b3d9](https://github.com/rweich/streamdeck-events/commit/4e7b3d9bfa775d68636772a5b334b99157e26526))

# [1.1.0](https://github.com/rweich/streamdeck-events/compare/v1.0.0...v1.1.0) (2021-05-23)


### Features

* add event names to the received plugin/pi events ([f9e3a29](https://github.com/rweich/streamdeck-events/commit/f9e3a294605840d30f1313baef5b6a9d24fd4ca1))

# 1.0.0 (2021-05-19)


### Features

* add createFromPayload() in streamdeck entrypoint ([aa6f40f](https://github.com/rweich/streamdeck-events/commit/aa6f40f3b0cf3f288685e599836436b3c9b9204f))
* add missing streamdeck-received events ([fd50373](https://github.com/rweich/streamdeck-events/commit/fd50373e427d7b91354ad3df7ada6e405b6d2e48))
* add some streamdeck events ([a647672](https://github.com/rweich/streamdeck-events/commit/a64767239a1fcc8088d1da3b0fabb7875213c22b))
* add streamdeck event (willappear) ([6fe19e3](https://github.com/rweich/streamdeck-events/commit/6fe19e379b8218db0a67b0318f94afbdcece396a))
* add streamdeck RegisterEvent ([a5d723f](https://github.com/rweich/streamdeck-events/commit/a5d723fd67858845e03c1fed9be5934e64c3a637))
* change the name prop of the register event ([4643dd0](https://github.com/rweich/streamdeck-events/commit/4643dd00ee316956a6da1f357a0766b3503bdbd9))
* create events ([c6b5d9b](https://github.com/rweich/streamdeck-events/commit/c6b5d9b711d0c10976b00a13538f4698e1207fa2))
