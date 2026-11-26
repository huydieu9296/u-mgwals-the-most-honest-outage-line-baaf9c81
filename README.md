# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/huydieu9296/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/huydieu9296/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

A make.fun bounty entry: [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

## The entry

> All servers are down, including the one that tells you servers are down. I don't know why yet, but I'm very sorry and slightly panicking.

**137 characters** (limit: 160).

## How it works

`main.ts` reads the single funny line from `entry.txt` (kept next to the program), validates it — exactly one line, 1–160 characters, valid UTF-8, no CR/LF anywhere — then writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and verifies the written file matches before reporting success. It runs with no network, from any working directory, and works in a read-only `/bot` directory.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
