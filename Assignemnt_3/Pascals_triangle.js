for (let i=1; i<=4; i++) {
    switch (i) {
        case 1:
            space1 =" ";
            for (let a=0; a<=3; a++) {
                space1 +=" ";
            }
            console.log(space1,i);
            break;
        case 2: 
            let space2=" ";
            for (let b =0; b<=2; b++) {
                space2+=" ";
                }
            console.log(space2, i-1, i-1);
            break;
        case 3: 
            let space3= " ";
            for (let c=0; c<=1; c++) {
                space3+=" ";
            }
            
            console.log(space3, i-2,i-1,i-2);
            break;
        case 4: 
            let space4 =" ";
            for (let d=0; d<1; d++) {
                space4+=" ";
            }
            console.log(space4, i-3, i-1, i-1, i-3);
            break;
    }
}