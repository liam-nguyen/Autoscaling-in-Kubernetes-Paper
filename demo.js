const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.write(
    whalesay("Welcome to our demo. Let's calculate digit of PI together"),
  );
  res.end();
});

app.get('/PI/:value', (req, res) => {
  const value = req.params.value;
  res.write(whalesay(`PI is ${digitOfPi(value)} from ${value} iterations`));
  res.end();
});

app.get('/demo', (req, res) => {
  res.write(
    whalesay(`PI is ${digitOfPi(100000000)} from 100,000,000 iterations`),
  );
  res.end();
});

app.listen(port, () => console.log('server start at port ' + port));

const digitOfPi = iterations => {
  let pi = 0;
  let iterator = sequence();

  for (let i = 0; i < iterations; i++) {
    pi += 4 / iterator.next().value;
    pi -= 4 / iterator.next().value;
  }

  function* sequence() {
    let i = 1;
    while (true) {
      yield i;
      i += 2;
    }
  }

  return pi;
};

const whalesay = s => `     _____ 
    < ${s} >
     ----- 
            \\
             \\
                \\     
                                            ##        .            
                                ## ## ##       ==            
                         ## ## ## ##      ===            
                 /""""""""""""""""___/ ===        
        ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   
                 \\______ o          __/            
                    \\    \\        __/             
                        \\____\\______/   `;
