/**
 * Created by lamho on 2017/3/23.
 */

/**
 * 获取日期的所有参数
 * @param date  --  时间，可以为毫秒或者时间对象
 *
 * **/

export function getDateInfo(date) {
    let dateInfo = new Date(date);
    if(dateInfo == 'Invalid Date'){
        console.error('请输入正确的时间毫秒数，或者时间对象');
        return false;
    }

    let data = {
        year : dateInfo.getFullYear(),
        month : dateInfo.getMonth() + 1 < 10 ? `0${dateInfo.getMonth() + 1}` : dateInfo.getMonth() + 1,
        day : dateInfo.getDate() < 10 ? `0${dateInfo.getDate()}` : dateInfo.getDate(),
        hour : dateInfo.getHours() < 10 ? `0${dateInfo.getHours()}` : dateInfo.getHours(),
        minute : dateInfo.getMinutes() < 10 ? `0${dateInfo.getMinutes()}` : dateInfo.getMinutes(),
        second : dateInfo.getSeconds() < 10 ? `0${dateInfo.getSeconds()}` : dateInfo.getSeconds(),
        millisecond : dateInfo.getMilliseconds(),
        time : dateInfo.getTime(),
        week : dateInfo.getDay()
    };

    return data;
}

/**
 * 计算天数
 * @param currDate  --  当前时间
 * @param targetDate  --  目标时间
 *
 * **/

export function computationDay(currDate,targetDate) {

    let cd = new Date(currDate),
        td = new Date(targetDate);

    if(cd == 'Invalid Date'){
        console.error('请输入正确的当前时间');
        return false;
    }
    if(td == 'Invalid Date'){
        console.error('请输入正确的目标时间');
        return false;
    }

    let fristTime = cd > td ? cd : td,
        secondTime = cd > td ? td : cd;


    let result = fristTime.getTime() - secondTime.getTime();
    result = parseInt(result)/1000/60/60/24;
    return result;
}