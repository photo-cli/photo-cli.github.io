---
sidebar_position: 1
---

# Installation

Important note: This application is a [command line tool](https://en.wikipedia.org/wiki/Command-line_interface) which don't have any user interface. To use this application, basic knowledge of how to run and send arguments to CLI applications is a must.

1. Installing [.NET 6 runtime](https://dotnet.microsoft.com/download/dotnet/6.0) for your platform (Linux, macOS, Windows).

2. Install or update with these commands both on Linux, macOS, Windows;

Install:
```shell
dotnet tool install photo-cli -g
```

To update newer version:
```shell
dotnet tool update photo-cli -g
```

3. Installing the tool globally provides access to the `photo-cli` command in your terminal.

```
photo-cli [command]

photo-cli help [command]
```

Note: You may test commands on [test photographs](https://github.com/photo-cli/photo-cli/tree/main/docs/test-photographs/) which has coordinates and photograph taken dates in it.

4. (For macOS and Linux) You should add your `.dotnet/tools` (path may change for your installation choices) to your PATH environment variable.

For macOS - Z Shell add the following line to your `~/.zshenv` file.
```
export PATH="$PATH:/Users/[your-account-name]/.dotnet/tools"
```

For Linux Bash add the following line to your `~/.profile` file.
```
export PATH="$PATH:/home/ac/.dotnet/tools"
```