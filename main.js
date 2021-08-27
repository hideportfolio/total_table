function myFunction() {
    // for (let i = 0; i <= 31; i++) {
    //     console.log('一歩西に歩く');
    // }

    data = [...Array(31)].map((_, i) => i + 1) //=> [ 0, 1, 2, 3, 4 ]
    Logger.log(data)
}


// daily_total_table
// monthly_total_table