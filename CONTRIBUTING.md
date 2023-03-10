# Contributing to blues/notehub-js

We love pull requests from everyone. By participating in this project, you
agree to abide by the Blues Inc [code of conduct].

[code of conduct]: https://blues.github.io/opensource/code-of-conduct

Here are some ways _you_ can contribute:

- by using alpha, beta, and prerelease versions
- by reporting bugs
- by suggesting new features
- by writing or editing documentation
- by writing specifications
- by writing code ( **no patch is too small** : fix typos, add comments,
  clean up inconsistent whitespace )
- by refactoring code
- by closing [issues][issues]
- by reviewing patches

[issues]: https://github.com/blues/notehub-js/issues

## Submitting an Issue

- We use the [GitHub issue tracker][issues] to track bugs and features.
- Before submitting a bug report or feature request, check to make sure it
  hasn't already been submitted.
- When submitting a bug report, please include a [Gist][] that includes a stack
  trace and any details that may be necessary to reproduce the bug, including
  your release version, stack, and operating system. Ideally, a bug report
  should include a pull request with failing specs.

[gist]: https://gist.github.com/

## Cleaning up issues

- Issues that have no response from the submitter will be closed after 30 days.
- Issues will be closed once they're assumed to be fixed or answered. If the
  maintainer is wrong, it can be opened again.
- If your issue is closed by mistake, please understand and explain the issue.
  We will happily reopen the issue.

## Submitting a Pull Request

1. [Fork][fork] the [official repository][repo].
2. [Create a topic branch.][branch]
3. Implement your feature or bug fix.
4. Add, commit, and push your changes. Please try to use [conventional commits][conventional commits] when pushing changes - this will ensure better changelog documentation when the next release is cut.
5. [Submit a pull request][pr] with a conventional commit title.

> **NOTE:** Examples of many of the conventional commit types accepted are visible in the [`publish-npm.yml`](/.github/workflows/publish-npm.yml) file under the `Generate release changelog` step.

## Notes

- Please add tests if you changed code. Contributions without tests won't be accepted.
  - There are many test shells already mocked out in the [`src/test/`](src/test/) folder that just need to be uncommented and filled in.
  - Run unit tests from the command line via `npm run test`.
- If you don't know how to add tests, please put in a PR and leave a comment asking for help.
  We love helping!

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already established in the code.

- Spacing:

  - Use two spaces for indentation. No tabs.

- Quotes:

  - Double-quoted strings are preferred to single-quoted strings.

- Comments:

  - Please use single-line comments to annotate significant additions, & JSDoc-style comments for functions.

[repo]: https://github.com/blues/notehub-js/tree/master
[fork]: https://help.github.com/articles/fork-a-repo/
[branch]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
[pr]: https://help.github.com/articles/creating-a-pull-request-from-a-fork/
[conventional commits]: https://www.conventionalcommits.org/

Inspired by
https://github.com/thoughtbot/factory_bot/blob/master/CONTRIBUTING.md
