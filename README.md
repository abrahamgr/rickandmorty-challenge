# Code challenge

Get characters from [https://rickandmortyapi.com/api/character?species=Human&status=alive&gender=female](https://rickandmortyapi.com/api/character?species=Human&status=alive&gender=female) and display a list of items.
Response are defined as `interfaces` in [types](src/types.ts)

## Challenges

- Get items for the given API and displa as `<ul>` and `<li>` after render the `<App>`
- Create components as needed and convert any style (when needed) to `styled-components`
- When user click on any item (click on `<li>`) it will be selected
- If item is already selected and it's clicked again it will unselect itself
- `Up` and `Down` buttons will be displayed only for `selected` item
- When an items is selected and you click on `Up` and `Down` buttons or pressing `Up` and `Down` arrows on keyboard items selected will be the next one or previous one
