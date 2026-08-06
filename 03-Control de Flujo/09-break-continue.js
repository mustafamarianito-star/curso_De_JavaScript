let i = 0
while (i < 6) {
    i++;
    if (i === 2) {
        continue; //salta a la siguiente iteracion del bucle
    }
    if (i === 4 ) {
        break; //rompe el bucle
    }
    console.log(i);
}