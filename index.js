const numbers = [
` 0000 
00  00
00  00
00  00
00  00
 0000 `,
` 111  
1111  
  11  
  11  
  11  
111111`,
` 2222 
22  22
   22 
  22  
 22   
222222`,
`33333 
    33
 3333 
    33
    33
33333 `,
`   44 
  44  
 44   
44  44
444444
    44`,
`555555
55    
55555 
    55
    55
55555 `,
`   66 
  66  
 6666 
66  66
66  66
 6666 `,
`777777
    77
   77 
  77  
 77   
77    `,
` 8888 
88  88
 8888 
88  88
88  88
 8888 `,
` 9999 
99  99
 99999
   99 
  99  
 99   `,
 `     
  ::: 
  :::  

  :::  
  ::: `
];


function clearConsole() {
    console.clear();
}

function main(n = '') {
    clearConsole();
    let text = '';
    let text1 = n;
        for( let i = 0 ; i < 6 ; i++ ) {
            for( let j = 0 ; j < text1.length ; j++ ) {
                text += numbers[text1[j]==':'?10:text1[j]].split('\n')[i] + '\t';
            }
            text += '\n';
        }
    return text;
}

setInterval(() => {
    let date = new Date();
    let second = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    console.log(main(`${hour}:${min}:${second}`));

} , 1000 );