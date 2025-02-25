
function month(): string[] {
    return [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]
}
export function getDatePresentation(date: Date): string {
    return `${month()[date.getMonth()]} ${date.getFullYear()}г`
}

export function addMonths(date: Date, months: number) {
    let result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }
