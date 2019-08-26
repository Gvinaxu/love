function format_time(i) {
    if (i < 10) {
        return '0' + i
    }
    return i
}

function count() {
    let day = $('#day')
    let hour = $('#hour')
    let minute = $('#minute')
    let second = $('#second')

    let now = new Date()
    let start = new Date(2017, 8, 8)
    let days = Math.floor((now.getTime() - start.getTime()) / (24 * 3600 * 1000)) + 1
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    let f_days = format_time(days)
    let f_hours = format_time(hours)
    let f_minutes = format_time(minutes)
    let f_seconds = format_time(seconds)

    day.text(f_days)
    hour.text(f_hours)
    minute.text(f_minutes)
    second.text(f_seconds)
}

count()
setInterval('count()', 1000);