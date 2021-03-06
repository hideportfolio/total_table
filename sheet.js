var SS_DAILY_ID = '1crQHov2z1qM2MSGwgdpHZ1SPuLEr4jRHlbI-cN3awOE';
var SS_MONTHLY_ID = '1cXOhKl9EqNeu149uq3tMyZjgZb5QnPok_PU-9T9ArXg';

// =TRANSPOSE(FILTER(IMPORTRANGE("1crQHov2z1qM2MSGwgdpHZ1SPuLEr4jRHlbI-cN3awOE", J11"1!BR5:BR32"),ISODD(SEQUENCE(ROWS(IMPORTRANGE("1crQHov2z1qM2MSGwgdpHZ1SPuLEr4jRHlbI-cN3awOE", "1!BR5:BR32"))))))
var SHEET_DAILY = {
    row: {
        admission: 5,
        river_fishing: 7,
        pond_fishing: 9,
        lure_fishing_rental: 11,
        lure_lost_second_time_after: 13,
        river_fishing_set_meal: 15,
        pond_fishing_set_meal: 17,
        lure_half_day_lesson: 19,
        lure_all_day_lesson: 21,
        lure_half_day_lesson_pack: 23,
        lure_all_day_lesson_pack: 25,
        camp_site_use_fee: 27,
        jalan_point: 33,
        jalan_coupon: 35,
        play_in_gero: 37,
        online_payment: 39,
        deduction_subtotal: 41,

        rainbow_fish: 44,
        rock_fish: 46,
        salt_roast: 48,
        tempura: 50,
        sashimi: 52,
        stick_drop: 54,
        salt_roast_rock_fish: 56,
        tempura_rock_fish: 58,
        stick_drop_rock_fish: 60,
        rice_set: 62,
        rice_single: 64,
        styrol: 66,
        lunch: 68,
        subtotal: 72,

        boil_rock_fish: 77,
        boil_amago: 79,
        dry_night_rainbow: 81,
        dry_night_rock_fish: 83,
        dry_night_amago: 85,
        bone_alcohol: 87,
        smoked: 89,
        beer: 91,
        beverage: 93,
        rain_kappa: 95,
        tenugui: 97,
        product_sales: 101,
        total: 105,
    },
    column: 70
};

function getDaily(date = '1') {
    const sheetName = date;
    const sheet = SpreadsheetApp.openById(SS_DAILY_ID).getSheetByName(sheetName);
    let data = sheet.getRange('BR1:BS79').getValues();
    data = new DailyTable(data);
    // Logger.log(data)
    return data;
}

function refreshSheet(sheetName, outList, startColumn = 4, startRow = 8) {
    const sheet = SpreadsheetApp.openById(SS_MONTHLY_ID).getSheetByName(sheetName);
    sheet.getRange(startRow, startColumn, outList.length, outList[0].length).setValues(outList);
}