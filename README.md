# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/huydieu9296/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/huydieu9296/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the make.fun bounty: [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

## The entry

> All servers are down, including the one that tells you servers are down. I don't know why yet, but I'm very sorry and slightly panicking.

**137 characters** (limit: 160).

The joke is the recursion: the status page that is supposed to announce the outage is itself one of the servers that went down, so the only honest update left is an apology from someone who has no idea what broke yet — and is slightly panicking about it.

## How it works

`main.ts` is a small Node 22 / TypeScript program with zero dependencies and no network access. It:

1. Reads `entry.txt` from the same folder as the script itself (resolved from the script's own module URL, so it works from any current working directory).
2. Validates the entry: it must decode as strict UTF-8, be exactly one line (no `\r` or `\n`, not even a trailing newline), be 1–160 characters long counting Unicode code points, and contain visible text rather than only whitespace. Any failure prints an error to stderr and exits with code 1.
3. Writes the entry bytes to `entry.txt` inside the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory if needed.
4. Reads the output back and verifies it is byte-identical to the source, failing loudly if it is not.
5. On success prints the output path, the character count, the byte count, and the entry text.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Node 22 can run the TypeScript file directly — no build step and no install step are needed.
