import "taro-ui/dist/style/components/button.scss" // 按需引入
import {View} from '@tarojs/components'
import './question.scss'
// eslint-disable-next-line import/first
import {AtButton, AtRadio} from "taro-ui";
import questions from "../../data/questions.json";
// eslint-disable-next-line import/first
import {useEffect, useState} from "react";
import GlobalFooter from "../../components/GlobalFooter/globalFooter";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";

/*
 * @Description:做题页面
 */
export default () => {
  // 当前题号
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion]= useState(questions[0]);
  const questionOptions = currentQuestion.options.map(options => {
    return {label: `${options.key}.${options.value}`, value: options.key};
  });
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  // 回答列表
  const [answerList] = useState<string[]>([]);
  // 根据题号更新题目、答案
  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setCurrentQuestion(questions[current - 1]),
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);
  return (
    <View className="question">
      {/*Json数据：{JSON.stringify(answerList)}*/}
      <View className="at-article__h2">
        第{current}题：{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            answerList[current - 1] = value;
          }}
        />
      </View>
      {
        current == questions.length && (
        <View>
          <AtButton type="primary" circle className="controll-btn" disabled={!currentAnswer}
            onClick={() => {
              //local存储（全局）
              Taro.setStorageSync('answerList', answerList)
              Taro.navigateTo({
                url: '/pages/result/result'
              })
            }}
          >
            查看结果
          </AtButton>
        </View>
        )
      }
      {
        current < questions.length && (
        <View>
          <AtButton type="primary" circle className="controll-btn" disabled={!currentAnswer} onClick={() => {setCurrent(current + 1)}}>
            下一题
          </AtButton>
        </View>
        )
      }
      {
        current > 1 && (
          <View>
            <AtButton circle className="controll-btn1" onClick={() => {setCurrent(current - 1)}}>
              上一题
            </AtButton>
          </View>
        )
      }
      <GlobalFooter></GlobalFooter>
    </View>
  );
}
