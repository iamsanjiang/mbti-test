import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import GlobalFooter from '../../components/GlobalFooter/globalFooter';
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";

/*
 * @Description:首页
 */
export default () => {

  return (
    <View className='index'>
      <View className='at-article__h2'>欢迎使用MBTI性格测试！</View>
      <p></p>
      <View className='at-article__h3'>在这里，你将花费2分钟的时间，就能测试你的MBTI类型，希望这能帮助你对自己有更清晰的了解。</View>
      <AtButton
        type='primary'
        circle
        className='primary-btn'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/question/question'
          })
        }}
      >
        点击开始测试
      </AtButton>
      <GlobalFooter />
    </View>
  );
};
