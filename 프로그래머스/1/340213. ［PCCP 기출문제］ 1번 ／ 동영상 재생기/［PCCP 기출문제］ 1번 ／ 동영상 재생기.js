function solution(video_len, pos, op_start, op_end, commands) {
    // 시간을 "mm:ss" 형식에서 초 단위로 변환하는 함수
    const timeToSeconds = (time) => {
        const [minutes, seconds] = time.split(':').map(Number);
        return minutes * 60 + seconds;
    };

    // 초 단위 시간을 "mm:ss" 형식으로 변환하는 함수
    const secondsToTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    // 각 시간을 초 단위로 변환
    const videoLength = timeToSeconds(video_len);
    const openingStart = timeToSeconds(op_start);
    const openingEnd = timeToSeconds(op_end);
    let currentPosition = timeToSeconds(pos);

    // 오프닝 구간 체크 및 이동
    const updatePosition = () => {
        if (currentPosition >= openingStart && currentPosition <= openingEnd) {
            currentPosition = openingEnd;
        }
    };

    // 시작 시 위치가 오프닝 구간에 있는지 확인
    updatePosition();

    // 명령 처리
    for (const command of commands) {
        if (command === "prev") {
            currentPosition = Math.max(0, currentPosition - 10);
        } else if (command === "next") {
            currentPosition = Math.min(videoLength, currentPosition + 10);
        }

        // 명령 실행 후 오프닝 구간에 있는지 확인
        updatePosition();
    }

    return secondsToTime(currentPosition);
}