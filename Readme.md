# Book Store (using Typescript)

### Installation

```
$ npm install
```

### Run tests

```
$ npm test
```

## Notes/Assumptions

No command line to run the app has been set up. Please refer to specific test case `Kelly buys book from Bob` in `./src/store/__tests__/Store.spec.ts` to test all the transaction scenarios.

1. Each Shopper has its own Store where products are listed, like an ebay store type marketplace.
2. Can add one product (Book) at a time for sale via Shopper, otherwise Store takes an array and loops over to add the product into Shopper.
3. For the sake of simplicity, Book and Shopper \_name properties are unique, no unique id or uuid set up.
4. Only tested happy path scenarios, though have some Error handling at places but need some more work.
5. Price is cents that can be formatted later in dollars for user display.
