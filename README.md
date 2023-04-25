# github-action-copy-files

[![Continuous Integration](https://github.com/nearform-actions/github-action-copy-files/actions/workflows/ci.yml/badge.svg)](https://github.com/nearform-actions/github-action-copy-files/actions/workflows/ci.yml)

This action allows you to copy files from one location to another using glob patterns. It makes use of the `cpy` package to perform the file copying, and can be configured to copy files and directories that match specific patterns.

### Usage

Configure this action in your workflows providing the following inputs described below.

### Inputs

| Input            | Required | Default | Description                                                                                  |
|------------------|----------|---------|----------------------------------------------------------------------------------------------|
| `source`         | Yes      | N/A     | Source path of the files or directories to be copied. Supports glob patterns using [globby](https://github.com/sindresorhus/globby).          |
| `destination`    | Yes      | N/A     | Destination path where files or directories should be copied.                                 |
| `options`        | No       | `{}`    | Additional options that will be passed to `cpy`. See [`cpy` documentation](https://github.com/sindresorhus/cpy#options) for more information. |

### Example usage

The example below shows how to use the `github-action-copy-files` action to copy files from the `src` directory to the `build` directory. Additional options such as `overwrite`, and `flat` are passed to the `cpy` function using the `options` input.:

```yaml
name: Copy files

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: nearform-actions/github-action-copy-files@v1
        with:
          source: './src/**'
          destination: './build/'
          options: |
            {
              "overwrite": true,
              "flat": true
            }
```
