Bulk gallery import

1. Create one folder per gallery section inside `gallery-import/`
2. Put the photos inside that folder
3. Run `npm run import:gallery`
4. Check the new photos in Sanity

Examples:

- `gallery-import/London/`
- `gallery-import/Rotterdam/`

What the command does:

- copies the photos into `public/Gallery/<folder>`
- creates the missing gallery folders in Sanity
- creates the missing gallery photo documents in Sanity

After import, you can still adjust:

- the visible title
- the alt text
- the optional caption
- the display format
