# Meridian Editor GraphQL

[![Greenkeeper badge](https://badges.greenkeeper.io/joefraley/meridian-editor-graphql.svg)](https://greenkeeper.io/)
A Node GraphQL wrapper around Meridian's Python REST API.

![GraphiQL Interface Screenshot](https://www.evernote.com/l/Ae_dZrXHxzdFu5eXjwT1QTUbhx-b9MMP5dIB/image.png)

- [Example GQL/Dataloader Repo](https://github.com/applification/graphql-loader/blob/master/src/index.js)
- [GaphQLJS](https://github.com/graphql/graphql-js/tree/bc96406ab44453a120da25a0bd6e2b0237119ddf)
- [Dataloader](https://github.com/facebook/dataloader)

## Instructions
1. `git clone git@github.com:joefraley/meridian-editor-graphql.git && cd meridian-editor-graphql`
2. `yarn install`
3. Edit [this line](https://github.com/joefraley/meridian-editor-graphql/blob/master/data-loader/api.js#L6) manually:
  [![https://www.evernote.com/l/Ae9gTxVvWctDLK9dXNfuRAMniqmeEypQBFcB/image.png](https://www.evernote.com/l/Ae9gTxVvWctDLK9dXNfuRAMniqmeEypQBFcB/image.png)](https://github.com/joefraley/meridian-editor-graphql/blob/master/data-loader/api.js#L6)
  - Use [this endpoint](http://localhost:8091/api/#!/tokens/Token_List) to find a token manually.
4. `yarn start`
