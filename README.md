# Station DEX: Front End Interfaces

An open source repository for all Station DEX front end interfaces maintained by Station DEX.

# How to List Your Token in Station Dex?

- Clone the repository
- Add your token to `apps/web/public/lists/<CHAIN_ID>.json` file.
- Open a Pull Request (PR), with proper description, and relevant URLs.

We will review your Pull Request, and your token will be ready to trade, after the PR gets merged.


## Interfaces

- Web: [app.stationdex.com](app.stationdex.com)

## Uniswap Whitepapers

- [V3](https://uniswap.org/whitepaper-v3.pdf)
- [V2](https://uniswap.org/whitepaper.pdf)
- [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)

## Apps

For instructions per application or package, see the README published for each application:

- [Web](apps/web/README.md)

## 🗂 Directory Structure

| Folder      | Contents                                                                       |
| ----------- | ------------------------------------------------------------------------------ |
| `apps/`     | The home for each standalone application.                                      |
| `config/`   | Shared infrastructure packages and configurations.                             |
| `packages/` | Shared code packages covering UI, shared functionality, and shared utilities.  |
