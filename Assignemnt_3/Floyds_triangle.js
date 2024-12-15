//Floyds_triangle//
for (i=1; i<=4;i++) {
    switch (i) {
        case 1:
            console.log(i);
            break;
        case 2:
            console.log(i, i+1);
            break;
        case 3: 
            console.log(i+1,i+2, i+3);
            break;
        case 4:
            console.log(i+3, i+4,i+5,i+6)
            default:
                console.log("Floyd's Triangle is printed.");
            break;
    }
}