# notehub-js

The notehub-js library is a JavaScript implementation for communicating with the Notehub API
generated by the [OpenAPI Generator](https://openapi-generator.tech) tool.

This library is auto-generated via the `openapi.yaml` file from the Blues Wireless Notehub project and published
to [npm](https://www.npmjs.com/package/@blues-inc/notehub-js) as a library for ease of use in JavaScript-based projects.

## Table of Contents

tbd

## Installation of the notehub-js library

Using npm:

```shell
$ npm install @blues-inc/notehub-js
```

Note: add --save if you are using npm < 5.0.0

Once the package is installed, you can import the library using `require`:

```javascript
require example here
```

## Examples

code example here

Coming soon. We'll also provide links to this library being used in real projects.

## Further Library Documentation & Examples

Code examples of how to use each of the Notehub endpoints are located in the [`src/docs/`](src/docs/) folder.

Each endpoint had a `.md` file displaying:

- All the HTTP methods it supports,
- A full URL string of what the HTTP request looks like (including required and optional parameters),
- An example of how to implement the code for a particular method inside of a JavaScript application,
- A sample return type from an endpoint,
- Required authorization to access the endpoint.

## Project Structure

As this project is partially generated via the OpenAPI Generator tool, it has a rather unique structure and some important files to be aware of.

### High level full project overview

```.
├── .github/
│   └── workflows/
│       └── GH Action files
├── libTemplate/
│   └── template files
├── src/
│   ├── src/
│   │   └── JS-based API and model files
│   ├── docs/
│   │   └── MD documentation
│   ├── test/
│   │   └── unit tests
│   └── dist/
│       └── bundled src/ folder for npm
├── openapi.yaml
├── config.json
├── README.md
└── package.json
```

### Root folder

The [`.github/`](.github/) folder holds the GitHub Action workflows that automate common tasks in the repo. See [Modifying the Project](#modifying-the-project) section for further information.

The [`openapi.yaml`](openapi.yaml) file is a key player for this whole project: it provides the documentation of all the Notehub API endpoints that the OpenAPI Generator uses to build the library - without this file, this project doesn't exist.

The [`libTemplate/`](/libTemplate/) folder at the root of the project, is the JavaScript library template that the OpenAPI generator uses to generate the `src/` folder where auto-generated JS library is created.

> **NOTE:** In many scenarios, downloading the OpenAPI generator library template is not necessary, but there were some [minor modifications](https://openapi-generator.tech/docs/templating/#modifying-templates) needed in the template's rules to handle `null` and `undefined` values in the same way that the original Notehub API handles them. Being able to download and modify those files offered the fine-grained control needed when generating the JS library code.
>
> If you ever need see a fresh copy of the JS library template, run the following script command in the terminal:
>
> ```shell
> $ npm run downloadJsTemplate
> ```

The [`config.json`](config.json) file is a configuration file of additional properties used by the OpenAPI Generator and its JavaScript library template to define certain variables like license type, project name, project version, etc.

### `src/` folder

The `src/` folder contains the contents of the `notehub-js` library that is eventually [published to npm](https://www.npmjs.com/package/@blues-inc/notehub-js), including:

- The [`docs/`](src/docs/) folder documenting how to access each endpoint via the library,
- The internal [`src/`](src/src/) folder that holds the JavaScript-based `api` and `model` files for each endpoint,
- The [`test/`](src/test/) folder for unit tests,
- And the `dist/` folder that is the packaged up final version of the library shipped to npm.

> **NOTE:** Do not modify the files in the `src/src/` folder and the `README.md` - these are all auto-generated by the OpenAPI Generator tool and the next time the generator command is run to update the library any manual changes will be overwritten.

## Usage

Instructions for how to modify or run this project locally.

### Initial Project Setup & Dependencies

This project uses [Node.js](https://nodejs.org/en/) as a runtime, [npm](https://www.npmjs.com/) as a package manager, and [Volta](https://volta.sh/) as a way of enforcing consistent versions of all JavaScript-based tools. You can install these dependencies by completing the steps below.

1. Install Volta by following its [installation instructions](https://docs.volta.sh/guide/getting-started).
2. Run the command below in a terminal to install the appropriate versions of both Node.js and npm.

```shell
$ volta install node npm
```

3. Navigate to the root of the folder in your terminal or command prompt and run `npm install`, which installs the repo's npm dependencies.

```shell
$ npm install
```

It also uses the [OpenAPI Generator's CLI tool](https://openapi-generator.tech/docs/installation), so we recommend installing that tool globally through the terminal.

```shell
$ npm install @openapitools/openapi-generator-cli -g
```

Now you should be ready to make any changes or modifications the repo you'd like.

### Modifying the Project

Most of the files stored at the root of this project should require little to no modifications.

The [`lib/template`](libTemplate/) folder holds the JavaScript generator template files the OpenAPI Generator tool relies upon to build its library in the `src/` folder.

The [`.github/`](.github/) folder holds a set of GitHub Action workflows that automate common tasks like [creating PRs](.github/workflows/create-pr.yml) out of new branches, running tests against PRs, and publishing new releases to npm.

The [`openapi.yaml`](openapi.yaml) file is a copy of the one in the Notehub repo (a private Blues repository). Anytime a new version of Notehub is deployed and the `openapi.yaml` file there is updated, a fresh copy of that file is added to this project in a new branch via a GitHub Action workflow.

The [`config.json`](config.json) file is the one that will require very slight changes before a new version of the library is released to npm. The [next section](#updating-the-auto-generated-notehub-js-library) will elaborate further.

#### Updating the auto-generated notehub-js library

When the `openapi.yaml` file is updated in the original Notehub repo which this library supports, the updated file is copied over into a new feature branch in this repo through the magic of GitHub Actions.

When this occurs, it's time to update the generated JavaScript library based on the newly updated `openapi.yaml` file.

**To regenerate the notehub-js library:**

1. Pull down the newly created remote branch from GitHub. (It will be named something like `feat-XYZ`.)
2. Update the `config.json` file at the project's root so the `projectVersion` parameter is incremented (please follow [semantic versioning](https://semver.org/) practices here).
3. At the root of the project, run the following script command from your terminal:

```shell
$ npm run generateDocs
```

This command will kick off the OpenAPI Generator tool to generate a new copy of the library inside of the `src/` folder, which can then be released to npm.

### Running the project locally

If you'd like to test some changes you've made to the notehub-js API locally before submitting a new PR to the repo, tbd

## Deploying notehub-js

Although many of the processes around this repository are automated with GitHub Actions, publishing an updated version of the repo requires some light human interaction as well.

Below are the necessary steps to take a new version of the `openapi.yaml` file and make it ready to deploy to npm.

### Steps to publish an updated npm version of this repo

1. Adjust the version number in the `config.json` file.
2. Run `npm run generateDocs` to generate new docs for updated `openapi.yaml` file (the )
3. Commit and push the changes to a new branch in GitHub
4. Cut a new release following the [semantic versioning](https://semver.org/) style of [vX.X.X]. For example: a new release named v1.0.2.
5. After the GitHub Action workflow `publish-npm.yml` has successfully deployed the latest version, copy the

## Contributing

We love issues, fixes, and pull requests from everyone. By participating in this project, you agree to abide by
the Blues Inc. [code of conduct].

For details on contributions we accept and the process for contributing, see our
[contribution guide](CONTRIBUTING.md).

### Resources

- Changelog
- Contributing guide
- Code of Conduct

## More Information

Coming soon.

## To learn more about Blues Wireless, the Notecard and Notehub, see:

- [blues.com][blues]
- [notehub.io][notehub]
- [Blues Developer Experience Site][blues.dev]

## License

Copyright (c) 2023 Blues Inc. Released under the MIT license. See
[LICENSE](LICENSE) for details.

[blues]: https://blues.com
[blues.dev]: https://blues.dev
[code of conduct]: https://blues.github.io/opensource/code-of-conduct
[notehub]: https://notehub.io
