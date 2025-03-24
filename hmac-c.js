//송신자
let key = 'secretkey';
let message = '비밀메시지';
document.writeln('송신자 메시지:', message);
document.writeln('송신자 키:', key);

let hmac1 = forge.hmac.create();
hmac1.start('sha256', key);
hmac1.update(message);
let result1 = hmac1.digest().toHex();
document.writeln('HMAC-SHA1:', result1);

//공격자 : 변조 , 도청

//수신자
let message2 = message;
let key2 = key;
let hmac2 = forge.hmac.create();
hmac2.start('sha1', key2);
hmac2.update(message2);
let result2 = hmac2.digest().toHex();
document.writeln('HMAC-SHA1:', result2);

if (result1 === result2) document.writelnln('메시지 검증 성공');
else document.writeln('메시지에러');
