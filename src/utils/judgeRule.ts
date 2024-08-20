/**
 * 获取最佳题目评分结果
 * @param answerList
 * @param questions
 * @param question_results
 */
export function getResult(answerList, questions, question_results) {
  // 存储每个选项对应结果的计数
  const optionCount = {};
  for (let i = 0; i < answerList.length; i++) {
    const answer = answerList[i];
    const question = questions[i];
    for (const option of question.options) {
      if (option.key === answer) {
        const result = option.result;
        if (optionCount[result] == null) {
          optionCount[result] = 0;
        }
        optionCount[result]++;
      }
    }
  }

  let maxScore = 0;
  let maxScoreResult = question_results[0];

  for (const result of question_results) {
    const score = result.resultProp.reduce((count, prop) => {
      return count + (optionCount[prop] || 0);
    }, 0);
    if (score > maxScore) {
      maxScore = score;
      maxScoreResult = result;
    }
  }
  console.log(optionCount);
  return maxScoreResult;
  // return optionCount;
}


