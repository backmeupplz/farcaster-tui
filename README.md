# farcaster-tui

A terminal-based Farcaster client. Read and write to the Farcaster network directly from your terminal using Hub HTTP APIs.

## Features

- Browse your home feed (casts from accounts you follow)
- View user profiles and cast history
- Read threads and replies
- Search users by username or FID
- View notifications (mentions)
- Compose and publish casts
- Like, recast, reply, follow/unfollow
- Multiple signer support with encrypted key storage
- Configurable hub URL (default: hub.merv.fun)
- Vim-style navigation
- No data caching — always fresh from the hub

## Install

### npm (requires [Bun](https://bun.sh))

```bash
bun install -g farcaster-tui
farcaster-tui
```

Or run without installing:

```bash
bunx farcaster-tui
```

### AUR (Arch Linux)

```bash
yay -S farcaster-tui
```

### From source

```bash
git clone https://github.com/backmeupplz/farcaster-tui.git
cd farcaster-tui
bun install
bun src/index.tsx
```

## Keybindings

| Key | Action |
|-----|--------|
| `j` / `k` / arrows | Navigate up/down |
| `Enter` | Open thread / select |
| `q` / `Esc` | Go back / quit |
| `1` | Feed |
| `2` | Notifications |
| `3` | Search |
| `4` | Your profile |
| `n` | New cast |
| `r` | Reply to selected cast |
| `o` | Open author's profile |
| `R` | Refresh |
| `g` / `G` | Jump to top/bottom |
| `s` | Signer manager |
| `?` | Settings |

## Setup

### Reading (no signer needed)

Set your FID in settings (`?` key) to see your home feed. Without a FID, you'll see sample casts.

### Writing (signer required)

To publish casts, like, recast, or follow, you need an Ed25519 signer key registered to your Farcaster account.

1. Press `s` to open the signer manager
2. Press `i` to import a signer
3. Paste your Ed25519 private key (hex)
4. Enter your FID
5. Set an encryption password

Your signer key is encrypted with AES-256-GCM and stored in `~/.config/farcaster-tui/signers.json`.

### How to get a signer key

Create a signer using [Warpcast](https://warpcast.com) or any Farcaster client that supports signer management. The private key is a 64-character hex string (32 bytes Ed25519).

## Configuration

Config is stored in `~/.config/farcaster-tui/config.json`:

```json
{
  "hubUrl": "https://hub.merv.fun",
  "fid": 12345
}
```

### Hub URL

The default hub is `https://hub.merv.fun`. You can change it in settings or by editing the config file. Some public hubs:

- `https://hub.merv.fun`
- `https://hub.pinata.cloud`
- `https://nemes.farcaster.xyz:2281`

## Development

```bash
git clone https://github.com/backmeupplz/farcaster-tui.git
cd farcaster-tui
bun install
```

Run in dev mode with hot reload (restarts on any file change):

```bash
bun dev
```

Run once without watch:

```bash
bun start
```

Type check:

```bash
bun run typecheck
```

Build a standalone binary:

```bash
bun run build
./farcaster-tui
```

## Releasing

Bump `version` in `package.json`, then push a `v*` tag to [git.borodutch.com](https://git.borodutch.com/backmeupplz/farcaster-tui):

```bash
git tag vX.Y.Z && git push origin vX.Y.Z
```

Forgejo Actions (`.forgejo/workflows/publish.yml`) publishes to npm, builds the Linux and macOS binaries and creates the release with them on GitHub and on Forgejo.

## Tech Stack

- [Bun](https://bun.sh) — runtime
- [Ink](https://github.com/vadimdemedes/ink) — React for CLIs
- [@farcaster/hub-nodejs](https://github.com/farcasterxyz/hub-monorepo) — Farcaster message builders and signers
- [Snapchain Hub HTTP API](https://snapchain.farcaster.xyz/) — data layer

## License

MIT
