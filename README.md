<div align="center">
    <h1>Renault API</h1>
    <p>Resources url and models to use the Renault API</p>
</div> 

<div align="center">

[![github ci](https://img.shields.io/github/actions/workflow/status/remscodes/renault-api/npm-ci.yml.svg?logo=github&label=CI&style=for-the-badge)](https://github.com/remscodes/renault-api/actions/workflows/npm-ci.yml)
[![npm version](https://img.shields.io/npm/v/@remscodes/renault-api.svg?style=for-the-badge&logo=npm)](https://www.npmjs.org/package/@remscodes/renault-api)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@remscodes/renault-api.svg?style=for-the-badge)](https://bundlephobia.com/package/@remscodes/renault-api)
[![license](https://img.shields.io/github/license/remscodes/renault-api.svg?style=for-the-badge)](LICENSE)

</div>

> Get everything you need to use the Renault API into TypeScript/JavaScript project.

## Installation

```shell
npm install @remscodes/renault-api
```

## Usage

Use `GigyaApi` or `KamereonApi` properties to get the url you want.

Each property has its own __JSDoc__ to describe what the corresponding request needs to work.

Examples :

```ts
import { GigyaApi } from '@remscodes/renault-api';
import type { LoginInfo } from '@remscodes/renault-api';

const url = new URL(GigyaApi.LOGIN_URL);
url.searchParams.set('apikey', GigyaApi.KEY);
url.searchParams.set('loginID', 'my-renault-login');
url.searchParams.set('password', 'my-renault-password');

const result: LoginInfo = await fetch(url, { method: 'POST' }).then(r => r.json());
```

```ts
import { KamereonApi } from '@remscodes/renault-api';
import type { BatteryStatus } from '@remscodes/renault-api';

const accountId = 'a1b2c3d4-xxxxxxxx';
const vin = 'VF1XXXXXXXXXXX';

const url = new URL(KamereonApi.READ_BATTERY_STATUS_URL(accountId, vin));
url.searchParams.set('country', 'FR');

const headers = {
  apikey: KamereonApi.KEY,
  'x-gigya-id_token': 'my-token',
  accept: 'application/json'
};

const result: BatteryStatus = await fetch(url, { method: 'GET', headers }).then(r => r.json());
```

## Disclaimer

This project is not affiliated with, endorsed by, or connected to Renault. I accept no responsibility for any consequences, intentional or accidental, resulting from interaction with the Renault's API using this project.

## Credit

Resources API based on [Renault API](https://github.com/hacf-fr/renault-api) (hacf-fr) and [PyZE](https://github.com/jamesremuscat/pyze) (jamesremuscat).

## License

[MIT](LICENSE) © Rémy Abitbol.

