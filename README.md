<p align="center">
  <img src="https://i.imgur.com/VVdRJEf.png" width="300px" />
</p>

<h2 align="center">Changes Sidebar SDK</h2>

<p align="center">
  The sidebar SDK makes it possible to hide and show a changelog on Changes using a programmable sidebar. This SDK is powered by <a href="https://github.com/varld/changelog-core">the Core SDK</a>.
</p>

## Useful Links

- [Why keep a changelog](https://changes.blue/guide/why/changelog)
- [How to keep a good changelog](https://changes.blue/guide/howto/changelog)
- [Using the sidebar](https://changes.blue/guide/client/bar) 
- [How to use Changes in React](https://changes.blue/guide/client/react)

## Installation

```bash
# npm
npm install changelog-sidebar

# yarn
yarn add changelog-sidebar
```

## Usage 

```js
import Sidebar from 'changelog-sidebar';

// Instantiate the sidebar
let sdk = new Sidebar({
  id: '5Web2XRF',
  key: 'IK-X2zvTYjp-NCg-3q2Rj'
});

// Toggle the sidebar
sdk.toggle();

// Open the sidebar
sdk.open();

// Close the sidebar
sdk.close();
```

## API

### `new SidebarSDK(options)`

Create a new sidebar-instance.

#### `options`

Type: 

```js
{
  id: string;
  key: string;
  element: string;
}
```

### `sdk.open()`

Open the sidebar programmatically.

### `sdk.close()`

Close the sidebar programmatically.

### `sdk.toggle()`

Open or close the sidebar programmatically.
