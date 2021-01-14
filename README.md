# ts todo list

## todo list
- [ ] 작성
- [ ] 수정
- [ ] 삭제
- [ ] 완료 표시

## 프로젝트 셋팅 방법
[참고1](https://helloinyong.tistory.com/124)
[참고2](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/)
1. yarn init
2. tsc -init
3. echo "/node_modules" >> .gitignore
4. yarn add express typescript ts-node nodemon @types/node @types/express --save
5. "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ." 
  }, 추가