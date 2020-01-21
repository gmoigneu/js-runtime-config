# Runtime configuration of a static JS build

1. Look at `build-config.sh` where env vars are being put in a static json file
2. `pages/index.vue` loads the config in order to request the API with the correct token.