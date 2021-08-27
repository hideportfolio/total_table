class DailyTable {
    constructor(matrix) {
        this.admission = matrix[SHEET_DAILY.row.admission - 1][0];
        this.riverFishing = matrix[SHEET_DAILY.row.river_fishing - 1][0];
        this.pondFishing = matrix[SHEET_DAILY.row.pond_fishing - 1][0];
        this.lureFishingRental = matrix[SHEET_DAILY.row.lure_fishing_rental - 1][0];
        this.lureLostSecondTimeAfter = matrix[SHEET_DAILY.row.lure_lost_second_time_after - 1][0];
        this.riverFishingSetMeal = matrix[SHEET_DAILY.row.river_fishing_set_meal - 1][0];
        this.pondFishingSetMeal = matrix[SHEET_DAILY.row.pond_fishing_set_meal - 1][0];
        this.lureHalfDayLesson = matrix[SHEET_DAILY.row.lure_half_day_lesson - 1][0];
        this.lureAllDayLesson = matrix[SHEET_DAILY.row.lure_all_day_lesson - 1][0];
        this.lureHalfDayLessonPack = matrix[SHEET_DAILY.row.lure_half_day_lesson_pack - 1][0];
        this.lureAllDayLessonPack = matrix[SHEET_DAILY.row.lure_all_day_lesson_pack - 1][0];
        this.campSiteUseFee = matrix[SHEET_DAILY.row.camp_site_use_fee - 1][0];

        this.jalanPoint = matrix[SHEET_DAILY.row.jalan_point - 1][1];
        this.jalanCoupon = matrix[SHEET_DAILY.row.jalan_coupon - 1][1];
        this.playInGero = matrix[SHEET_DAILY.row.play_in_gero - 1][1];
        this.deductionSubtotal = matrix[SHEET_DAILY.row.deduction_subtotal - 1][0];

        this.rainbowFish = matrix[SHEET_DAILY.row.rainbow_fish - 1][0];
        this.rockFish = matrix[SHEET_DAILY.row.rock_fish - 1][0];
        this.saltRoast = matrix[SHEET_DAILY.row.salt_roast - 1][0];
        this.tempura = matrix[SHEET_DAILY.row.tempura - 1][0];
        this.sashimi = matrix[SHEET_DAILY.row.sashimi - 1][0];
        this.stickDrop = matrix[SHEET_DAILY.row.stick_drop - 1][0];
        this.saltRoastRockFish = matrix[SHEET_DAILY.row.salt_roast_rock_fish - 1][0];
        this.tempuraRockFish = matrix[SHEET_DAILY.row.tempura_rock_fish - 1][0];
        this.stickDropRockFish = matrix[SHEET_DAILY.row.stick_drop_rock_fish - 1][0];
        this.riceSet = matrix[SHEET_DAILY.row.rice_set - 1][0];
        this.riceSingle = matrix[SHEET_DAILY.row.rice_single - 1][0];
        this.styrol = matrix[SHEET_DAILY.row.styrol - 1][0];
        this.lunch = matrix[SHEET_DAILY.row.lunch - 1][0];
        this.subtotal= matrix[SHEET_DAILY.row.subtotal - 1][0];
        this.product_sales= matrix[SHEET_DAILY.row.product_sales - 1][0];
        this.total= matrix[SHEET_DAILY.row.total - 1][0];
    }

    getForm(row) {
        this.date = row[SHEET_SKILL_CHECK_EX.column.date - 1];
        this.trainer = row[SHEET_SKILL_CHECK_EX.column.trainer_name - 1].replace(/\s+/g, '');
        this.trainee = row[SHEET_SKILL_CHECK_EX.column.trainee_name - 1].replace(/\s+/g, '');
        this.stage = row[SHEET_SKILL_CHECK_EX.column.stage - 1];
        this.scoreRate = row[SHEET_SKILL_CHECK_EX.column.scoreRate - 1];
        this.skillCheckCount.circle = row[SHEET_SKILL_CHECK_EX.column.skillCheckCircleCount - 1];
        this.skillCheckCount.triangle = row[SHEET_SKILL_CHECK_EX.column.skillCheckTriangleCount - 1];
        this.skillCheckCount.faild = row[SHEET_SKILL_CHECK_EX.column.skillCheckFaildCount - 1];
        this.row = row;

        return this;
    }

    formDataFormating(date = undefined) {
        this.skillCheckCount.faild = this.row.filter(n => n === '×').length;
        this.skillCheckCount.triangle = this.row.filter(n => n === '△').length;
        this.skillCheckCount.circle = this.row.filter(n => n === '◯').length;
        this.scoreRate = this.getScoreRate();

        this.date = date ? Moment.moment(date)
            : this.date ? Moment.moment(this.date)
                : Moment.moment();

        this.date = this.date.format('YYYY/MM/DD');
        return [
            this.date,
            this.trainer,
            this.trainee,
            this.stage,
            this.scoreRate,
            this.skillCheckCount.circle,
            this.skillCheckCount.triangle,
            this.skillCheckCount.faild
        ];
    }

    getScoreRate() {
        return (this.skillCheckCount.triangle + this.skillCheckCount.circle * 2) / ((this.skillCheckCount.faild + this.skillCheckCount.triangle + this.skillCheckCount.circle) * 2) * 100;
    }
}