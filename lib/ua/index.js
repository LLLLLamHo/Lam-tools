

let obj = {
    type: '',
    version: ''
};
const reg = /\w+\.+\w+\.+\w+/;


/**
 * 获取app的版本号和设备类型
 */
export function getAppUA() {
    let ua = window.navigator.userAgent.toLocaleLowerCase();
    const IOSUA = 'zzcios';
    const AndroidUA = 'zzcandroid';

    obj.type = ua.indexOf(IOSUA) != -1 ? 'ios' : ua.indexOf(AndroidUA) != -1 ? 'android' : null;

    if (obj.type == 'ios') {
        let text = ua.split('/')[1];
        obj.version = text.match(reg)[0];
    } else if (obj.type == 'android') {
        obj.version = ua.split('/')[1];
    } else {
        obj.version = null;
    }

    return obj;
}

/**
 * 比较版本号
 * @param targetVersion  --  传入目标版本号
 * 如果当前版本号大于传入版本号返回true否则false
 */
export function compareVersion(targetVersion) {

    if(!reg.test(targetVersion)){
        console.error('版本号格式不对，格式："5.1.1"');
        return;
    }

    let targetVersionArr = targetVersion.split('.'),
        currVersionArr = obj.version.split('.');

    for(let i = 0;i < currVersionArr.length;i++){
        if(parseInt(currVersionArr[i]) < parseInt(targetVersionArr[i])){
            return false;
        }
    }
    return true;
}
