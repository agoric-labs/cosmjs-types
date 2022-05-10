# Compatibility with Hardened JS Compartments

The point of this fork is to allow using cosmjs-types within a [Hardened JS compartment](https://github.com/endojs/endo/tree/master/packages/ses/README.md), such as in a smart contract on the [Agoric](https://agoric.com) blockchain.

Just do:

```sh
# For NPM:
npm i -D agoric-labs/cosmjs-types#Agoric-built
# For Yarn:
yarn add -D cosmjs-types@agoric-labs/cosmjs-types#Agoric-built
```

If you don't trust the minified code, you can browse the [patched source
tree](https://github.com/agoric-labs/cosmjs-types/tree/Agoric#readme).  We produced
`Agoric-built` with:

```sh
yarn build
git checkout -B Agoric-built
git rm -rf bin scripts src .??*
for d in $(cd build && ls); do git add -f "$d"; done
git commit -a -m 'Built by `yarn build`'
git push -f origin Agoric-built
```

Have fun,
The team at [Agoric](https://github.com/Agoric).

---

We now return you to the regularly-scheduled (though slightly outdated) README
from https://github.com/confio/cosmjs-types#readme:

# cosmjs-types

## Maintenance

This section is for maintainers of this repo, not users.

### Getting started

```sh
# Ensure Large File Storage is enabled.
# https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage
git lfs install
```

```sh
# Pull external code
git submodule init
git submodule update

# Install dependencies
yarn install

# Setup SDK for IDE support (see https://next.yarnpkg.com/getting-started/editor-sdks)
yarn dlx @yarnpkg/sdks vscode
```

### Rebuilding types

```sh
yarn codegen # Generate .ts files into ./src
yarn build # Build .js/.d.ts files
```
