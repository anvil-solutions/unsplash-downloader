const fs = require('fs'), request = require('request')

const list = ["_8bnn1GqX70","uOBApnN_K7w","PYBmNk304G4","wXuzS9xR49M","imEqHThoix8","IvM3xXl4HGk","5XXfyMMan84","wXUVB62fqmI","qL6WpOYgzaI","dZOWVsVJETo","uOBApnN_K7w","wHCe4X6Kvdo","y_wGdAJMdOo","XMAflF2mtZo","k9X5yGle-NA","UErWoQEoMrc","gpP-OkJ5BbI","_qxbJUr9RqI","RJFrBmIvBZ4","l1uVrvjZrsQ","hV5ww4cAkjY","d7jhBvnZ9Pc","vHnVtLK8rCc","ocwmWiNAWGs","ocwmWiNAWGs","ocwmWiNAWGs","RPjyNMHDrFY","VnpJ5_m-2mQ","h39GHaRssNo","xhOUnxVVb6s","uE-BD8_Cx18","h37NorLUoEI","GhfkRvlXK8c","uOBApnN_K7w","zjBYgtnV9So","FhXZSP-4ARg","PT-GXFtQj-s","11VU8ydkbiA","W03KoXG5ji0","xkgTb0qgzaA","_xN7UbcZ33I","VpOpy6QrDrs","j2ofdcpPpP0","eB3Pi5-U8l8","jKlzW7riLcU","6fRyao7izMk","DvonVvKn3CA","cz6F-gipkuQ","eDj-bODzFx8","BNZrKnocA3c","6VhPY27jdps","K4Ke26T7rMY","rNQ3TFuLkQU","ocwmWiNAWGs","1OfPse1qVLM","uOBApnN_K7w","4YMVHIRRC9E","SACRQSof7Qw","G6fmW79llfY","lV9_xEJcrEE","aZzYKVLVki8","wx4A5w85Sm8","9YVh9yQvvvk","8cqlBGw84oU","IN3Mr4A4SqQ","KaK2jp8ie8s","uTBMw32LIOI","_8bnn1GqX70","12eHC6FxPyg","QeAbvIAJSLw","3K7jJn3QAa0","3ywqZsZUoHY","Vgw1t3t6WMw","_8bnn1GqX70","880b45lhxCo","zZQAWoSM0eM","vIiye0QDryo","YQmylDbguYo","anoUoYxD6oQ","5300Q8dOY18","_8bnn1GqX70","gMW2NZ7JGrE","v9deD75EaRw","t9M_Scl7xdg","LYaW8eq3mjs","H5k8PoC1BBc","vo7GGTh6sXM","OzOA6CsEEzY","H6NPHHWRZPw","OpLaMhfqTwQ","dmkmrNptMpw","p1rLXdPQMas","9bvZPvQTKIA","c69HK1HKHYs","Bnl2cjUA8zE","7CcXR5wIhEY","FaMBWkmvPyY","_8bnn1GqX70","TIuzIxh69KE","OrTjocYe1b4","-5nwt_aN2E0","wk-MrgAa3RM","gsTocjJ62HI","4qzaeR_sTYA","vTXtQ8ZBzvY","fq60QruENEg","bBCRrplhhZ4","sQzoEk9ZrRQ","JE0xlTBks20","UE7YA2igrxQ","rsWZ-P9FbQ4","4OEnJUQ5muI","RYqO8DhPg68","_8bnn1GqX70","1tsAbBciTic","uOBApnN_K7w","xWijL2q3xAM","CNZ-9s5p2i8","pUJgETN2z9o","yMAAiUZAJpo","BIj5FAFQ_rk","QEbIgaxP7N8","dVBxFStU7kQ","r01ZopTiEV8","O3TlS547j7k","ZPfd3ZobOc0","OnFUNVQsMU4","XlA2994Txhw","nRsbBhfwDNI","aeESmmFKH0M","ZS_RypKo9sk","VkQJDLEPN3w","OE87GAgPG18","MQUqbmszGGM","xz971SzqmGU","oqLnHkvny3U","t4NNQyv09Sw","KMEqlxz3mKc","4yrJLEvUBIg","VWmCwpWSVf0","TwfuHcKKByw","3vCaADeY8aM","kvRSlizNRqE","9eIbwtyl4Xs","c0mQ2BImbxk","3ym6i13Y9LU","SSIwIRCu7bM","LSYSeTfEe4k","tGUZpfDvB1s","1IxhHrTxbwI","xmuIgjuQG0M","_8bnn1GqX70","Zt7F76Ce4vw","1qnIDA6gZ1g","f5hCYk1PdA0","rsWZ-P9FbQ4","4_jhDO54BYg","aZ3B7Upp7aQ","fV3zTanbO80","N8-bMqUMS8g","koy6FlCCy5s","uOBApnN_K7w","jdtkZO_jQOU","Yui5vfKHuzs","QH8SHBARVVk","H_PXix_4Bwc","_8bnn1GqX70","3Mg7jtoo8t4","y_wGdAJMdOo","At_XGKqg9Sk","FxEuJunGP_M","J88no2vCrTs","4hQaZN5a1Xc","IGOBsR93I7Y","P-zN6GfHv8M","NyvcYt9J5KU","aLHhsDbj1Iw","iy7oJwLXyPw","YvkH8R1zoQM","taW61V8E4Fk","GXehL5_crJ4","BiWb1Y8wpZk","g4wzhY8qiMw","JcjbATrTtHE","wL7XPZphUHI","UxhIU5f5GN4","_8bnn1GqX70","LSYSeTfEe4k","Sc0nK3XFMoY","umq8NBq2If8","uOBApnN_K7w","IbL3Zd62Q7Q","4AQjVB2UrdU","BKZ61MXYBPQ","pe9T4ROjpzQ","_8bnn1GqX70","pqJ21tErTgI","3uJt73tr4hI","W2d_FskKkpw","u1znlrXjowM"]

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
