# mbti-test
>MBTI personality tests can be used to help understand self and others, enhance personal growth, improve career development and relationships. Here is a streamlined test demo. Test your mbti personality in just 2 minutes!👏👏👏

## presentation

https://github.com/user-attachments/assets/9662d751-f827-47c2-be67-9aea390b5c36

## environment setting(take the local environment as an example)
IDE:
> WebStorm 2024.1.2
> 
> WeChat Developer Tools

technical selection:
> Taro3.6.28 + taro-ui library + React + TypeScript

## system design
- use case
  
![在线制图- (2)](https://github.com/user-attachments/assets/650f2cad-e5be-4858-a9e9-e4eda4d6a7d1)

- entity data

![在线制图- (6)](https://github.com/user-attachments/assets/37776961-0047-44d1-ad76-a3aeae10b4bf)

- process flow

![在线制图- drawio (7)](https://github.com/user-attachments/assets/793fc1b0-6419-45db-887f-11e1236f83e5)

## debug notes

- Error importing local images into ts file using taro framework
> Importing image using the official documentation method👇
```
<Image
 src='../../assets/INTIP.png'
/>
```
> However, the image cannot be rendered because taro3.x does not support commonJS writing.You need to refer to such files via the ES6 import syntax👇
```
import {INTP} from '../../assets/INTIP.png';
<Image
 src={INTP}
/>
```











