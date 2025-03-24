let salt;
let numIterations = 100000;
let password = 'asdfasdfasdf';
let keySize = 16;

//동기식 키생성
salt = forge.random.getBytesSync(16);
let derivedkey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
console.log('Password:', password);
console.log('Salt:', forge.util.bytesToHex(salt));
console.log('Iterations:', numIterations);
console.log('Derived key', forge.util.bytesToHex(derivedkey));

//송신자 -> 수신자 Salt, numIterations

//수신자
salt = forge.random.getBytesSync(16);
derivedkey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
console.log('Password:', password);
console.log('Salt:', forge.util.bytesToHex(salt));
console.log('Iterations:', numIterations);
console.log('Derived key', forge.util.bytesToHex(derivedkey));

//수신자
derivedkey = forge.pkcs5.pbkdf2(password, salt, numIterations, keySize);
console.log('Derived key(수신자):', forge.util.bytesToHex(derivedkey));

//비동기식 키생성
forge.pkcs5.pbkdf2(
  password,
  salt,
  numIterations,
  keySize,
  function (err, derivedkey) {
    if (err) console.log(err);
    else
      document.writeln( 
        'Derived key 1 (async):',
        forge.util.bytesToHex(derivedkey)
      );
  }
);
