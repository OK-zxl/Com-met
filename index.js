/*
 * @Author: your name
 * @Date: 2021-11-20 10:12:14
 * @LastEditTime: 2021-11-20 10:25:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-web/Users/xzl/Desktop/code-demo/npm/Com-met/index.js
 */
export const dateToFormat=(date)=>{
    date.toLocaleString("en-US", { hour12: false }).replace(/\b\d\b/g, '0$&').replace(new RegExp('/','gm'),'-')
}

export const obtainDate=()=>{
    let date = new Date();
         let year = date.getFullYear();
         let month = date.getMonth() + 1;
         let day=date.getDate();
         let hours=date.getHours();
         let minu=date.getMinutes();
         let second=date.getSeconds();
         //判断是否满10
         let arr=[month,day,hours,minu,second];
         arr.forEach(item=>{
           item< 10?"0"+item:item;
         })
         return year+'-'+arr[0]+'-'+arr[1]+' '+arr[2]+':'+arr[3]+':'+arr[4]      
   }

   export const returnTimestamp=((strTime)=>{
    let middleDate=new Date(strTime)
    return middleDate.toLocaleString('zh-CN',{hour12:false}).replace(/\b\d\b/g, '0$&').replace(new RegExp('/','gm'),'-')
  })

  export const judgeArr=(arr)=>{
        if(Array.isArray(arr)){
            return true;
        }
    }

// 深拷贝
export const deepClone=function(origin,target){
    var target = target || {}; //定义target
    for(var key in origin) {  //遍历原对象
        if(origin.hasOwnProperty(key)) {
            if(Array.isArray(origin[key])) { //如果是数组
                target[key] = [];
                deepClone(origin[key],target[key]) //递归
            } else if (typeof origin[key] === 'object' && origin[key] !== null) {
                target[key] = {};
                deepClone(origin[key],target[key]) //递归
            }
            target[key] = origin[key];
        }
    }
    return target;
}
