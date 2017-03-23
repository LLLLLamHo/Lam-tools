/**
 * Created by lamho on 2017/3/23.
 */
/**
 * 判断是否为测试环境
 */
export function isDev() {
    let host = window.location.host;
    if(host == 'm-dev.zuzuche.com'){
        return true;
    }else{
        return false;
    }
}