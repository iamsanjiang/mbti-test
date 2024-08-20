import "taro-ui/dist/style/components/button.scss" // 按需引入

import {View} from '@tarojs/components'
import './globalFooter.scss'

/*
 * @Description: 全局footer组件
 */
export default () => {
  return (
    <View className='globalFooter'>
        designed by SANJiANG ©
    </View>
  );
}
