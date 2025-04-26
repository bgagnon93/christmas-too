# Christmas 2 🎄✌️

> The sequel to Christmas. February 25th.

Christmas 2 is a celebration that fills the gap between New Years and Easter. It's an opportunity to get friends and family together to laugh, drink, and celebrate life during the coldest time of the year.

## The Legend

The first Christmas 2 occurred on Alex Cullen's 30th birthday (February 15th) - notice how the holiday is built on a 'lie'.

On the first Christmas 2, Alex, Reilly, Brian, and Gabe were trapped in a horrific snowstorm in Brookline outside Boston, unable to get home to Foxborough. They were rescued by a lone Uber driver, Chunbau, a kindly Indian man who never saw a surge price he didn't like.

## The Sacrament

```
It was a Boston. It was a whiteout. It was exactly 60:00.
Chunbau
He pulled a water out of his console.
He would not drink himself.
Who could forget the warming of the anemic. The tips of his fingers blackened with the bite of frost.
His comrades rejuvenated him with their kinship.
The virtues of Christmas 2.
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Sync assets to AWS:

```sh
aws s3 sync dist/ s3://bgagnon-christmas2-bucket --profile admin
```

Invalidate the cache so latest films are showing:

```sh
aws cloudfront create-invalidation --distribution-id E1MMX4DO4QIOHJ --paths "/*" --profile admin
```

Remember Choombau. 60:00.
