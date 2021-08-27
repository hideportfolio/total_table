function myFunction() {

    let date = [...Array(31)].map((_, i) => i + 1) 

    const monthly_data = date.map(d => getDaily(d))
    const consigment1 = monthly_data.map(d => d.getConsignmentList1())
    const consigment2 = monthly_data.map(d => d.getConsignmentList2())
    const clearing = monthly_data.map(d => d.getClearingList())
    
    refreshSheet('委託①', consigment1)
    refreshSheet('委託②', consigment2)
    refreshSheet('決済', clearing)
}

