


var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function combinaciones(array1,array2,array3){
let domainname ="";
    for(i=0;i<=array1.length-1;i++){
        for(j=0;j<=array2.length-1;j++){
            for(k=0;k<=array3.length-1;k++){
                domainname=array1[i]+array2[j]+array3[k]+".com";
                console.log(domainname);
            }
        }
    }
console.log(domainname)
}

combinaciones(pronoun, adj, noun);