const fs = require('fs'), request = require('request')

let list = []
let counter = 0
const failing = []

function delay(t) {
  return new Promise(resolve => {
     setTimeout(resolve, t)
  })
}

function increment() {
  counter++
  console.log(counter + '/' + list.length)
  if (counter == list.length) {
    console.log('Done!')
    if (failing.length > 0) console.log('Failed downloading: ' + failing.join(', '))
    process.exit(1)
  }
}

async function main() {
  console.log('Getting image list...')
  if (!fs.existsSync('./output/')) fs.mkdirSync('./output/')
  if (fs.existsSync('input.json')) {
    list = JSON.parse(fs.readFileSync('input.json'))
  } else {
    console.log('Please make sure a file named "input.json" exists in this directory')
    process.exit(1)
  }
  console.log('Starting download...')
  for (item of list) {
    const path = 'output/' + item + '.jpg'
    if (!fs.existsSync(path)) {
      request.head('https://source.unsplash.com/' + item, (err, res, body) => {
        const newUrl = res.request.uri.href.split('?')[0] + '?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=1080'
        request(newUrl, (err, res, body) => {
          if (body.includes('<html>')) failing.push(item)
        }).pipe(fs.createWriteStream(path)).on('close', increment)
      })
      await delay(100)
    } else {
      increment()
    }
  }
}

main()
