
import { getCurrentInstance,ComponentInternalInstance } from 'vue'
// getCurrentInstance 获取当前的实例

export function useGlobalConfig(){
  const instance: ComponentInternalInstance|null = getCurrentInstance()
  if(!instance){
    console.log('useGlobalConfig 必须得在setup里面')
    return
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {}
  // 返回全局配置的 $AILEMENTE
}