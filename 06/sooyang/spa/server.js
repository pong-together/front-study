const express = require("express");
const path = require("path");

const app = express();

// 정적 파일 제공을 위한 경로 설정 (예: CSS, JS, 이미지 파일 등)
app.use("/static", express.static(path.resolve(__dirname, "front", "static")));

// 모든 GET 요청에 대해 index.html 파일 제공을 위한 경로 설정
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "index.html"));
});

// 서버 시작, 환경변수 PORT 또는 3000 포트에서 리스닝
app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
