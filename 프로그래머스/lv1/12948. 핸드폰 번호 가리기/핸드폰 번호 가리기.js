function solution(phone_number) {
    let count = ([...phone_number].slice(0, -4).length)
    let a = "*".repeat(count) + [...phone_number].slice(-4).join("")
    return a
}