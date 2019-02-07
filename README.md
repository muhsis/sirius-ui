# nitro-ui

This is a design system / React UI library. It works with styled-components and
styled-system.

## Git

Here's what you need to watch out while using git in this repository.

### Commit Messages

We categorise git commit messages based on the work being done. There are some tags
you need to use before the actual commit message.

- All commit messages should be lowercase.
- You can use `()` parantheses after the tag. For example `feat(documents) : ...`.

Here's the list for commit tags:

- `feat` : Use it when developing a new feature.
- `fix` : Use it when fixing a bug or broken functionality.
- `chore` : Not strictly development related tasks. Maintainance etc.
- `refactor` : Use when refactoring an existing code.
- `docs` : Use when documenting stuff.
- `build` : Use when doing a task related to build, continous integration, package publishing etc.
- `perf` : Use when doing a task that will improve performance.
- `ci` : Continous integration related stuff.
- `revert` : Reverting some previous operation.
- `style` : Only visual stuff.
- `test` : Tasks relating to testing suite.

Here you can find some sample commit messages.

`fix(addScope): only throw when defaultScope is defined`
`docs: changelog for 5.0.0-beta.10`
`chore(package): update @semantic-release/npm to version 4.0.0`
`feat: association hooks`
`feat(postgres): drop enum support`
`feat(validation): improve validation for type`
`refactor: indexes and uniqueKey`
`performance: remove terraformer-wkt-parser dependency`
