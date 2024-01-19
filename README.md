## JS + React Testing:

1. Clone the repo to your local
2. Checkout to main and run `yarn install`

## For testing activity

1. Create a file `add.test.ts` under utils folder and test the `add` function.
2. Open the components folder and create a test for the `List` and `ListItem` component.
- Create `List.test.tsx` and `ListItem.test.tsx` under components folder.
- For the `List.tsx` component, add a test that will check the number of list and the content of the first item.
- For the `ListItem.tsx` component, add a test that will check if the `title` and `description` renders correctly.

### For testing
- Run:
```bash
  yarn test
```