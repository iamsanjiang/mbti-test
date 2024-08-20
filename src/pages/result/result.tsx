import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./result.scss";
import questionResults from "../../data/question_results.json";
// @ts-ignore
import questions from "../../data/questions.json"; // 假设这里已经正确地导出了类型
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";
import { getResult } from "../../utils/judgeRule";
// eslint-disable-next-line import/first
import { Image, View } from "@tarojs/components"; // 确保 Image 有正确的类型定义
// eslint-disable-next-line import/first
import { AtButton } from "taro-ui";
import GlobalFooter from "../../components/GlobalFooter/globalFooter";
// eslint-disable-next-line import/first
import ENFJ from "../../assets/ENFJ.png";
import ENFP from "../../assets/ENFP.png";
import ENTJ from "../../assets/ENTJ.png";
import ENTP from "../../assets/ENTP.png";
import ESFJ from "../../assets/ESFJ.png";
import ESFP from "../../assets/ESFP.png";
import ESTJ from "../../assets/ESTJ.png";
import ESTP from "../../assets/ESTP.png";
import INFJ from "../../assets/INFJ.png";
import INFP from "../../assets/INFP.png";
import INTJ from "../../assets/INTJ.png";
import ISFJ from "../../assets/ISFJ.png";
import ISFP from "../../assets/ISFP.png";
import ISTJ from "../../assets/ISTJ.png";
import ISTP from "../../assets/ISTP.png";
import INTP from "../../assets/INTP.png";
// eslint-disable-next-line import/first
// @ts-ignore

/*
 * @Description: 结果页面
 */
export default function ResultPage() {
  const answerList = Taro.getStorageSync("answerList"); // 使用 getStorageSync

  if (answerList && answerList.length > 1) {
    const result = getResult(answerList, questions, questionResults);
    let resultName: string = result.resultName as string;
    console.log("Result Picture URL:", result.resultPicture);
    // @ts-ignore
    // @ts-ignore
    return (
      <View className="result">
        <View className="at-article__h1">{result.resultName}</View>
        <View className="at-article__h2">{result.resultDesc}</View>
        {/*<View className="at-article__h2">{result.resultPicture}</View>*/}
        <AtButton
          type="primary"
          circle
          className="primary-btn"
          onClick={() => {
            Taro.reLaunch({
              url: "/pages/index/index",
            });
          }}
        >
          返回主页
        </AtButton>
        {
          resultName == "ENTP（辩论家）" && (
            <Image className="character" src={ENTP} />)
        }
        {
          resultName == "ENTJ（指挥官）" && (
            <Image className="character" src={ENTJ} />)
        }
        {
          resultName == "ENFJ（主人公）" && (
            <Image className="character" src={ENFJ} />)
        }
        {
          resultName == "ENFP（竞选者）" && (
            <Image className="character" src={ENFP} />)
        }
        {
          resultName == "ESFJ（执政官）" && (
            <Image className="character" src={ESFJ} />)
        }
        {
          resultName == "ESFP（表演者）" && (
            <Image className="character" src={ESFP} />)
        }
        {
          resultName == "ESTJ（总经理）" && (
            <Image className="character" src={ESTJ} />)
        }
        {
          resultName == "ESTP（企业家）" && (
            <Image className="character" src={ESTP} />)
        }
        {
          resultName == "INFJ（提倡者）" && (
            <Image className="character" src={INFJ} />)
        }
        {
          resultName == "INFP（调停者）" && (
            <Image className="character" src={INFP} />)
        }
        {
          resultName == "INTJ（建筑师）" && (
            <Image className="character" src={INTJ} />)
        }
        {
          resultName == "INTP（逻辑学家）" && (
            <Image className="character" src={INTP} />)
        }
        {
          resultName == "ISFJ（守卫者）" && (
            <Image className="character" src={ISFJ} />)
        }
        {
          resultName == "ISFP（探险家）" && (
            <Image className="character" src={ISFP} />)
        }
        {
          resultName == "ISTJ（物流师）" && (
            <Image className="character" src={ISTJ} />)
        }
        {
          resultName == "ISTP（鉴赏家）" && (
            <Image className="character" src={ISTP} />)
        }

        <GlobalFooter />
      </View>
    );
  } else {
    Taro.showToast({
      title: "请先作答",
      icon: "error",
      duration: 3000,
    });
    return null;
  }
}
